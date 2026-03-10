import { motion } from "framer-motion";
import { MessageSquare, Palette, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "Расскажите идею",
    desc: "Опишите свою идею или пришлите референс. Мы обсудим все детали и подберём лучшее решение для вашего дизайна.",
  },
  {
    icon: Palette,
    title: "Создаём макет",
    desc: "Наш дизайнер создаст уникальный макет по вашему запросу. Вы утверждаете финальный вариант перед печатью.",
  },
  {
    icon: Package,
    title: "Получите панель",
    desc: "Печатаем дизайн на панель с высочайшим качеством. Упаковываем и отправляем вам в кратчайшие сроки.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient mb-14 text-center"
        >
          Как мы работаем
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="gradient-card rounded-xl p-6 glow-border shadow-card h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="text-primary-foreground" size={24} />
                </div>
                <div className="text-xs text-primary font-display mb-2">Шаг {i + 1}</div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-accent/40 group-hover:from-primary group-hover:to-accent transition-all duration-500" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/order-process">
            <Button variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-display text-sm tracking-wider">
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
