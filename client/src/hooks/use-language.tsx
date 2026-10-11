import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_ministries: "Ministries",
    nav_pastors: "Our Pastors",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_visit: "Visit Us",
    hero_welcome: "Welcome Home",
    hero_subtitle: "A diverse community united by faith, hope, and love. Join us as we worship, serve, and grow together in Christ.",
    pastors_title: "Our Pastors",
    pastors_subtitle: "Meet the leadership dedicated to serving our church family and the Adelanto community.",
    gallery_title: "Our Gallery",
    gallery_subtitle: "Glimpses into the life and mission of Adelanto Bilingual SDA Church.",
    footer_service_times: "Service Times",
    footer_contact: "Contact Us",
    footer_hours: "Office Hours",
    footer_prayer_meeting: "Prayer Meeting",
    footer_community_service: "Community Services",
    footer_saturday_school: "Sabbath School",
    footer_divine_worship: "Divine Worship",
    
    about_title: "About Us",
    about_subtitle: "Our history, our beliefs, and our hope.",
    about_story_label: "Our Story",
    about_story_title: "A Beacon of Hope in the High Desert",
    about_story_p1: "Adelanto Bilingual Seventh-day Adventist Church began as a small group of believers with a big vision: to create a spiritual home where language barriers are bridged by the love of Christ.",
    about_story_p2: "Founded on the principles of Scripture and the hope of the Second Coming, we have grown into a vibrant, multicultural family. We are \"Bilingual\" not just in language, but in our approach to ministry—speaking both the language of faith and the language of practical service to our community.",
    about_story_p3: "Today, we continue to serve families across the Adelanto and High Desert area, providing a place where everyone belongs, everyone contributes, and everyone grows.",
    about_beliefs_title: "What We Believe",
    about_bible_title: "The Bible",
    about_bible_desc: "We believe the Holy Scriptures are the infallible revelation of God's will, the standard of character, and the test of experience.",
    about_trinity_title: "The Trinity",
    about_trinity_desc: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons.",
    about_salvation_title: "Salvation",
    about_salvation_desc: "Salvation is by grace through faith in Jesus Christ alone. It is a gift of God, not a result of works.",
    about_sabbath_title: "The Sabbath",
    about_sabbath_desc: "The seventh day (Saturday) is the Sabbath of the Lord, a day of rest, worship, and ministry, observed as a memorial of Creation.",
    
    ministries_title: "Our Ministries",
    ministries_subtitle: "\"For we are his workmanship, created in Christ Jesus for good works.\" - Ephesians 2:10",
    ministry_youth_title: "Youth Ministry",
    ministry_youth_desc: "Empowering the next generation to lead with faith and purpose through social events, bible studies, and service.",
    ministry_community_title: "Community Services",
    ministry_community_desc: "Food pantry and clothing drive serving families in Adelanto every Sunday from 2:00 PM - 4:00 PM.",
    ministry_music_title: "Music Ministry",
    ministry_music_desc: "Choir and praise teams that lead the congregation in worship, blending traditional hymns and contemporary praise.",
    ministry_women_title: "Women's Ministry",
    ministry_women_desc: "Supporting and encouraging women in their walk with God through retreats, prayer breakfasts, and mentorship.",
    ministry_bible_title: "Bible Study",
    ministry_bible_desc: "Mid-week prayer and study groups to dive deeper into the Word of God and find practical applications.",
    ministry_fellowship_title: "Fellowship Lunch",
    ministry_fellowship_desc: "Building community through shared meals. Join us for potluck lunch every Sabbath after the service.",
    
    pastor_senior_message: "Welcome to Adelanto Bilingual SDA Church. We are a community dedicated to sharing God's love and preparing for His soon return. Our mission is to reach out to our community with the everlasting gospel of Jesus Christ.",
    pastor_associate_message: "It is a joy to serve this bilingual community. We believe in the power of prayer and the importance of supporting one another in our spiritual journeys. Join us as we grow together in faith.",
    pastor_lay_message: "Serving as a lay pastor allows me to bridge the gap between our leadership and the congregation. I am committed to supporting our ministries and ensuring every member feels connected and valued.",
    pastor_senior_role: "Senior Pastor",
    pastor_associate_role: "Associate Pastor",
    pastor_lay_role: "Lay Pastor",
    
    home_mission_label: "Our Mission",
    home_mission_title: "Connecting people to Jesus and to",
    home_mission_highlight: "one another",
    home_love_god_title: "Love God",
    home_love_god_desc: "We prioritize our relationship with God through worship, prayer, and study.",
    home_serve_others_title: "Serve Others",
    home_serve_others_desc: "We believe faith is active. We serve our local community and the world.",
    home_share_hope_title: "Share Hope",
    home_share_hope_desc: "We proclaim the everlasting gospel to every nation, tribe, and tongue.",
    home_new_beginnings_title: "New Beginnings Await",
    home_new_beginnings_desc: "Every sunrise is an invitation to start fresh with God. At Adelanto Bilingual, we believe in the power of renewal, restoration, and hope. Come experience worship that uplifts the soul.",
    home_worship_music: "Uplifting bilingual worship music",
    home_biblical_preaching: "Biblical preaching relevant to daily life",
    home_family_atmosphere: "Warm, family-friendly atmosphere",
    home_explore_ministries: "Explore our ministries",
    home_sabbath_title: "Join Us This Sabbath",
    home_sabbath_desc: "We gather every Saturday to rest, worship, and fellowship. All are welcome.",
    home_sabbath_school_time: "9:30 AM - 10:45 AM",
    home_sabbath_school_desc: "Interactive Bible study classes for all ages—children, youth, and adults. Dive deep into Scripture.",
    home_worship_time: "11:00 AM - 12:30 PM",
    home_worship_desc: "Our main service featuring praise, prayer, and the spoken Word. Translation available (English/Spanish).",
    home_get_directions: "Get Directions",
    scroll: "Scroll",
    
    nav_events: "Events",
    events_title: "Upcoming Events",
    events_subtitle: "Join us for these special gatherings and programs.",
    events_no_events: "No upcoming events at this time. Check back soon!",
    events_date: "Date",
    events_time: "Time",
    events_location: "Location",
    events_learn_more: "Learn More",
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_ministries: "Ministerios",
    nav_pastors: "Nuestros Pastores",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    nav_visit: "Visítenos",
    hero_welcome: "Bienvenidos",
    hero_subtitle: "Una comunidad diversa unida por la fe, la esperanza y el amor. Únase a nosotros mientras adoramos, servimos y crecemos juntos en Cristo.",
    pastors_title: "Nuestros Pastores",
    pastors_subtitle: "Conozca al liderazgo dedicado a servir a nuestra familia eclesiástica y la comunidad de Adelanto.",
    gallery_title: "Nuestra Galería",
    gallery_subtitle: "Momentos de la vida y misión de la Iglesia Adventista Bilingüe de Adelanto.",
    footer_service_times: "Horarios de Servicio",
    footer_contact: "Contáctenos",
    footer_hours: "Horas de Oficina",
    footer_prayer_meeting: "Reunión de Oración",
    footer_community_service: "Servicios Comunitarios",
    footer_saturday_school: "Escuela Sabática",
    footer_divine_worship: "Culto Divino",
    
    about_title: "Nosotros",
    about_subtitle: "Nuestra historia, nuestras creencias y nuestra esperanza.",
    about_story_label: "Nuestra Historia",
    about_story_title: "Un Faro de Esperanza en el High Desert",
    about_story_p1: "La Iglesia Adventista del Séptimo Día Bilingüe de Adelanto comenzó como un pequeño grupo de creyentes con una gran visión: crear un hogar espiritual donde las barreras del idioma se superan con el amor de Cristo.",
    about_story_p2: "Fundada sobre los principios de las Escrituras y la esperanza de la Segunda Venida, hemos crecido hasta convertirnos en una familia vibrante y multicultural. Somos \"Bilingües\" no solo en idioma, sino en nuestro enfoque ministerial: hablamos tanto el idioma de la fe como el del servicio práctico a nuestra comunidad.",
    about_story_p3: "Hoy, continuamos sirviendo a las familias en el área de Adelanto y High Desert, proporcionando un lugar donde todos pertenecen, todos contribuyen y todos crecen.",
    about_beliefs_title: "Lo Que Creemos",
    about_bible_title: "La Biblia",
    about_bible_desc: "Creemos que las Sagradas Escrituras son la revelación infalible de la voluntad de Dios, la norma del carácter y la prueba de la experiencia.",
    about_trinity_title: "La Trinidad",
    about_trinity_desc: "Hay un solo Dios: Padre, Hijo y Espíritu Santo, una unidad de tres Personas coeternas.",
    about_salvation_title: "La Salvación",
    about_salvation_desc: "La salvación es por gracia mediante la fe en Jesucristo solamente. Es un regalo de Dios, no el resultado de obras.",
    about_sabbath_title: "El Sábado",
    about_sabbath_desc: "El séptimo día (sábado) es el día de reposo del Señor, un día de descanso, adoración y ministerio, observado como memorial de la Creación.",
    
    ministries_title: "Nuestros Ministerios",
    ministries_subtitle: "\"Porque somos hechura suya, creados en Cristo Jesús para buenas obras.\" - Efesios 2:10",
    ministry_youth_title: "Ministerio de Jóvenes",
    ministry_youth_desc: "Empoderando a la próxima generación para liderar con fe y propósito a través de eventos sociales, estudios bíblicos y servicio.",
    ministry_community_title: "Servicios Comunitarios",
    ministry_community_desc: "Banco de alimentos y distribución de ropa sirviendo a familias en Adelanto cada domingo de 2:00 PM - 4:00 PM.",
    ministry_music_title: "Ministerio de Música",
    ministry_music_desc: "Coro y equipos de alabanza que dirigen a la congregación en adoración, mezclando himnos tradicionales y alabanza contemporánea.",
    ministry_women_title: "Ministerio de Damas",
    ministry_women_desc: "Apoyando y animando a las mujeres en su caminar con Dios a través de retiros, desayunos de oración y mentoría.",
    ministry_bible_title: "Estudio Bíblico",
    ministry_bible_desc: "Grupos de oración y estudio a mitad de semana para profundizar en la Palabra de Dios y encontrar aplicaciones prácticas.",
    ministry_fellowship_title: "Almuerzo de Confraternidad",
    ministry_fellowship_desc: "Construyendo comunidad a través de comidas compartidas. Únase a nosotros para el almuerzo cada sábado después del servicio.",
    
    pastor_senior_message: "Bienvenidos a la Iglesia Adventista Bilingüe de Adelanto. Somos una comunidad dedicada a compartir el amor de Dios y prepararnos para Su pronto regreso. Nuestra misión es alcanzar a nuestra comunidad con el evangelio eterno de Jesucristo.",
    pastor_associate_message: "Es un gozo servir a esta comunidad bilingüe. Creemos en el poder de la oración y la importancia de apoyarnos mutuamente en nuestros viajes espirituales. Únase a nosotros mientras crecemos juntos en la fe.",
    pastor_lay_message: "Servir como anciano me permite cerrar la brecha entre nuestro liderazgo y la congregación. Estoy comprometido a apoyar nuestros ministerios y asegurar que cada miembro se sienta conectado y valorado.",
    pastor_senior_role: "Pastor Principal",
    pastor_associate_role: "Pastor Asociado",
    pastor_lay_role: "Anciano",
    
    home_mission_label: "Nuestra Misión",
    home_mission_title: "Conectando personas a Jesús y",
    home_mission_highlight: "unos a otros",
    home_love_god_title: "Amar a Dios",
    home_love_god_desc: "Priorizamos nuestra relación con Dios a través de la adoración, la oración y el estudio.",
    home_serve_others_title: "Servir a Otros",
    home_serve_others_desc: "Creemos que la fe es activa. Servimos a nuestra comunidad local y al mundo.",
    home_share_hope_title: "Compartir Esperanza",
    home_share_hope_desc: "Proclamamos el evangelio eterno a toda nación, tribu y lengua.",
    home_new_beginnings_title: "Nuevos Comienzos Te Esperan",
    home_new_beginnings_desc: "Cada amanecer es una invitación para comenzar de nuevo con Dios. En Adelanto Bilingüe, creemos en el poder de la renovación, la restauración y la esperanza. Ven a experimentar una adoración que eleva el alma.",
    home_worship_music: "Música de adoración bilingüe edificante",
    home_biblical_preaching: "Predicación bíblica relevante para la vida diaria",
    home_family_atmosphere: "Ambiente cálido y familiar",
    home_explore_ministries: "Explorar nuestros ministerios",
    home_sabbath_title: "Únase a Nosotros Este Sábado",
    home_sabbath_desc: "Nos reunimos cada sábado para descansar, adorar y confraternizar. Todos son bienvenidos.",
    home_sabbath_school_time: "9:30 AM - 10:45 AM",
    home_sabbath_school_desc: "Clases interactivas de estudio bíblico para todas las edades: niños, jóvenes y adultos. Profundice en las Escrituras.",
    home_worship_time: "11:00 AM - 12:30 PM",
    home_worship_desc: "Nuestro servicio principal con alabanza, oración y la Palabra hablada. Traducción disponible (Inglés/Español).",
    home_get_directions: "Cómo Llegar",
    scroll: "Desplazar",
    
    nav_events: "Eventos",
    events_title: "Próximos Eventos",
    events_subtitle: "Únase a nosotros para estas reuniones y programas especiales.",
    events_no_events: "No hay eventos próximos en este momento. ¡Vuelva pronto!",
    events_date: "Fecha",
    events_time: "Hora",
    events_location: "Lugar",
    events_learn_more: "Más Información",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
