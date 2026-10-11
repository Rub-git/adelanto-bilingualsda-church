import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import prRolandImg from "@assets/pr_roland_1768151044268.jpg";
import prMiguelImg from "@assets/pr_miguel_1768151103625.jpg";
import prEdgarImg from "@assets/Lorens_1768151468167.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function Pastors() {
  const { t } = useLanguage();
  
  const pastors = [
    {
      role: t("pastor_senior_role"),
      name: "Edgar Lloren",
      message: t("pastor_senior_message"),
      image: prEdgarImg
    },
    {
      role: t("pastor_associate_role"),
      name: "Rowland Nwosu",
      message: t("pastor_associate_message"),
      image: prRolandImg
    },
    {
      role: t("pastor_lay_role"),
      name: "Elder Miguel Montoya",
      message: t("pastor_lay_message"),
      image: prMiguelImg
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t("pastors_title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pastors_subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pastors.map((pastor, index) => (
            <motion.div
              key={pastor.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-primary/10 overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-6 border-2 border-primary/20">
                    <AvatarImage src={pastor.image} alt={pastor.name} />
                    <AvatarFallback>{pastor.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">
                    {pastor.role}
                  </span>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{pastor.name}</h2>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{pastor.message}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
