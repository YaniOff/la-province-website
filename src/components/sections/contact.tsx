import { Clock, MapPin, Phone } from "lucide-react";

import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { FacebookIcon, TikTokIcon } from "@/components/ui/social-icons";

const infoItems = [
  {
    icon: MapPin,
    label: "Adresse",
    value: site.address.full,
    href: site.mapsLinkHref,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: `${site.hours.label}, ${site.hours.display}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nous trouver"
          title="On vous attend à Azazga"
          align="left"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy/50">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base text-navy md:text-lg">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                          className="block transition-opacity hover:opacity-70"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-4 border-t border-navy/10 pt-8">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="La Province sur Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="La Province sur TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              href={site.mapsLinkHref}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex h-80 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-sm border border-navy/10 bg-navy shadow-lg transition-colors hover:bg-navy-light lg:h-full lg:min-h-[380px]"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
                aria-hidden="true"
              />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110">
                <MapPin className="h-7 w-7" />
              </span>
              <p className="relative max-w-[220px] text-center text-sm text-ivory/80">
                {site.address.city}, {site.address.region}
              </p>
              <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-gold underline-offset-4 group-hover:underline">
                Ouvrir dans Google Maps
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
