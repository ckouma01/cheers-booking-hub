import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 text-center max-w-3xl space-y-4">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">The Shop</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground">
            Inside <em className="font-script">MAGNIFICO</em>
          </h1>
          <div className="w-12 h-px bg-foreground mx-auto" />
          <p className="text-muted-foreground leading-relaxed">
            MAGNIFICO Barbershop lives quietly on Elia Papakyriakou in Makedonitissa, Nicosia.
            A short list of services. A carefully arranged room. Music low, mirrors clean,
            and a chair reserved for you.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-5xl">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">Our Craft</p>
            <h2 className="font-serif text-4xl text-foreground">
              Old-world technique. <em className="font-script">Modern taste.</em>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every appointment at MAGNIFICO begins with a proper consultation. We take
              time to understand your hair, your face, and how you want to move through
              the world.
            </p>
            <p>
              From the classic scissor-over-comb to the hot-towel straight-razor shave,
              every service is delivered with attention to the small details that make a
              cut feel truly your own.
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-24 border-b border-border bg-secondary/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { title: "Consultation", copy: "Every chair session starts with a real conversation about the look." },
              { title: "Precision", copy: "Sharp lines, considered shapes, and finish work you can feel." },
              { title: "Ritual", copy: "Hot towels, straight razors, and a moment that is entirely yours." },
            ].map((v) => (
              <div key={v.title} className="bg-background p-10 space-y-3 text-center">
                <Scissors className="w-6 h-6 mx-auto text-foreground" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center space-y-6 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Come sit in the chair.
          </h2>
          <p className="text-muted-foreground">
            Reserve a time — we'll take care of the rest.
          </p>
          <Link to="/book">
            <Button size="lg" className="tracking-[0.2em] uppercase text-xs px-8">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
