import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const fallbackImages = [
  { src: p1, alt: "Дракон" },
  { src: p2, alt: "Киберпанк" },
  { src: p3, alt: "Самурай" },
  { src: p4, alt: "Космос" },
  { src: p5, alt: "Граффити" },
  { src: p6, alt: "Череп и розы" },
];

const AllWorks = () => {
  const [dbImages, setDbImages] = useState<{ src: string; alt: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from("portfolio_images")
        .select("*")
        .order("display_order", { ascending: true });
      if (data && data.length > 0) {
        setDbImages(data.map((img) => ({ src: img.image_url, alt: img.title })));
      }
    };
    fetchImages();
  }, []);

  const images = dbImages.length > 0 ? dbImages : fallbackImages;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4 text-center">Все наши работы</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Полная галерея наших кастомизированных панелей PS5. Каждая — уникальный проект.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl glow-border shadow-card cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-display text-foreground">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Следите за свежими работами в{" "}
            <a href="https://t.me/MadMastersShop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Телеграм канале
            </a>
          </p>
        </div>
      </main>
      <Footer />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-background/95 border-border">
          {selectedImage && (
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <span className="mt-2 text-sm font-display text-foreground">{selectedImage.alt}</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllWorks;
