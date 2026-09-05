import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAIL = "magnificosetmore@gmail.com";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Website contact — ${formData.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
    toast({ title: t("contact.toast.title"), description: t("contact.toast.desc") });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: t("contact.phone"), content: "+357 22 357010", link: "tel:+35722357010" },
    { icon: Mail, title: t("contact.email"), content: EMAIL, link: `mailto:${EMAIL}` },
    {
      icon: MapPin,
      title: t("contact.location"),
      content: t("contact.address"),
      link: "https://maps.google.com/?q=Magnifico+Hair+Salon+Nicosia",
    },
  ];

  const hours = [
    { day: t("contact.hours.weekdays"), time: t("contact.hours.weekdays.time") },
    { day: t("contact.hours.saturday"), time: t("contact.hours.saturday.time") },
    { day: t("contact.hours.sunday"), time: t("contact.hours.sunday.time") },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("contact.label")}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">
            {t("contact.title.a")} <em className="font-script">{t("contact.title.em")}</em>
          </h1>
          <div className="w-12 h-px bg-ember mx-auto" />
          <p className="text-muted-foreground max-w-xl mx-auto">{t("contact.intro")}</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="border border-border bg-card">
            <CardContent className="pt-8">
              <h2 className="font-serif text-3xl mb-6 text-foreground">{t("contact.form.title")}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t("contact.form.name")}</Label>
                  <Input id="contact-name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("contact.form.namePlaceholder")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">{t("contact.form.email")}</Label>
                  <Input id="contact-email" type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">{t("contact.form.message")}</Label>
                  <Textarea id="contact-message" required value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.form.messagePlaceholder")} rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full tracking-[0.2em] uppercase text-xs bg-ember text-ember-foreground hover:bg-ember-dark">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border bg-card">
              <CardContent className="pt-8 space-y-4">
                <h2 className="font-serif text-3xl text-foreground">{t("contact.visit")}</h2>
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 -mx-3 rounded hover:bg-secondary/60 transition-colors">
                    <info.icon className="w-5 h-5 mt-1 text-ember flex-shrink-0" strokeWidth={1.5} />
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
                  <Clock className="w-5 h-5 text-ember" strokeWidth={1.5} />
                  <h2 className="font-serif text-3xl text-foreground">{t("contact.hours")}</h2>
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
                <h2 className="font-serif text-3xl text-foreground mb-4">{t("contact.find")}</h2>
                <div className="w-full h-[360px] rounded overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.0706126053374!2d33.31350307570444!3d35.155623472761526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1b5746531cb5%3A0x50bc1ac8436f169f!2sMagnifico%20Hair%20Salon!5e1!3m2!1sel!2s!4v1788526386405!5m2!1sel!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={t("contact.map.title")}
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
