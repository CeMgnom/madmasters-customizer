import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Send } from "lucide-react";

const OrderProcess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4 text-center">
            Как заказать кастомные панели для вашей PlayStation
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Мы сделали процесс заказа максимально прозрачным и простым.<br />
            Пройдите 5 шагов до обновленного дизайна вашей PlayStation.
          </p>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Свяжитесь с нами",
                content: (
                  <>
                    <p className="text-muted-foreground mb-3">Выберите любой удобный способ для первичной консультации. Мы обсудим ваши идеи и ответим на все вопросы.</p>
                    <p className="text-foreground text-sm">Телефон: +7 (977) 712-51-51</p>
                    <p className="text-foreground text-sm">
                      Telegram:{" "}
                      <a href="https://t.me/madmastersdesign" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        @madmastersdesign
                      </a>
                    </p>
                  </>
                ),
              },
              {
                step: 2,
                title: "Разработка макета",
                content: (
                  <>
                    <p className="text-muted-foreground mb-2">
                      Чтобы дизайнер приступил к созданию вашего индивидуального проекта, необходимо внести предоплату в размере 1000 рублей.
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Почему это важно?</strong> Эта сумма гарантирует серьезность ваших намерений и страхует рабочее время дизайнера, если вы вдруг передумаете в процессе согласования.
                    </p>
                  </>
                ),
              },
              {
                step: 3,
                title: "Выбор варианта исполнения",
                content: (
                  <>
                    <p className="text-muted-foreground mb-3">Мы работаем в двух форматах:</p>
                    <ul className="text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                      <li><strong className="text-foreground">На ваших панелях:</strong> Вы присылаете нам свои родные пластины.</li>
                      <li><strong className="text-foreground">На наших панелях (+ 2000₽):</strong> Мы используем новые заготовки (вам не нужно ничего отправлять).</li>
                    </ul>
                    <p className="text-muted-foreground mb-1"><strong className="text-foreground">Куда отправлять ваши панели?</strong></p>
                    <p className="text-muted-foreground text-sm">Адрес: г. Москва, ул. Вилиса Лациса, д. 7, корп. 4, кв. 513.</p>
                    <p className="text-muted-foreground text-sm">Мы также можем забрать посылку в любом постамате или пункте выдачи (СДЭК, Boxberry и др.) рядом с этим адресом.</p>
                  </>
                ),
              },
              {
                step: 4,
                title: "Производство",
                content: (
                  <p className="text-muted-foreground">
                    Как только панели окажутся у нас (или как только мы согласуем макет, если панели наши), мы приступаем к печати. Мы используем современное оборудование, чтобы принт был сочным и долговечным. После печати мы покрываем панель тремя слоями лака, что придает рисунку небольшой 3D-эффект и дает защиту от затемнения краски и любых внешних воздействий.
                  </p>
                ),
              },
              {
                step: 5,
                title: "Оплата и доставка",
                content: (
                  <>
                    <p className="text-muted-foreground mb-3">
                      Когда работа готова, мы присылаем вам фото готовых панелей. Если результат вам нравится, вы оплачиваете остаток суммы, и мы отправляем готовый кастом вам.
                    </p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Способы оплаты:</strong></p>
                    <ul className="text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                      <li><strong className="text-foreground">Прямой перевод:</strong> Стандартная цена по прайсу.</li>
                      <li>
                        <strong className="text-foreground">Безопасная сделка через Авито:</strong> Для вашего спокойствия мы можем провести заказ через Авито.
                        <br /><span className="text-xs">Важно: В этом случае стоимость будет выше на 10% (комиссия площадки).</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground text-sm">
                      Как найти: Введите в поиске Авито: «Сменные боковые панели ps5 slim/pro/fat Кастомные».{" "}
                      <a href="https://www.avito.ru/moskva/igry_pristavki_i_programmy/smennye_bokovye_paneli_ps5_slimprofat_kastomnye_7620813453" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Или перейдите по ссылке
                      </a>
                    </p>
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="gradient-card rounded-xl p-6 glow-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-display text-sm font-bold shrink-0">
                    {item.step}
                  </span>
                  <h2 className="font-display font-semibold text-lg text-foreground">{item.title}</h2>
                </div>
                {item.content}
              </div>
            ))}
          </div>

          <div className="gradient-card rounded-xl p-6 glow-border shadow-card mt-12 text-center">
            <h3 className="font-display text-lg font-bold text-gradient mb-2">Готово! Наслаждайтесь обновленной консолью</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Теперь ваша PlayStation — единственная в своем роде. Наслаждайтесь игрой и своим неповторимым стилем!
            </p>
            <p className="text-xs text-muted-foreground">
              P.S. Мы будем очень благодарны, если вы оставите отзыв о нашей работе в объявлении на Авито. Это помогает нам развиваться, а другим игрокам — сделать правильный выбор!
            </p>
          </div>

          <div className="gradient-card rounded-xl p-6 glow-border shadow-card mt-8 text-center">
            <p className="text-foreground font-display text-sm mb-3">По всем вопросам свяжитесь с нами любым удобным способом:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+79777125151" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Phone size={16} /> +7 977-712-51-51
              </a>
              <a href="https://t.me/madmastersdesign" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Send size={16} /> Телеграм
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderProcess;
