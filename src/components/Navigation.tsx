import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "THE SHOP", path: "/about" },
    { name: "OUR TEAM", path: "/team" },
    { name: "BOOK", path: "/book" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
              MAGNIFICO
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
              Barbershop
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  isActive(item.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/magnifico_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label="MAGNIFICO on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/magnifico_barber/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-foreground"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
