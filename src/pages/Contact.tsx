import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@magnificobarber.com?subject=Contact from ${encodeURIComponent(
      formData.name,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
    toast({ title: "Opening email client", description: "Your message will be sent via your email app." });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+357 22 357010", link: "tel:+35722357010" },
    { icon: Mail, title: "Email", content: "hello@magnificobarber.com", link: "mailto:hello@magnificobarber.com" },
    { icon: MapPin, title: "Location", content: "39A Elia Papakyriakou, Makedonitissa, Nicosia, Cyprus", link: "https://maps.google.com/?q=39A+Elia+Papakyriakou+Makedonitissa+Nicosia" },
  ];

  const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">
            Contact <em className="font-script">MAGNIFICO</em>
          </h1>
          <div className="w-12 h-px bg-foreground mx-auto" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Questions, private bookings, or just a hello — we're happy to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="border border-border bg-card">
            <CardContent className="pt-8">
              <h2 className="font-serif text-3xl mb-6 text-foreground">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" required value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?" rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full tracking-[0.2em] uppercase text-xs">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border bg-card">
              <CardContent className="pt-8 space-y-4">
                <h2 className="font-serif text-3xl text-foreground">Visit the Shop</h2>
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 -mx-3 rounded hover:bg-secondary/60 transition-colors">
                    <info.icon className="w-5 h-5 mt-1 text-foreground flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardContent className="pt-8 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl text-foreground">Hours</h2>
                </div>
                {hours.map((s) => (
                  <div key={s.day} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                    <span className="text-foreground">{s.day}</span>
                    <span className="text-muted-foreground">{s.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-border bg-card overflow-hidden">
              <CardContent className="pt-8">
                <h2 className="font-serif text-3xl text-foreground mb-4">Find Us</h2>
                <div className="w-full h-[360px] rounded overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps?q=39A+Elia+Papakyriakou+Makedonitissa+Nicosia+Cyprus&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MAGNIFICO Barbershop Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
