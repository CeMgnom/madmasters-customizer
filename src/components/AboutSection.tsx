import { motion } from "framer-motion";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const stats = [
  { value: "50+", label: "Заказов выполнено" },
  { value: "3", label: "Слоя лака" },
  { value: "100%", label: "Качество" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient mb-14 text-center"
        >
          О нас
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              <span className="text-foreground font-display text-lg leading-relaxed">Наша компания специализируемся на кастомизации боковых панелей для Sony PlayStation, превращая вашу консоль в уникальный арт-объект.</span>{" "}
              Мы печатаем принты любой сложности по вашему запросу, используя высококачественное оборудование и краски. Для обеспечения максимальной долговечности и премиального вида изображение покрывается тремя слоями лака. Это финишное покрытие не только защищает принт, но и придает ему ощутимый, стильный 3D-эффект.
            </p>
            <p className="text-foreground font-display text-lg mb-8">
              Сделайте свою PlayStation по-настоящему единственной в своем роде!
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center gradient-card rounded-xl p-4 glow-border"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={about1} alt="Процесс работы" className="rounded-xl shadow-card col-span-2 w-full h-64 object-cover" />
            <img src={about2} alt="Печать на панели" className="rounded-xl shadow-card w-full h-56 object-cover" />
            <img src={about3} alt="Покрытие лаком" className="rounded-xl shadow-card w-full h-56 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
