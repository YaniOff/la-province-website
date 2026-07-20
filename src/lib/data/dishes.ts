import type { StaticImageData } from "next/image";

import poissonGrille from "@/assets/images/food/plateau-poisson-grille-hd.jpg";
import crevettesRoyales from "@/assets/images/food/shrimp-lime.jpg";
import paella from "@/assets/images/food/paella-hd.jpg";
import viandesGrillees from "@/assets/images/food/viandes-grillees-hd.jpg";
import gratinFruitsMer from "@/assets/images/food/gratin-fruits-mer-hd.jpg";
import desserts from "@/assets/images/food/desserts-display-hd.jpg";

export type Dish = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  tag: string;
};

/**
 * Aperçu de la carte. Chaque plat est associé à une photo réelle de la
 * maison, vérifiée une à une. La carte complète se trouve dans data/menu.ts.
 */
export const dishes: Dish[] = [
  {
    id: "poisson-du-jour",
    name: "Poisson grillé du jour",
    description:
      "On grille le poisson arrivé le matin. Selon la pêche, c'est de la dorade, du rouget, du merlan ou de l'espadon.",
    image: poissonGrille,
    tag: "Poissons",
  },
  {
    id: "crevettes-royales",
    name: "Crevettes royales",
    description:
      "Des crevettes grillées, un filet de citron, rien de plus. C'est un de nos plats les plus demandés.",
    image: crevettesRoyales,
    tag: "Poissons",
  },
  {
    id: "paella",
    name: "Paëlla",
    description:
      "Riz, moules et crevettes, préparée le jeudi. Il vaut mieux la réserver, elle part vite.",
    image: paella,
    tag: "Le jeudi",
  },
  {
    id: "viandes-grillees",
    name: "Viandes grillées",
    description:
      "Entrecôte, filet ou rumsteck de veau, cuits sur la braise. Vous choisissez la sauce qui va avec.",
    image: viandesGrillees,
    tag: "Viandes",
  },
  {
    id: "gratin-fruits-mer",
    name: "Gratin de fruits de mer",
    description:
      "Une langouste gratinée au fromage, servie bien dorée. Généreuse, elle se partage volontiers.",
    image: gratinFruitsMer,
    tag: "Fruits de mer",
  },
  {
    id: "desserts-maison",
    name: "Desserts maison",
    description:
      "Tiramisu, crème brûlée, nougat glacé. Ils sont faits ici, on vous les présente en salle.",
    image: desserts,
    tag: "Desserts",
  },
];
