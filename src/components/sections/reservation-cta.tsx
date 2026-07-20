"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Clock, Phone, Send } from "lucide-react";

import reservationImage from "@/assets/images/food/mixed-seafood-platter.jpg";
import { site } from "@/lib/data/site";
import { buildReservationMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  message: "",
};

const requiredFields: (keyof FormState)[] = [
  "name",
  "phone",
  "date",
  "time",
  "guests",
];

const fieldLabels: Record<keyof FormState, string> = {
  name: "Nom",
  phone: "Téléphone",
  date: "Date",
  time: "Heure",
  guests: "Nombre de personnes",
  message: "Message",
};

export function ReservationCta() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    for (const field of requiredFields) {
      if (!form[field].trim()) nextErrors[field] = true;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const message = buildReservationMessage({
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: form.guests,
      message: form.message,
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full rounded-sm border bg-navy-light/60 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-gold",
      errors[field] ? "border-red-400/70" : "border-gold/20",
    );

  return (
    <section id="reservation" className="relative overflow-hidden bg-navy py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src={reservationImage}
          alt="Plateau de fruits de mer de La Province"
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Réservation
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.1] text-ivory md:text-6xl">
              Réservez par WhatsApp
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-balance text-base leading-relaxed text-ivory/70 md:text-lg">
              Remplissez les quelques champs ci-dessous. Votre message s&apos;ouvre
              dans WhatsApp, il ne vous reste plus qu&apos;à l&apos;envoyer.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-12 grid max-w-2xl gap-5 rounded-sm border border-gold/15 bg-navy-light/30 p-6 backdrop-blur-sm sm:grid-cols-2 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="res-name" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.name}
              </label>
              <input
                id="res-name"
                type="text"
                value={form.name}
                onChange={update("name")}
                className={inputClass("name")}
                aria-invalid={errors.name}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="res-phone" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.phone}
              </label>
              <input
                id="res-phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                className={inputClass("phone")}
                aria-invalid={errors.phone}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="res-date" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.date}
              </label>
              <input
                id="res-date"
                type="date"
                value={form.date}
                onChange={update("date")}
                className={cn(inputClass("date"), "[color-scheme:dark]")}
                aria-invalid={errors.date}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="res-time" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.time}
              </label>
              <input
                id="res-time"
                type="time"
                value={form.time}
                onChange={update("time")}
                className={cn(inputClass("time"), "[color-scheme:dark]")}
                aria-invalid={errors.time}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="res-guests" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.guests}
              </label>
              <input
                id="res-guests"
                type="number"
                min={1}
                value={form.guests}
                onChange={update("guests")}
                className={inputClass("guests")}
                aria-invalid={errors.guests}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="res-message" className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                {fieldLabels.message} <span className="text-ivory/30">(facultatif)</span>
              </label>
              <textarea
                id="res-message"
                rows={3}
                value={form.message}
                onChange={update("message")}
                className={cn(inputClass("message"), "resize-none")}
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Réserver
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              Ou appelez le {site.phone}
            </a>
            <div className="flex items-center gap-2 text-sm text-ivory/60">
              <Clock className="h-4 w-4 text-gold" />
              <span>
                Ouvert {site.hours.label.toLowerCase()}, {site.hours.display}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
