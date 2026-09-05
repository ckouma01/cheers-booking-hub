import { Link } from "react-router-dom";
import { Scissors, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Gallery from "@/components/Gallery";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const Home = () => {
  const servicesSection = useScrollAnimation();
  const whyChooseSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    { key: "home.service1", price: "20€", icon: Scissors },
    { key: "home.service2", price: "18€", icon: Award },
    { key: "home.service3", price: "30€", icon: Users },
    { key: "home.service4", price: "10€", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <a
              href="https://www.google.com/search?q=magnifico+hair+salon+nicosia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-ember fill-ember animate-starShine"
                    style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{t("home.rated")}</span>
            </a>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-foreground">
              {t("brand.name")}
            </h1>
            <p className="font-script text-3xl md:text-4xl text-foreground/80 -mt-2 animate-revealText opacity-0">
              {t("brand.tagline")}
            </p>

            <div className="w-16 h-px bg-ember mx-auto" />

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t("home.intro")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/team">
                <Button size="lg" className="w-full sm:w-auto tracking-[0.2em] uppercase text-xs px-8 bg-ember text-ember-foreground hover:bg-ember-dark border border-ember">
                  {t("home.cta.book")}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto tracking-[0.2em] uppercase text-xs px-8">
                  {t("home.cta.shop")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={servicesSection.ref}
        className={`py-24 bg-secondary/40 border-b border-border transition-all duration-1000 ${
          servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("home.services.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t("home.services.title")}</h2>
            <div className="w-12 h-px bg-ember mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto border border-border">
            {services.map((service, index) => (
              <div
                key={service.key}
                className={`bg-background p-8 text-center space-y-4 transition-all duration-700 hover:bg-secondary/30 ${
                  servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <service.icon className="w-6 h-6 mx-auto text-ember" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-foreground">{t(`${service.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`${service.key}.desc`)}</p>
                <div className="pt-2 border-t border-border">
                  <p className="font-serif text-3xl text-foreground">{service.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/book">
              <Button size="lg" className="tracking-[0.2em] uppercase text-xs px-8">
                {t("home.reserve")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        ref={whyChooseSection.ref}
        className={`py-24 border-b border-border transition-all duration-1000 ${
          whyChooseSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("home.why.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              {t("home.why.title.a")} <em className="font-script">{t("home.why.title.em")}</em>.
            </h2>
            <div className="w-12 h-px bg-ember mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { icon: Award, key: "home.why1" },
              { icon: Clock, key: "home.why2" },
              { icon: Users, key: "home.why3" },
            ].map((item, i) => (
              <div
                key={item.key}
                className={`text-center space-y-3 transition-all duration-700 ${
                  whyChooseSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                <item.icon className="w-7 h-7 mx-auto text-ember" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-foreground">{t(`${item.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`${item.key}.copy`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* CTA */}
      <section
        ref={ctaSection.ref}
        className={`py-24 bg-foreground text-background transition-all duration-1000 ${
          ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-6 text-center space-y-6">
          <p className="text-xs tracking-[0.35em] uppercase text-ember-light">{t("home.cta2.label")}</p>
          <h2 className="font-serif text-4xl md:text-6xl">
            {t("home.cta2.title.a")} <em className="font-script">{t("home.cta2.title.em")}</em> {t("home.cta2.title.b")}
          </h2>
          <p className="text-background/70 max-w-xl mx-auto">{t("home.cta2.copy")}</p>
          <div className="pt-4">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="tracking-[0.2em] uppercase text-xs px-8">
                {t("home.cta2.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
