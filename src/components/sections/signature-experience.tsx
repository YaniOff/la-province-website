import { experiences } from "@/lib/data/experiences";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function SignatureExperience() {
  return (
    <section id="experience" className="bg-navy py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Chez nous"
          title="Ce qui fait La Province"
          description="Cinq choses que nos clients remarquent à chaque fois. Le poisson, la salle, le service et l'accueil qui va avec."
          light
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, i) => {
            const Icon = experience.icon;
            return (
              <Reveal key={experience.id} delay={i * 0.08}>
                <div className="group flex h-full flex-col gap-5 bg-navy p-8 transition-colors duration-500 hover:bg-navy-light md:p-10">
                  <Icon
                    className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-2xl text-ivory">
                    {experience.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ivory/65">
                    {experience.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
