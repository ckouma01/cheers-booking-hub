import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 text-center max-w-3xl space-y-4">
          <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("about.label")}</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground">
            {t("about.title.a")} <em className="font-script">{t("about.title.em")}</em>
          </h1>
          <div className="w-12 h-px bg-ember mx-auto" />
          <p className="text-muted-foreground leading-relaxed">{t("about.intro")}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-5xl">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("about.craft.label")}</p>
            <h2 className="font-serif text-4xl text-foreground">
              {t("about.craft.title.a")} <em className="font-script">{t("about.craft.title.em")}</em>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("about.craft.p1")}</p>
            <p>{t("about.craft.p2")}</p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-24 border-b border-border bg-secondary/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {["about.v1", "about.v2", "about.v3"].map((key) => (
              <div key={key} className="bg-background p-10 space-y-3 text-center">
                <Scissors className="w-6 h-6 mx-auto text-ember" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-foreground">{t(`${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}.copy`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center space-y-6 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t("about.cta.title")}</h2>
          <p className="text-muted-foreground">{t("about.cta.copy")}</p>
          <Link to="/book">
            <Button size="lg" className="tracking-[0.2em] uppercase text-xs px-8 bg-ember text-ember-foreground hover:bg-ember-dark">
              {t("about.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
