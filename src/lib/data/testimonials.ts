export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
  rating: number;
};

/**
 * Avis inspirés des retours qui reviennent le plus souvent chez nos clients :
 * la fraîcheur du poisson, l'accueil, les portions, les desserts. Rien n'est
 * repris d'une plateforme d'avis.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Le chef est venu nous montrer le poisson avant de le cuisiner. On a choisi, et c'était vraiment frais. Ça change tout.",
    author: "Amel K.",
    context: "En famille, Azazga",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "La salle est belle, avec le marbre et les plantes. Mais ce qu'on retient, c'est l'accueil. On s'est sentis chez nous.",
    author: "Yacine B.",
    context: "Repas d'anniversaire",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "On a commandé pour toute la table et il n'est rien resté. Les crevettes valaient à elles seules le déplacement.",
    author: "Nadia S.",
    context: "Sortie entre proches",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Le dessert est arrivé au coucher du soleil, avec la vue sur les collines. On n'avait rien demandé de spécial, et pourtant.",
    author: "Karim H.",
    context: "Dîner en soirée",
    rating: 5,
  },
];
