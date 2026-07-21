"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";

import heroImage from "@/assets/images/hero/hero-night-signage-hd.jpg";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-navy"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="L'enseigne dorée de La Province illuminée à la tombée de la nuit"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
      <div className="absolute inset-0 bg-navy/20" />

      <motion.div style={{ opacity }} className="relative z-10">
        <Container className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-gold-light"
          >
            Azazga &middot; Tizi Ouzou
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-6xl font-medium leading-[1.05] text-ivory sm:text-7xl md:text-8xl"
          >
            La Province
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-5 font-display text-xl italic text-gold-light sm:text-2xl"
          >
            L&apos;art de recevoir, le goût de l&apos;excellence depuis 2012.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ivory/75 sm:text-lg"
          >
            Une table gastronomique où l&apos;on prend le temps de bien faire :
            des produits choisis, une cuisine variée et un accueil sincère. On
            vous reçoit en couple, en famille ou entre amis, le temps d&apos;un
            repas comme d&apos;une grande occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#reservation">
                <Send className="h-4 w-4" />
                Réserver une table
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">La maison</a>
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70 transition-colors hover:text-gold"
        aria-label="Défiler vers la section À Propos"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
