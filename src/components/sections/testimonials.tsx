import { Star, Quote } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Vos mots"
          title="Ce qu'en disent nos clients"
          description="De vrais avis, laissés par nos clients sur Google et Tripadvisor. Nous les reprenons tels qu'ils ont été écrits."
          light
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col gap-6 rounded-sm border border-gold/15 bg-navy-light/50 p-8 md:p-10">
                <Quote className="h-8 w-8 text-gold/50" strokeWidth={1.5} />
                <blockquote className="flex-1 font-display text-xl leading-relaxed text-ivory/90 md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between border-t border-gold/10 pt-5">
                  <div>
                    <p className="text-sm font-medium text-ivory">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-ivory/50">
                      {testimonial.context}
                    </p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} étoiles sur 5`}>
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <a
              href={site.social.tripadvisor}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs font-medium uppercase tracking-[0.2em] text-gold underline-offset-4 transition-colors hover:text-gold-light hover:underline"
            >
              Lire tous les avis sur Tripadvisor
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
