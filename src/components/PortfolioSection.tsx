import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const fallbackImages = [
  { src: p1, alt: "Дракон — кастомная панель PS5" },
  { src: p2, alt: "Киберпанк — кастомная панель PS5" },
  { src: p3, alt: "Самурай — кастомная панель PS5" },
  { src: p4, alt: "Космос — кастомная панель PS5" },
  { src: p5, alt: "Граффити — кастомная панель PS5" },
  { src: p6, alt: "Череп и розы — кастомная панель PS5" },
];

const PortfolioSection = () => {
  const [dbImages, setDbImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from("portfolio_images")
        .select("*")
        .eq("show_on_main", true)
        .order("display_order", { ascending: true });
      if (data && data.length > 0) {
        setDbImages(data.map((img) => ({ src: img.image_url, alt: img.title })));
      }
    };
    fetchImages();
  }, []);

  const images = dbImages.length > 0 ? dbImages : fallbackImages;

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Наши работы</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Каждая панель — уникальное произведение. Вот лишь некоторые из наших проектов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl glow-border shadow-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-display text-foreground">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/all-works">
            <Button className="gradient-primary text-primary-foreground font-display text-sm tracking-wider mb-4 hover:opacity-90 transition-opacity">
              Смотреть ещё
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Также вы можете следить за самыми свежими работами в нашем Телеграм канале:{" "}
            <a href="https://t.me/MadMastersShop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              t.me/MadMastersShop
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
