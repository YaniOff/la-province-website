import type { LucideIcon } from "lucide-react";
import { Fish, Gem, Users, ConciergeBell, HeartHandshake } from "lucide-react";

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    id: "produits-frais",
    title: "Le poisson du jour",
    description:
      "Chaque matin, le poisson, les crevettes et les langoustines arrivent et passent sur la glace. C'est là que tout commence.",
    icon: Fish,
  },
  {
    id: "salle-elegante",
    title: "La salle",
    description:
      "Des colonnes en marbre, un peu de verdure, des banquettes vertes et une lumière douce. On a voulu un endroit où l'on se sent bien sans en faire trop.",
    icon: Gem,
  },
  {
    id: "tablees-familiales",
    title: "Les grandes tablées",
    description:
      "Nos plats se partagent. Les portions sont généreuses et les tables assez grandes pour un anniversaire, des fiançailles ou un déjeuner de famille.",
    icon: Users,
  },
  {
    id: "service-attentif",
    title: "Le service",
    description:
      "Le chef passe souvent en salle présenter la belle pièce du jour avant de la cuisiner. C'est une habitude à laquelle il tient.",
    icon: ConciergeBell,
  },
  {
    id: "accueil-familial",
    title: "L'accueil",
    description:
      "La Province est d'abord une maison de famille. On reçoit les gens comme on aime être reçu, simplement et de bon cœur.",
    icon: HeartHandshake,
  },
];
