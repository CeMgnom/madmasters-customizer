import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";

const tariffs = ["Стандарт — 5 500 ₽", "Премиум — 6 500 ₽", "Эксклюзив — 9 500 ₽"];

const OrderForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    tariff: tariffs[1],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Заполните обязательные поля");
      return;
    }

    setLoading(true);
    try {
      const text = `🎮 Новая заявка MadMasters!\n\n👤 Имя: ${form.name}\n📱 Телефон: ${form.phone}\n💬 Телеграм: ${form.telegram || "не указан"}\n📋 Тариф: ${form.tariff}`;

      await fetch(
        `https://api.telegram.org/bot8796351983:AAHU55fM_H-wpb-eKkrA4L31Lj9ZUCL2ZYs/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "7670027409",
            text,
            parse_mode: "HTML",
          }),
        }
      );

      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", phone: "", telegram: "", tariff: tariffs[1] });
    } catch {
      toast.error("Ошибка отправки. Попробуйте ещё раз или напишите нам в Телеграм.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient mb-14 text-center"
        >
          Заказать
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="gradient-card rounded-xl p-6 md:p-8 glow-border shadow-card space-y-5"
        >
          <div>
            <Label className="text-foreground text-sm mb-1.5 block">Имя *</Label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ваше имя"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div>
            <Label className="text-foreground text-sm mb-1.5 block">Телефон *</Label>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div>
            <Label className="text-foreground text-sm mb-1.5 block">Ник в Телеграм</Label>
            <Input
              value={form.telegram}
              onChange={(e) => setForm({ ...form, telegram: e.target.value })}
              placeholder="@username"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <Label className="text-foreground text-sm mb-1.5 block">Тариф</Label>
            <div className="space-y-2">
              {tariffs.map((t) => (
                <label
                  key={t}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    form.tariff === t
                      ? "bg-primary/15 glow-border"
                      : "bg-muted/50 border border-border/50 hover:bg-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name="tariff"
                    value={t}
                    checked={form.tariff === t}
                    onChange={(e) => setForm({ ...form, tariff: e.target.value })}
                    className="accent-primary"
                  />
                  <span className="text-sm text-foreground">{t}</span>
                </label>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full gradient-primary text-primary-foreground font-display text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            <Send size={16} className="mr-2" />
            {loading ? "Отправляем..." : "Отправить заявку"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Или просто напишите нам в{" "}
            <a
              href="https://t.me/madmastersdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Телеграм
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderForm;
