import Image from "next/image";

import chefDoorDusk from "@/assets/images/exterior/chef-door-dusk-hd.jpg";
import marbleColumns from "@/assets/images/interior/marble-columns-aquarium-hd.jpg";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={chefDoorDusk}
                  alt="Le chef de La Province à l'entrée du restaurant"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-56 overflow-hidden rounded-sm border-4 border-ivory shadow-2xl sm:block md:w-72">
                <Image
                  src={marbleColumns}
                  alt="Colonne en marbre et aquarium dans la salle du restaurant"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:pl-8">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
                La maison
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-balance text-4xl font-medium leading-[1.1] text-navy md:text-5xl">
                Une maison de famille sur la Route Nationale
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-navy/75 md:text-lg">
                <p>
                  La Province est un restaurant familial, à Azazga. Nous avons
                  refait la salle il y a peu, avec du marbre, un peu de verdure
                  et une lumière douce. Les grandes tables, elles, n&apos;ont
                  pas bougé.
                </p>
                <p>
                  Chaque matin, on installe le poisson du jour sur la glace
                  avant de le cuisiner. Ce n&apos;est pas pour la vitrine.
                  C&apos;est comme ça que le chef décide ce qui part au grill,
                  et c&apos;est pour ça que les habitués demandent toujours ce
                  qui vient d&apos;arriver.
                </p>
                <p>
                  On fait de la cuisine française, du poisson, des plats de
                  chez nous. On ne cherche pas à impressionner. On cherche à
                  bien faire, avec des produits qu&apos;on choisit nous-mêmes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
