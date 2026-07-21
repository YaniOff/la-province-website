"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#experience", label: "L'Expérience" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galerie" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy/85 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-transparent py-6",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl text-ivory transition-colors hover:text-gold"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <a href="#reservation">
              <Send className="h-3.5 w-3.5" />
              Réserver
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-ivory lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </Container>

      {open ? (
        <div className="mobile-menu-panel fixed inset-0 z-[70] flex flex-col bg-navy lg:hidden">
          <Container className="flex items-center justify-between py-6">
            <span className="text-2xl text-ivory">
              <Logo />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-ivory transition-colors hover:text-gold"
              aria-label="Fermer le menu"
            >
              <X className="h-7 w-7" />
            </button>
          </Container>
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8"
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ivory transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4">
              <a href="#reservation" onClick={() => setOpen(false)}>
                <Send className="h-4 w-4" />
                Réserver
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
