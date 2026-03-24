import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Стандарт",
    subtitle: "Печать готового изображения на панель PS5",
    price: "4 990 ₽",
    popular: false,
    features: [
      "Печать вашего изображения",
      "Покрытие 3 слоями лака",
      "3D-эффект покрытия",
      "Срок изготовления — 5-10 рабочих дней",
    ],
  },
  {
    name: "Премиум",
    subtitle: "Разработка уникального дизайна + печать",
    price: "5 990 ₽",
    popular: true,
    features: [
      "Помощь в выборе картинки и работа над ней",
      "До 5 правок макета",
      "Покрытие 3 слоями лака",
      "3D-эффект покрытия",
      "Срок изготовления — 5-10 рабочих дней",
    ],
  },
  {
    name: "Эксклюзив",
    subtitle: "Авторский арт от нашего художника",
    price: "6 990 ₽",
    popular: false,
    features: [
      "Индивидуальный дизайн от художника",
      "Неограниченные правки",
      "Покрытие 3 слоями лака",
      "Премиум 3D-эффект",
      "Приоритетное изготовление — 3-4 дня",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient mb-14 text-center"
        >
          Цены
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative gradient-card rounded-xl p-6 shadow-card flex flex-col ${
                plan.popular ? "glow-border shadow-glow" : "border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full text-xs font-display text-primary-foreground tracking-wider">
                  Популярный
                </div>
              )}
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{plan.subtitle}</p>
              <div className="text-3xl font-display font-bold text-gradient mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#order">
                <Button
                  className={`w-full font-display text-sm tracking-wider ${
                    plan.popular
                      ? "gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  } transition-opacity`}
                >
                  Заказать
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Цена указана для печати на ваших пластинах. Если вы хотите сделать печать на наших пластинах, цена увеличится на 2 000 ₽ (цена пластин).
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
