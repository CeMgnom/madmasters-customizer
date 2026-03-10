import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ps5.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero pt-16 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="text-gradient">MadMasters</span>{" "}
            <span className="text-foreground">уникальный дизайн для PS5</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Наносим уникальные принты на боковые панели PlayStation 5. Воплотим любую вашу идею в жизнь!
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#order">
              <Button size="lg" className="gradient-primary text-primary-foreground font-display text-sm tracking-wider animate-pulse-glow hover:opacity-90 transition-opacity">
                Заказать дизайн
              </Button>
            </a>
            <a href="/all-works">
              <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-display text-sm tracking-wider">
                Смотреть работы
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Кастомизированная PlayStation 5 с уникальным дизайном панели"
            className="w-full max-w-lg rounded-2xl shadow-glow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
