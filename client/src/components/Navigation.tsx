import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import sdaLogo from "@assets/seventh-day-adventist-church_1768147458845.jpg";

import { useLanguage } from "@/hooks/use-language";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav_home") },
    { href: "/about", label: t("nav_about") },
    { href: "/ministries", label: t("nav_ministries") },
    { href: "/pastors", label: t("nav_pastors") },
    { href: "/gallery", label: t("nav_gallery") },
    { href: "/events", label: t("nav_events") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto flex h-24 items-center justify-between px-4">
        <a href="/" className="flex items-center shrink-0">
          <img
            src={sdaLogo}
            alt="Adelanto Bilingual Seventh-day Adventist Church"
            className="h-12 w-12 md:h-16 md:w-16 rounded-xl object-contain bg-white p-1 shadow-sm"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full",
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-bold transition-all",
              scrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-primary"
            )}
          >
            <Globe className="w-3 h-3" />
            {language === "en" ? "ESPAÑOL" : "ENGLISH"}
          </button>

          <Link
            href="/contact"
            className={cn(
              "px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
              scrolled
                ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
                : "bg-white text-primary hover:bg-white/90 shadow-black/10"
            )}
          >
            {t("nav_visit")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden z-50 p-2 rounded-full transition-colors",
            scrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-background/95 backdrop-blur-xl shadow-xl p-4 pt-24 pb-8 flex flex-col gap-4 border-b border-border md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-center p-3 rounded-lg hover:bg-muted text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-primary text-primary font-bold transition-all"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "ESPAÑOL" : "ENGLISH"}
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20"
              >
                {t("nav_visit")}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
