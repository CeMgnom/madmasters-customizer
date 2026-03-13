import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/madmasters-logo.png";

const navLinks = [
  { label: "Работы", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Цены", href: "#pricing" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="MadMasters" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold text-gradient">MadMasters</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#order">
            <Button className="gradient-primary text-primary-foreground font-display text-xs tracking-wider hover:opacity-90 transition-opacity">
              Заказать
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-b border-border/50 px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#order" onClick={() => setMobileOpen(false)}>
              <Button className="gradient-primary text-primary-foreground font-display text-xs tracking-wider w-full mt-2">
                Заказать
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
