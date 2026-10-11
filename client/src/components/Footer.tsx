import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import sdaLogo from "@assets/seventh-day-adventist-church_1768147458845.jpg";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <img src={sdaLogo} alt="SDA Logo" className="w-12 h-12 object-contain bg-white rounded-md p-1" />
              <span className="font-display font-bold text-xl md:text-2xl text-center md:text-left">
                Adelanto Bilingual <br className="hidden md:block" />
                Seventh-day Adventist Church
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              A diverse community of believers waiting for the soon return of Jesus Christ. 
              Serving Adelanto and the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-secondary transition-colors">{t("nav_home")}</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">{t("nav_about")}</Link></li>
              <li><Link href="/ministries" className="hover:text-secondary transition-colors">{t("nav_ministries")}</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">{t("nav_contact")}</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-secondary">{t("footer_service_times")}</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <strong className="text-white block">{t("footer_saturday_school")}</strong>
                Saturday 9:30 AM
              </li>
              <li>
                <strong className="text-white block">{t("footer_divine_worship")}</strong>
                Saturday 11:00 AM
              </li>
              <li>
                <strong className="text-white block">{t("footer_prayer_meeting")}</strong>
                Wednesday 7:00 PM & Friday 7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-secondary">{t("footer_contact")}</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>11568 Chamberlain Way,<br />Adelanto, CA 92301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>(909) 435-5111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@adelantobilingualsdachurch.com</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/Adelanto7day/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Adelanto Bilingual Seventh Day Adventist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
