import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const galleryImages = [
  { src: gallery1, alt: "Barber at work at MAGNIFICO" },
  { src: gallery2, alt: "MAGNIFICO shop interior" },
  { src: gallery3, alt: "Styling in progress" },
  { src: gallery4, alt: "MAGNIFICO Barbershop detail" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallerySection = useScrollAnimation();

  return (
    <section
      ref={gallerySection.ref}
      className={`py-24 bg-background border-b border-border transition-all duration-1000 ${
        gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">The Gallery</h2>
          <div className="w-12 h-px bg-foreground mx-auto" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A look inside the shop and a few of our favourite finishes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden group border border-border transition-all duration-700 ${
                gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
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
