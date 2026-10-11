import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import funeralAnnouncementImg from "@assets/1000043809_1772827324309.jpg";

const upcomingEvents = [
  {
    id: 1,
    titleEn: "No Fear! No Force! Bootcamp",
    titleEs: "¡Sin Miedo! ¡Sin Fuerza! Bootcamp",
    descriptionEn: "Join us for an inspiring evangelistic campaign with Keith Johnson as speaker, Miguel Montoya as translator, and Roxanne Johnson as musician.",
    descriptionEs: "Únase a nosotros para una inspiradora campaña evangelística con Keith Johnson como orador, Miguel Montoya como traductor y Roxanne Johnson como músico.",
    messageTitles: [
      { en: "The Truth About Mercy: Easy to Receive but Hard to Give", es: "La Verdad Sobre la Misericordia: Fácil de Recibir pero Difícil de Dar" },
      { en: "Running Out of Time: God is Good but for How Long? Seven Last Plagues", es: "Se Acaba el Tiempo: Dios es Bueno pero ¿Por Cuánto Tiempo? Las Siete Últimas Plagas" },
      { en: "To Love or Not to Love, That is the Question!", es: "¿Amar o No Amar? ¡Esa es la Pregunta!" },
      { en: "From Hateholic to Agapeist", es: "De Odiador a Agapeísta" }
    ],
    healthNuggets: { en: "Health Nuggets by Rubisel Ramirez", es: "Consejos de Salud por Rubisel Ramirez" },
    date: "January 24 - February 7, 2026",
    dateEs: "24 de Enero - 7 de Febrero, 2026",
    time: "6:00 PM - 8:00 PM Daily",
    timeEs: "6:00 PM - 8:00 PM Diariamente",
    location: "Main Sanctuary",
    locationEs: "Santuario Principal",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    titleEn: "Community Health Fair",
    titleEs: "Feria de Salud Comunitaria",
    descriptionEn: "Free health screenings, nutrition counseling, and wellness resources for the entire family. Open to all community members.",
    descriptionEs: "Exámenes de salud gratuitos, consejería nutricional y recursos de bienestar para toda la familia. Abierto a todos los miembros de la comunidad.",
    date: "Date Coming Soon",
    dateEs: "Fecha Próximamente",
    time: "TBA",
    timeEs: "Por Anunciar",
    location: "Fellowship Hall",
    locationEs: "Salón de Confraternidad",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    titleEn: "Youth Revival Weekend",
    titleEs: "Fin de Semana de Avivamiento Juvenil",
    descriptionEn: "A special weekend designed for our young people featuring dynamic speakers, worship, and fellowship activities.",
    descriptionEs: "Un fin de semana especial diseñado para nuestros jóvenes con oradores dinámicos, adoración y actividades de confraternidad.",
    date: "Date Coming Soon",
    dateEs: "Fecha Próximamente",
    time: "TBA",
    timeEs: "Por Anunciar",
    location: "Church Campus",
    locationEs: "Campus de la Iglesia",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Events() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t("events_title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("events_subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {language === "en" ? "Announcements" : "Anuncios"}
          </h2>
          <Card className="overflow-hidden border-primary/10 shadow-xl" data-testid="card-funeral-announcement">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="overflow-hidden">
                <img
                  src={funeralAnnouncementImg}
                  alt={language === "en" ? "Funeral Service Announcement" : "Anuncio de Servicio Fúnebre"}
                  className="w-full h-full object-cover"
                  data-testid="img-funeral-announcement"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-center">
                <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                  {language === "en" ? "Forever in Our Hearts" : "Por Siempre en Nuestros Corazones"}
                </p>
                <h3 className="text-2xl font-bold text-primary mb-3" data-testid="text-funeral-name">
                  H.R.H. Eze Dr. Onyenkwere Okwandu
                </h3>
                <p className="text-muted-foreground text-sm mb-1">Eze Oha 1</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Onicha Ngwa Amairinano Autonomous Community, Obingwa L.G.A., Abia State, Nigeria
                </p>
                <p className="text-sm text-muted-foreground mb-2 italic">
                  {language === "en"
                    ? "With deep sorrow and total submission to God's will, we, the Okwandu Family, announce the passing of our patriarch."
                    : "Con profundo dolor y total sumisión a la voluntad de Dios, nosotros, la familia Okwandu, anunciamos el fallecimiento de nuestro patriarca."}
                </p>
                <div className="border-t border-border pt-4 mt-2 space-y-3">
                  <h4 className="font-bold text-primary text-sm">
                    {language === "en" ? "Burial Arrangements:" : "Arreglos Funerarios:"}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">{language === "en" ? "March 15, 2026 – Memorial Service" : "15 de Marzo, 2026 – Servicio Conmemorativo"}</p>
                        <p className="text-muted-foreground">Corona Seventh-Day Adventist Church</p>
                        <p className="text-muted-foreground">2550 South Main Street, Corona, CA 92882</p>
                        <p className="text-muted-foreground">1:00 PM – {language === "en" ? "Repast to follow" : "Recepción después"}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">{language === "en" ? "April 30, 2026 – Burial Service" : "30 de Abril, 2026 – Servicio de Entierro"}</p>
                        <p className="text-muted-foreground">Onicha Ngwa Amairiano Aut. Community</p>
                        <p className="text-muted-foreground">Obingwa L.G.A., Abia State, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        <h2 className="text-3xl font-bold text-primary mb-8 text-center max-w-4xl mx-auto">
          {language === "en" ? "Upcoming Events" : "Próximos Eventos"}
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={language === "en" ? event.titleEn : event.titleEs}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-primary mb-3">
                      {language === "en" ? event.titleEn : event.titleEs}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {language === "en" ? event.descriptionEn : event.descriptionEs}
                    </p>
                    {event.messageTitles && (
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-secondary mb-2">
                          {language === "en" ? "Message Topics:" : "Temas de los Mensajes:"}
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {event.messageTitles.map((msg, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-secondary font-bold">{idx + 1}.</span>
                              <span>{language === "en" ? msg.en : msg.es}</span>
                            </li>
                          ))}
                        </ul>
                        {event.healthNuggets && (
                          <p className="mt-3 text-sm font-medium text-primary">
                            {language === "en" ? event.healthNuggets.en : event.healthNuggets.es}
                          </p>
                        )}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{language === "en" ? event.date : event.dateEs}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{language === "es" && event.timeEs ? event.timeEs : event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{language === "en" ? event.location : event.locationEs}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
