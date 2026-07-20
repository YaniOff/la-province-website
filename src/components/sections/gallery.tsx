"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import { galleryCategories, galleryImages } from "@/lib/data/gallery";
import type { GalleryCategory } from "@/lib/data/gallery";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "Tous"
  >("Tous");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "Tous"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory],
  );

  const activeImage =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const goTo = (delta: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + delta + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="gallery" className="bg-charcoal py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="En images"
          title="Un aperçu de la maison"
          description="Les plats, la salle et les produits du jour. De quoi vous donner une idée avant de passer nous voir."
          light
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {(["Tous", ...galleryCategories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors",
                activeCategory === category
                  ? "border-gold bg-gold text-navy"
                  : "border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((image, index) => (
            <Reveal
              key={image.id}
              delay={(index % 6) * 0.05}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full overflow-hidden rounded-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex w-full items-center justify-between p-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-ivory">
                      {image.category}
                    </span>
                    <Expand className="h-4 w-4 text-gold" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent className="w-[92vw] max-w-5xl">
          {activeImage ? (
            <div className="relative">
              <div className="relative mx-auto max-h-[80vh] w-full overflow-hidden rounded-sm">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  placeholder="blur"
                  sizes="92vw"
                  className="mx-auto h-auto max-h-[80vh] w-auto object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-ivory/80">
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  {activeImage.category}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => goTo(-1)}
                    aria-label="Image précédente"
                    className="rounded-full border border-gold/30 p-2 transition-colors hover:border-gold hover:text-gold"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    aria-label="Image suivante"
                    className="rounded-full border border-gold/30 p-2 transition-colors hover:border-gold hover:text-gold"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
