import { site } from "@/lib/data/site";

export type ReservationDetails = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
};

export function buildReservationMessage(details: ReservationDetails) {
  const lines = [
    "Bonjour,",
    "",
    "Je souhaite réserver une table.",
    "",
    `Nom : ${details.name}`,
    `Téléphone : ${details.phone}`,
    `Date : ${details.date}`,
    `Heure : ${details.time}`,
    `Nombre de personnes : ${details.guests}`,
  ];

  if (details.message?.trim()) {
    lines.push(`Message : ${details.message.trim()}`);
  }

  lines.push("", "Merci.");

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
