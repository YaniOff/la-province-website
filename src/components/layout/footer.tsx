import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { FacebookIcon, TikTokIcon } from "@/components/ui/social-icons";

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#experience", label: "L'Expérience" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galerie" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-charcoal">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-3xl text-ivory">
            <Logo />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            {site.metaDescription}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="La Province sur Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="La Province sur TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.tripadvisor}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="La Province sur Tripadvisor"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Star className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Explorer
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Nous Trouver
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. Tous droits
            réservés.
          </p>
          <p>{site.address.city}, {site.address.region}, Algérie</p>
        </Container>
      </div>
    </footer>
  );
}
