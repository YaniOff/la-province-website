export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
  rating: number;
};

/**
 * Avis authentiques publiés par des clients sur Google Maps et Tripadvisor.
 * Le texte est repris tel quel (extraits raccourcis, les omissions étant
 * signalées par des points de suspension), avec le nom affiché publiquement
 * et la note d'origine. Rien n'est inventé ni reformulé.
 */
export const testimonials: Testimonial[] = [
  {
    id: "hakim",
    quote:
      "La qualité de la nourriture est tout simplement remarquable : des plats savoureux, frais, bien présentés, et avec des saveurs parfaitement équilibrées. On sent que tout est préparé avec soin et passion.",
    author: "Alioui Hakim",
    context: "Google · Local Guide",
    rating: 4,
  },
  {
    id: "samlouns",
    quote:
      "Nous avons très bien mangé, avec un excellent service : personnel avenant, accueillant, souriants, dynamique et très pro. Produits locaux de bonne qualité. Je le recommande les yeux fermés !",
    author: "samlouns",
    context: "Tripadvisor · août 2022",
    rating: 4,
  },
  {
    id: "naim",
    quote:
      "Le cordon bleu est très bon et l'escalope panée aussi … le nougat glacé est excellent, je le recommande à tous.",
    author: "Naïm M",
    context: "Tripadvisor · juillet 2025",
    rating: 5,
  },
  {
    id: "ka",
    quote:
      "L'accueil a été sympathique et nous avons bien mangé. J'ai pris des crevettes royales et mon épouse de l'espadon. Le poisson et les crevettes étaient délicieux … leur fondant au chocolat était excellent.",
    author: "K A",
    context: "Tripadvisor · septembre 2025",
    rating: 4,
  },
];
