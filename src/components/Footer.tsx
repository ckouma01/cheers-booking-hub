import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const FACEBOOK_URL = "https://www.facebook.com/MagnificoHairSalon/";
const EMAIL = "magnificosetmore@gmail.com";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="font-serif text-3xl tracking-tight">{t("brand.name")}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.blurb")}</p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-ember transition-colors"
            >
              <Facebook size={16} />
              {t("nav.facebook")}
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("footer.explore")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">{t("nav.shop")}</Link></li>
              <li><Link to="/team" className="hover:text-foreground transition-colors">{t("nav.team")}</Link></li>
              <li><Link to="/book" className="hover:text-foreground transition-colors">{t("nav.book")}</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("footer.visit")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-ember flex-shrink-0" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-ember flex-shrink-0" />
                <a href="tel:+35722357010" className="hover:text-foreground transition-colors">+357 22 357010</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-ember flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> {t("footer.hours")}
            </h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><span className="text-foreground">{t("footer.hours.weekdays")}</span> · 9:00 – 19:00</li>
              <li><span className="text-foreground">{t("footer.hours.saturday")}</span> · 9:00 – 15:00</li>
              <li><span className="text-foreground">{t("footer.hours.sunday")}</span> · {t("footer.hours.closed")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
          <p className="tracking-[0.2em] uppercase">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
