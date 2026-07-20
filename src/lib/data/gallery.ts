import type { StaticImageData } from "next/image";

import facadeDayWide from "@/assets/images/exterior/facade-day-wide.jpg";
import chefDoorDuskHd from "@/assets/images/exterior/chef-door-dusk-hd.jpg";
import facadeNightSignage from "@/assets/images/exterior/facade-night-signage.jpg";

import marbleColumnsAquariumHd from "@/assets/images/interior/marble-columns-aquarium-hd.jpg";
import longTableAquariumHd from "@/assets/images/interior/long-table-aquarium-hd.jpg";
import diningRoomGlassCeiling from "@/assets/images/interior/dining-room-glass-ceiling.jpg";
import diningRoomGreenPanel from "@/assets/images/interior/dining-room-green-panel.jpg";

import boothSunsetView from "@/assets/images/dining/booth-sunset-view.jpg";
import iceCreamSundaeTerrace from "@/assets/images/dining/ice-cream-sundae-terrace.jpg";

import swordfishPresentation from "@/assets/images/atmosphere/swordfish-presentation.jpg";
import chefWelcome from "@/assets/images/atmosphere/chef-welcome.jpg";
import chefMotorcycle from "@/assets/images/atmosphere/chef-motorcycle.jpg";

import plateauPoissonGrille from "@/assets/images/food/plateau-poisson-grille-hd.jpg";
import paella from "@/assets/images/food/paella-hd.jpg";
import grandPlateauMer from "@/assets/images/food/grand-plateau-mer-hd.jpg";
import shrimpLime from "@/assets/images/food/shrimp-lime.jpg";
import gratinFruitsMer from "@/assets/images/food/gratin-fruits-mer-hd.jpg";
import espadonCrevettes from "@/assets/images/food/espadon-crevettes-hd.jpg";
import viandesGrillees from "@/assets/images/food/viandes-grillees-hd.jpg";
import crevettesCocotte from "@/assets/images/food/crevettes-cocotte-hd.jpg";
import filetPoissonCreme from "@/assets/images/food/filet-poisson-creme-hd.jpg";
import pouletGrilleChampignons from "@/assets/images/food/poulet-grille-champignons-hd.jpg";
import escalopePaneeLime from "@/assets/images/food/escalope-panee-lime-hd.jpg";
import viandeMijotee from "@/assets/images/food/viande-mijotee-hd.jpg";
import fruitsFraisMelon from "@/assets/images/food/fruits-frais-melon-hd.jpg";
import dessertsDisplay from "@/assets/images/food/desserts-display-hd.jpg";
import pannaCotta from "@/assets/images/food/panna-cotta-hd.jpg";

export type GalleryCategory =
  | "Plats"
  | "Intérieur"
  | "Salle"
  | "Ambiance"
  | "Extérieur";

export type GalleryImage = {
  id: string;
  src: StaticImageData;
  alt: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  // Plats
  {
    id: "g-food-1",
    src: plateauPoissonGrille,
    alt: "Assiette de poissons grillés avec crevettes, citron et tomate",
    category: "Plats",
  },
  {
    id: "g-food-2",
    src: paella,
    alt: "Paëlla aux moules et crevettes servie dans son plat noir",
    category: "Plats",
  },
  {
    id: "g-food-3",
    src: grandPlateauMer,
    alt: "Grand plateau de fruits de mer avec langouste, poisson et calamars",
    category: "Plats",
  },
  {
    id: "g-food-4",
    src: shrimpLime,
    alt: "Crevettes grillées entières et quartier de citron vert",
    category: "Plats",
  },
  {
    id: "g-food-5",
    src: gratinFruitsMer,
    alt: "Langouste gratinée au fromage",
    category: "Plats",
  },
  {
    id: "g-food-6",
    src: espadonCrevettes,
    alt: "Pavé d'espadon grillé, crevettes et poisson du jour",
    category: "Plats",
  },
  {
    id: "g-food-7",
    src: viandesGrillees,
    alt: "Plateau de viandes grillées, côtelettes, tomate et romarin",
    category: "Plats",
  },
  {
    id: "g-food-7b",
    src: crevettesCocotte,
    alt: "Crevettes grillées servies en cassolette",
    category: "Plats",
  },
  {
    id: "g-food-8",
    src: filetPoissonCreme,
    alt: "Filet de poisson pané, sauce crémée et tuile croustillante",
    category: "Plats",
  },
  {
    id: "g-food-9",
    src: pouletGrilleChampignons,
    alt: "Poulet grillé avec champignons et tomates cerises",
    category: "Plats",
  },
  {
    id: "g-food-10",
    src: escalopePaneeLime,
    alt: "Escalope panée dressée avec un éventail de citron vert",
    category: "Plats",
  },
  {
    id: "g-food-11",
    src: viandeMijotee,
    alt: "Viande mijotée en sauce, servie bien nappée",
    category: "Plats",
  },
  {
    id: "g-food-12",
    src: fruitsFraisMelon,
    alt: "Salade de fruits frais servie dans un melon évidé",
    category: "Plats",
  },
  {
    id: "g-food-13",
    src: dessertsDisplay,
    alt: "Vitrine de desserts maison : tartes, flans et pâtisseries",
    category: "Plats",
  },
  {
    id: "g-food-14",
    src: pannaCotta,
    alt: "Dessert aux agrumes servi en verrine",
    category: "Plats",
  },

  // Intérieur
  {
    id: "g-int-1",
    src: marbleColumnsAquariumHd,
    alt: "Salle du restaurant, colonnes en marbre, verdure et sol clair",
    category: "Intérieur",
  },
  {
    id: "g-int-2",
    src: longTableAquariumHd,
    alt: "Grande table dressée aux couleurs de La Province, près de l'aquarium",
    category: "Intérieur",
  },
  {
    id: "g-int-3",
    src: diningRoomGlassCeiling,
    alt: "Salle avec verrière et végétation suspendue",
    category: "Intérieur",
  },
  {
    id: "g-int-4",
    src: diningRoomGreenPanel,
    alt: "Coin de salle aux boiseries vertes et lumière douce",
    category: "Intérieur",
  },

  // Salle
  {
    id: "g-din-1",
    src: boothSunsetView,
    alt: "Banquette près de la baie vitrée au coucher du soleil",
    category: "Salle",
  },
  {
    id: "g-din-2",
    src: iceCreamSundaeTerrace,
    alt: "Coupes glacées servies en salle",
    category: "Salle",
  },

  // Ambiance
  {
    id: "g-atm-1",
    src: swordfishPresentation,
    alt: "Le chef présente un espadon entier en salle",
    category: "Ambiance",
  },
  {
    id: "g-atm-2",
    src: chefWelcome,
    alt: "Le chef accueille les clients à l'entrée",
    category: "Ambiance",
  },
  {
    id: "g-atm-3",
    src: chefMotorcycle,
    alt: "Le chef devant le restaurant",
    category: "Ambiance",
  },

  // Extérieur
  {
    id: "g-ext-1",
    src: facadeDayWide,
    alt: "Façade de La Province en journée",
    category: "Extérieur",
  },
  {
    id: "g-ext-2",
    src: chefDoorDuskHd,
    alt: "Entrée du restaurant et tapis rouge au crépuscule",
    category: "Extérieur",
  },
  {
    id: "g-ext-3",
    src: facadeNightSignage,
    alt: "L'enseigne lumineuse La Province de nuit",
    category: "Extérieur",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Plats",
  "Intérieur",
  "Salle",
  "Ambiance",
  "Extérieur",
];
