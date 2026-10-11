import { motion } from "framer-motion";
import { ArrowRight, Calendar, Heart, Users, Play, Globe } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/modern_church_exterior_with_diverse_community.png";
import welcomeVideo from "@assets/generated_videos/cinematic_sunrise_over_peaceful_landscape.mp4";
import { Section } from "@/components/Section";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Adelanto Bilingual Church Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex flex-col items-center mb-12 md:mb-16 pt-6 md:pt-10">
              <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/50 font-medium backdrop-blur-sm">
                {t("hero_welcome")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-shadow-lg">
              Adelanto Bilingual <br />
              <span className="text-secondary">Seventh-day Adventist Church</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              {t("hero_subtitle")}
            </p>
            
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white to-transparent"
          />
        </motion.div>
      </section>

      {/* Intro / Welcome Section */}
      <Section className="text-center">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">{t("home_mission_label")}</span>
        <h2 className="text-3xl md:text-5xl mb-8 max-w-3xl mx-auto">
          {t("home_mission_title")} <span className="text-primary relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[8px] after:bg-secondary/30 after:-z-10">{t("home_mission_highlight")}</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          {[
            { 
              icon: <Heart className="w-8 h-8 text-secondary" />, 
              title: t("home_love_god_title"), 
              desc: t("home_love_god_desc")
            },
            { 
              icon: <Users className="w-8 h-8 text-secondary" />, 
              title: t("home_serve_others_title"), 
              desc: t("home_serve_others_desc")
            },
            { 
              icon: <Globe className="w-8 h-8 text-secondary" />, 
              title: t("home_share_hope_title"), 
              desc: t("home_share_hope_desc")
            },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-secondary/50 transition-colors group">
              <div className="mb-6 p-4 rounded-xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Video / Worship Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-display mb-6 text-white">{t("home_new_beginnings_title")}</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t("home_new_beginnings_desc")}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>{t("home_worship_music")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>{t("home_biblical_preaching")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>{t("home_family_atmosphere")}</span>
              </li>
            </ul>
            <Link href="/ministries" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors">
              {t("home_explore_ministries")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative group cursor-pointer">
              <video 
                src={welcomeVideo} 
                className="w-full h-auto object-cover aspect-video"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Service Times */}
      <Section bg="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">{t("home_sabbath_title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("home_sabbath_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-lg transition-shadow">
            <div className="p-4 bg-primary/10 text-primary rounded-xl">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("footer_saturday_school")}</h3>
              <p className="text-primary font-semibold mb-2">{t("home_sabbath_school_time")}</p>
              <p className="text-muted-foreground">
                {t("home_sabbath_school_desc")}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-6 hover:shadow-lg transition-shadow">
            <div className="p-4 bg-secondary/20 text-yellow-700 rounded-xl">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("footer_divine_worship")}</h3>
              <p className="text-primary font-semibold mb-2">{t("home_worship_time")}</p>
              <p className="text-muted-foreground">
                {t("home_worship_desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
          >
            {t("home_get_directions")}
          </Link>
        </div>
      </Section>
    </div>
  );
}
