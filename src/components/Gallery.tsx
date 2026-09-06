import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const galleryImages = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallerySection = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={gallerySection.ref}
      className={`py-24 bg-background border-b border-border transition-all duration-1000 ${
        gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="text-xs tracking-[0.35em] uppercase text-ember">{t("gallery.label")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t("gallery.title")}</h2>
          <div className="w-12 h-px bg-ember mx-auto" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("gallery.copy")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden group border border-border transition-all duration-700 ${
                gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={image}
                alt={t("gallery.alt")}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
