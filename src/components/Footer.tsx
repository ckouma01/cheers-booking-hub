import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="font-serif text-3xl tracking-tight">MAGNIFICO</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Magnificent Barbering. Classic technique, refined atmosphere — in the heart of Nicosia.
            </p>
            <a
              href="https://www.instagram.com/magnifico_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
            >
              <Instagram size={16} />
              @magnifico_barber
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">The Shop</Link></li>
              <li><Link to="/book" className="hover:text-foreground transition-colors">Book</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Visit</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-foreground flex-shrink-0" />
                <span>39A Elia Papakyriakou, Makedonitissa, Nicosia, Cyprus</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-foreground flex-shrink-0" />
                <a href="tel:+35722357010" className="hover:text-foreground transition-colors">+357 22 357010</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-foreground flex-shrink-0" />
                <a href="mailto:hello@magnificobarber.com" className="hover:text-foreground transition-colors">hello@magnificobarber.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Hours
            </h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><span className="text-foreground">Mon – Fri</span> · 9AM – 7PM</li>
              <li><span className="text-foreground">Saturday</span> · 9AM – 3PM</li>
              <li><span className="text-foreground">Sunday</span> · Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MAGNIFICO Barbershop. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Magnificent Barbering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
