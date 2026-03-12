import { motion } from "framer-motion";
import { Brush, Layers, Printer, Truck, ShieldCheck, Headphones } from "lucide-react";

const advantages = [
  { icon: Brush, title: "100% уникальность", desc: "Каждый дизайн создаётся индивидуально. Ваша панель будет единственной в мире." },
  { icon: Layers, title: "Любой дизайн", desc: "Воплотим любую идею в реальность" },
  { icon: Printer, title: "Качественная печать", desc: "Современное оборудование и стойкие краски" },
  { icon: Truck, title: "Быстрая доставка", desc: "Отправляем по всей России в кратчайшие сроки" },
  { icon: ShieldCheck, title: "Гарантия", desc: "3 слоя лака для максимальной защиты" },
  { icon: Headphones, title: "Поддержка", desc: "Всегда на связи и готовы помочь" },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient mb-14 text-center"
        >
          Преимущества
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-card rounded-xl p-6 glow-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <a.icon className="text-primary mb-4" size={32} />
              <h3 className="font-display font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
