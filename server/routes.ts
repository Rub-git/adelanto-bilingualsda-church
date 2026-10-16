import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { notifyContactRequest } from "./contact-email";
import { api } from "@shared/routes";
import { z } from "zod";

const SITE_URL = (process.env.SITE_URL || "https://adelantobilingualsdachurch.com").replace(/\/$/, "");

const DEPLOY_DATE = new Date().toISOString().split("T")[0];

const SITEMAP_PAGES = [
  { path: "/",           priority: "1.0", changefreq: "weekly"  },
  { path: "/about",      priority: "0.8", changefreq: "monthly" },
  { path: "/ministries", priority: "0.8", changefreq: "monthly" },
  { path: "/contact",    priority: "0.7", changefreq: "monthly" },
  { path: "/events",     priority: "0.8", changefreq: "weekly"  },
  { path: "/gallery",    priority: "0.6", changefreq: "monthly" },
  { path: "/pastors",    priority: "0.7", changefreq: "monthly" },
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/sitemap.xml", (_req, res) => {
    const urls = SITEMAP_PAGES.map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${DEPLOY_DATE}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.header("Cache-Control", "public, max-age=86400");
    res.send(xml);
  });

  app.get("/robots.txt", (_req, res) => {
    res.header("Content-Type", "text/plain");
    res.header("Cache-Control", "public, max-age=86400");
    res.send(`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const request = await storage.createContactRequest(input);
      await notifyContactRequest(request);
      res.status(201).json(request);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
