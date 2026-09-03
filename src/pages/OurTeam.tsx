import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";

const team = [
  { name: "Barber One", role: "Owner ◦ Master Barber", image: "/placeholder.svg", instagram: "https://www.instagram.com/magnifico_barber/", phone: "+35722357010" },
  { name: "Barber Two", role: "Master Barber", image: "/placeholder.svg", instagram: "https://www.instagram.com/magnifico_barber/", phone: "+35722357010" },
  { name: "Barber Three", role: "Barber", image: "/placeholder.svg", instagram: "https://www.instagram.com/magnifico_barber/", phone: "+35722357010" },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24 text-center max-w-3xl space-y-4">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">The Barbers</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground">
            Our <em className="font-script">Team</em>
          </h1>
          <div className="w-12 h-px bg-foreground mx-auto" />
          <p className="text-muted-foreground leading-relaxed">
            Expert barbers dedicated to making you look and feel your best.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                className="group border border-border bg-background flex flex-col"
              >
                <div className="relative overflow-hidden bg-secondary/40">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at MAGNIFICO Barbershop`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="w-9 h-9 grid place-items-center bg-background/90 border border-border hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Instagram className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        aria-label={`Call ${member.name}`}
                        className="w-9 h-9 grid place-items-center bg-background/90 border border-border hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 text-center space-y-4 flex-1 flex flex-col">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-foreground">{member.name}</h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <div className="mt-auto pt-2">
                    <Link to="/book">
                      <Button
                        variant="outline"
                        className="w-full tracking-[0.2em] uppercase text-xs"
                      >
                        Book with {member.name.split(" ")[0]}
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center space-y-6 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Ready for a fresh cut?
          </h2>
          <p className="text-muted-foreground">
            Pick your barber and reserve a time — we'll take care of the rest.
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

export default OurTeam;
