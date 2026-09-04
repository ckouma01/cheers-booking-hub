import { useEffect, useRef, useState } from "react";
import { Instagram, Phone, Scissors } from "lucide-react";

const team = [
  {
    id: "panayiotis",
    name: "Panayiotis Kyritsis",
    role: "Master Barber",
    image: "/placeholder.svg",
    instagram: "https://www.instagram.com/magnifico_barber/",
    phone: "",
    bookingUrl:
      "https://magnifico.setmore.com/services/7cf9d429-e60b-45e2-9b21-97bc89574597",
  },
  {
    id: "stathis",
    name: "Stathis Kyritsis",
    role: "Master Barber",
    image: "/placeholder.svg",
    instagram: "https://www.instagram.com/magnifico_barber/",
    phone: "",
    bookingUrl:
      "https://magnifico.setmore.com/services/05f8b1f1-580b-46ff-a478-7d2c3a55e5af",
  },
];

const CombTeeth = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-1 ${className}`} aria-hidden="true">
    {Array.from({ length: 8 }).map((_, i) => (
      <span
        key={i}
        className="w-1 h-full bg-current opacity-20 rounded-full"
      />
    ))}
  </div>
);

const BarberPoleStripe = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute inset-0 overflow-hidden opacity-10 pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "repeating-linear-gradient(135deg, transparent, transparent 12px, currentColor 12px, currentColor 14px)",
      }}
    />
  </div>
);

const OurTeam = () => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            team.forEach((member, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => ({ ...prev, [member.id]: true }));
              }, index * 180);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <Scissors className="w-[32rem] h-[32rem] -rotate-45 -translate-x-1/4 -translate-y-1/4 text-foreground" />
        </div>

        <div className="container mx-auto px-6 py-28 text-center max-w-3xl relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">
            The Craftsmen
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95]">
            Our <em className="font-script">Team</em>
          </h1>
          <div className="w-16 h-px bg-foreground/60 mx-auto mt-7 mb-6" />
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Two master barbers. One standard: precision, patience, and a cut
            that feels as good as it looks.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section ref={sectionRef} className="py-24 border-b border-border relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-border/50 to-transparent" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {team.map((member) => (
              <article
                key={member.id}
                className={`
                  group relative flex flex-col bg-[hsl(0_0%_18%)] text-[hsl(37_22%_96%)]
                  rounded-sm overflow-hidden shadow-[0_12px_40px_hsla(0_0%_0%/_0.18)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:shadow-[0_24px_60px_hsla(0_0%_0%/_0.28)]
                  ${visibleCards[member.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
              >
                <BarberPoleStripe className="text-[hsl(37_22%_96%)]" />

                {/* Comb-tooth top edge */}
                <div className="absolute top-0 left-0 right-0 h-3 flex justify-between px-2 text-[hsl(37_22%_96%)]">
                  <CombTeeth className="h-full w-full justify-between" />
                </div>

                {/* Image area */}
                <div className="relative overflow-hidden bg-[hsl(0_0%_26%)]">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at MAGNIFICO Barbershop`}
                    className="w-full h-[360px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                    loading="lazy"
                  />

                  {/* Social overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-400">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="w-10 h-10 grid place-items-center rounded-full bg-[hsl(37_22%_96%)] text-[hsl(0_0%_18%)] hover:bg-[hsl(0_0%_8%)] hover:text-[hsl(37_22%_96%)] transition-colors"
                      >
                        <Instagram className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                    )}
                    <button
                      type="button"
                      aria-label={`Call ${member.name}`}
                      disabled
                      className="w-10 h-10 grid place-items-center rounded-full bg-[hsl(37_22%_96%)] text-[hsl(0_0%_18%)] opacity-60 cursor-not-allowed"
                      title="Phone number coming soon"
                    >
                      <Phone className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Bottom gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(0_0%_18%)] to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-7 space-y-6 flex-1 flex flex-col relative">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[hsl(37_22%_96%)/70]">
                      <Scissors className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-[10px] tracking-[0.35em] uppercase">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl text-[hsl(37_22%_96%)]">
                      {member.name}
                    </h3>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={member.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-button w-full bg-[hsl(37_22%_96%)] text-[hsl(0_0%_18%)] border-[hsl(37_22%_96%)] hover:bg-transparent hover:text-[hsl(37_22%_96%)]"
                    >
                      Book with {member.name.split(" ")[0]}
                    </a>
                  </div>
                </div>

                {/* Comb-tooth bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-between px-2 text-[hsl(37_22%_96%)]">
                  <CombTeeth className="h-full w-full justify-between" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center" aria-hidden="true">
          <Scissors className="w-96 h-96 rotate-12 text-foreground" />
        </div>
        <div className="container mx-auto px-6 text-center space-y-6 max-w-2xl relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Ready for a fresh cut?
          </h2>
          <p className="text-muted-foreground">
            Pick your master barber and reserve your chair.
          </p>
          <a
            href="https://magnifico.setmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
