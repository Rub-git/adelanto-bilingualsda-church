import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

import img2 from "@assets/IMG_6259_1768153782984.jpeg";
import img3 from "@assets/IMG_6294_1768153782985.jpeg";
import img4 from "@assets/IMG_6296_1768153782986.jpeg";
import img5 from "@assets/IMG_7241_1768153782986.jpeg";
import img6 from "@assets/IMG_7340_1768153782986.jpeg";
import img7 from "@assets/IMG_7367_1768153782987.jpeg";
import img8 from "@assets/IMG_7368_1768153782987.jpeg";
import imgNew1 from "@new_photos/IMG_6255.jpeg";
import imgNew2 from "@new_photos/IMG_6262.jpeg";
import imgNew3 from "@new_photos/IMG_6264.jpeg";
import imgNew4 from "@new_photos/IMG_6270.jpeg";
import imgNew5 from "@new_photos/IMG_7625.jpeg";
import imgNew6 from "@new_photos/IMG_7626.jpeg";

const galleryImages = [
  {
    url: imgNew2,
    captionEn: "Baptism Service",
    captionEs: "Servicio de Bautismo"
  },
  {
    url: img3,
    captionEn: "Birthday Celebration",
    captionEs: "Celebración de Cumpleaños"
  },
  {
    url: img4,
    captionEn: "Church Family Gathering",
    captionEs: "Reunión de la Familia de la Iglesia"
  },
  {
    url: img5,
    captionEn: "Community Service",
    captionEs: "Servicio Comunitario"
  },
  {
    url: img6,
    captionEn: "Fellowship Moment",
    captionEs: "Momento de Confraternidad"
  },
  {
    url: img7,
    captionEn: "Sabbath Worship",
    captionEs: "Adoración Sabática"
  },
  {
    url: img8,
    captionEn: "Divine Service",
    captionEs: "Servicio Divino"
  },
  {
    url: imgNew1,
    captionEn: "Church Life 1",
    captionEs: "Vida de la Iglesia 1"
  },
  {
    url: imgNew3,
    captionEn: "Church Life 3",
    captionEs: "Vida de la Iglesia 3"
  },
  {
    url: imgNew4,
    captionEn: "Church Life 4",
    captionEs: "Vida de la Iglesia 4"
  },
  {
    url: imgNew5,
    captionEn: "Church Life 5",
    captionEs: "Vida de la Iglesia 5"
  },
  {
    url: imgNew6,
    captionEn: "Church Life 6",
    captionEs: "Vida de la Iglesia 6"
  }
];

export default function Gallery() {
  const { t, language } = useLanguage();
  
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{t("gallery_title")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("gallery_subtitle")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none overflow-hidden rounded-2xl shadow-xl">
                      <CardContent className="p-0 relative aspect-video">
                        <img
                          src={image.url}
                          alt={language === "en" ? image.captionEn : image.captionEs}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6 text-white">
                          <p className="text-xl font-medium">
                            {language === "en" ? image.captionEn : image.captionEs}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 text-primary" />
              <CarouselNext className="-right-12 text-primary" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`thumb-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={image.url}
                alt={language === "en" ? image.captionEn : image.captionEs}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
