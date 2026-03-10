import { Phone, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-bold text-gradient">MadMasters</span>
            <p className="text-sm text-muted-foreground mt-2">
              Уникальный дизайн боковых панелей для PlayStation 5
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Работы", href: "#portfolio" },
                { label: "О нас", href: "#about" },
                { label: "Процесс", href: "#process" },
                { label: "Преимущества", href: "#advantages" },
                { label: "Цены", href: "#pricing" },
                { label: "Заказать", href: "#order" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Контакты</h4>
            <div className="space-y-2">
              <a href="tel:89005112354" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={14} /> 8 (900) 511-23-54
              </a>
              <a href="mailto:madmastersshop@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={14} /> madmastersshop@gmail.com
              </a>
              <a href="https://t.me/MadMastersDesign" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Send size={14} /> Телеграм
              </a>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="https://t.me/MadMastersshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Send size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MadMasters. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
