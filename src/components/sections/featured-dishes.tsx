import Image from "next/image";

import { dishes } from "@/lib/data/dishes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedDishes() {
  return (
    <section id="suggestions" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="À la carte"
          title="Nos suggestions"
          description="Quelques plats que l'on aime bien vous conseiller. La carte complète est un peu plus bas."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.id} delay={(i % 3) * 0.1}>
              <article className="group flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-navy">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-navy/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    {dish.tag}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl text-navy">
                    {dish.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
