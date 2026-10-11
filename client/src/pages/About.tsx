import { Section } from "@/components/Section";
import heroBg from "@assets/generated_images/modern_church_exterior_with_diverse_community.png";
import { useLanguage } from "@/hooks/use-language";

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{t("about_title")}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("about_subtitle")}</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-wide text-sm mb-2 block">{t("about_story_label")}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              {t("about_story_title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about_story_p1")}</p>
              <p>{t("about_story_p2")}</p>
              <p>{t("about_story_p3")}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroBg} 
                alt="Church Community" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-border">
              <p className="font-display font-bold text-lg text-primary mb-1">"For where two or three are gathered..."</p>
              <p className="text-sm text-muted-foreground">Matthew 18:20</p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-12 font-display">{t("about_beliefs_title")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">{t("about_bible_title")}</h3>
              <p className="text-muted-foreground">{t("about_bible_desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">{t("about_trinity_title")}</h3>
              <p className="text-muted-foreground">{t("about_trinity_desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">{t("about_salvation_title")}</h3>
              <p className="text-muted-foreground">{t("about_salvation_desc")}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">{t("about_sabbath_title")}</h3>
              <p className="text-muted-foreground">{t("about_sabbath_desc")}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
