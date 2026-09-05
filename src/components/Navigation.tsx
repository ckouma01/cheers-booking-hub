import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const FACEBOOK_URL = "https://www.facebook.com/MagnificoHairSalon/";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.home", path: "/" },
    { key: "nav.shop", path: "/about" },
    { key: "nav.team", path: "/team" },
    { key: "nav.book", path: "/book" },
    { key: "nav.contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              {t("brand.name")}
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
              {t("brand.sub")}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  isActive(item.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(item.key)}
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-ember" />
                )}
              </Link>
            ))}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-ember transition-colors"
              aria-label={t("nav.facebook")}
            >
              <Facebook size={20} />
            </a>
            <LanguageToggle className="pl-2 border-l border-border ml-1" />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label={t("nav.menu")}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-5 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium tracking-[0.2em] uppercase ${
                    isActive(item.path) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-foreground"
              >
                <Facebook size={18} />
                {t("nav.facebook")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
