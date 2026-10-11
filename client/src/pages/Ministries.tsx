import { Section } from "@/components/Section";
import { User, Users, Music, BookOpen, Utensils, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Ministries() {
  const { t } = useLanguage();
  
  const ministries = [
    {
      title: t("ministry_youth_title"),
      icon: <Users className="w-8 h-8" />,
      desc: t("ministry_youth_desc"),
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: t("ministry_community_title"),
      icon: <HeartHandshake className="w-8 h-8" />,
      desc: t("ministry_community_desc"),
      color: "bg-green-100 text-green-600"
    },
    {
      title: t("ministry_music_title"),
      icon: <Music className="w-8 h-8" />,
      desc: t("ministry_music_desc"),
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: t("ministry_women_title"),
      icon: <User className="w-8 h-8" />,
      desc: t("ministry_women_desc"),
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: t("ministry_bible_title"),
      icon: <BookOpen className="w-8 h-8" />,
      desc: t("ministry_bible_desc"),
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      title: t("ministry_fellowship_title"),
      icon: <Utensils className="w-8 h-8" />,
      desc: t("ministry_fellowship_desc"),
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-muted py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">{t("ministries_title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("ministries_subtitle")}
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${ministry.color} flex items-center justify-center mb-6 transition-transform group-hover:rotate-6`}>
                {ministry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-foreground">{ministry.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {ministry.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
