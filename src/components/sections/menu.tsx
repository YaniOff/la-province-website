import { menu } from "@/lib/data/menu";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function MenuSection() {
  return (
    <section id="menu" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="La carte"
          title="Tous nos plats"
          description="Voici la carte telle qu'on vous la donne en salle. Elle change un peu au fil des saisons et de ce qui arrive le matin."
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {menu.map((category, i) => (
            <Reveal key={category.id} delay={(i % 2) * 0.1}>
              <div>
                <h3 className="font-display text-2xl text-navy md:text-3xl">
                  {category.title}
                </h3>
                <div className="mt-2 h-px w-16 bg-gold" />

                <ul className="mt-6 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <span className="text-[15px] text-navy/85">
                          {item.name}
                        </span>
                        <span
                          className="flex-1 border-b border-dotted border-navy/25"
                          aria-hidden="true"
                        />
                        <span className="whitespace-nowrap text-sm font-medium text-navy/70">
                          {item.price}
                        </span>
                      </div>
                      {item.note ? (
                        <p className="mt-0.5 text-xs italic text-navy/45">
                          {item.note}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>

                {category.note ? (
                  <p className="mt-5 text-xs italic leading-relaxed text-navy/50">
                    {category.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
