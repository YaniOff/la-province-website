export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
  note?: string;
};

/**
 * Transcrit directement de la carte imprimée du restaurant. Rien n'est
 * inventé : un plat sans description sur la carte physique reste sans
 * description ici. La section menu lit directement ce fichier.
 */
export const menu: MenuCategory[] = [
  {
    id: "entrees-froides",
    title: "Entrées Froides",
    items: [
      { name: "Salade La Province", price: "1000 DA" },
      { name: "Salade de crudités", price: "500 DA" },
      { name: "Salade au thon", price: "700 DA" },
      { name: "Salade au fromage pané", price: "700 DA" },
      { name: "Salade de tomates et fromage aux herbes", price: "600 DA" },
      { name: "Salade de camembert pané", price: "800 DA" },
      { name: "Salade César", price: "1000 DA" },
      { name: "La planche de fromages", price: "1000 DA" },
    ],
  },
  {
    id: "entrees-chaudes",
    title: "Entrées Chaudes",
    items: [
      { name: "Brique au poulet", price: "500 DA" },
      { name: "Gratin de poulet", price: "600 DA" },
      { name: "Omelette au fromage", price: "500 DA" },
      { name: "Omelette aux champignons", price: "600 DA" },
      { name: "Omelette aux crevettes", price: "800 DA" },
      { name: "Omelette royale", price: "1200 DA" },
      { name: "Potage de légumes", price: "400 DA" },
      { name: "Soupe du vieux pêcheur", price: "600 DA" },
      { name: "Briques aux fruits de mer", price: "900 DA" },
      { name: "Gratin de fruits de mer", price: "1000 DA" },
      { name: "Croustillant de camembert au miel", price: "600 DA" },
      { name: "Champignons frais sauté à l'ail", price: "600 DA" },
    ],
  },
  {
    id: "viandes-rouges",
    title: "Viandes Rouges",
    items: [
      { name: "Sauté de veau", price: "1700 DA" },
      { name: "Steak haché", price: "1500 DA" },
      { name: "Foie de veau grillé", price: "2200 DA" },
      { name: "Foie de veau à la catalane", price: "2200 DA" },
      { name: "Rôti de veau", price: "2000 DA" },
      { name: "Pavé de rumsteck de veau grillé", price: "2000 DA" },
      { name: "Steck de veau grillé", price: "1600 DA" },
      { name: "Filet de veau grillé", price: "2200 DA" },
      { name: "Entrecôte grillée", price: "1500 à 3000 DA" },
    ],
  },
  {
    id: "viandes-blanches",
    title: "Viandes Blanches",
    items: [
      { name: "Cuisse de poulet au four", price: "1200 DA" },
      { name: "Escalope de poulet", price: "1200 DA" },
      { name: "Escalope de dinde grillée", price: "1200 DA" },
      {
        name: "Escalope de dinde à la crème au champignons",
        price: "1500 DA",
      },
      { name: "Escalope de dinde à l'ail", price: "1500 DA" },
      { name: "Escalope panée", price: "1300 DA" },
      { name: "Emincé de dinde à la crème", price: "1500 DA" },
      { name: "Cordon bleu", price: "1500 DA" },
      {
        name: "Assiette fitness",
        price: "1200 DA",
        note: "Viande blanche et assortissement de salade",
      },
      { name: "Lapin", price: "1600 DA" },
    ],
  },
  {
    id: "specialite-maison",
    title: "Spécialité Maison",
    items: [
      { name: "Méchoui de chevreau", price: "2700 DA" },
      { name: "Méchoui Royal", price: "3500 DA" },
    ],
    note: "Toutes les viandes sont servies avec la sauce de votre choix : moutarde, roquefort, poivre noir, ail, crème au fromage ou sauce forestière. Supplément 400 DA.",
  },
  {
    id: "pates",
    title: "Nos Pâtes",
    items: [
      { name: "Tagliatelle aux fruits de mer", price: "1600 DA" },
      { name: "Tagliatelle au poulet", price: "1200 DA" },
      { name: "Tagliatelle bolognaise", price: "1500 DA" },
      {
        name: "Tagliatelle sauce fromage et aux champignons",
        price: "800 DA",
      },
    ],
  },
  {
    id: "poissons",
    title: "Poissons",
    items: [
      { name: "Dorade", price: "400 DA / 100g" },
      { name: "Rouget", price: "600 DA / 100g" },
      { name: "Espadon grillé", price: "850 DA / 100g" },
      { name: "Merlan", price: "600 DA / 100g" },
      { name: "Saumon", price: "1300 DA / 100g" },
      { name: "Filet de poisson", price: "1000 DA / 100g" },
      { name: "Crevettes Royales", price: "2500 DA" },
      { name: "Crevettes coiffées", price: "3000 DA" },
      { name: "Paëlla", price: "3500 DA", note: "Chaque jeudi" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Crème caramel maison", price: "500 DA" },
      { name: "Tiramisu", price: "500 DA" },
      { name: "Mousse au chocolat", price: "500 DA" },
      { name: "Tarte au citron", price: "500 DA" },
      { name: "Crème brûlée", price: "500 DA" },
      { name: "Panna cotta", price: "500 DA" },
      { name: "Nougat glacé", price: "600 DA" },
      { name: "Fondant au chocolat", price: "500 DA" },
      { name: "Cheesecake", price: "500 DA" },
      { name: "Coupe de glace", price: "500 DA" },
      { name: "Salade de fruits frais", price: "600 DA" },
      {
        name: "Tarte aux pommes",
        price: "500 DA",
        note: "Fruits de saison, voir le serveur",
      },
    ],
  },
  {
    id: "boissons-fraiches",
    title: "Boissons Fraîches",
    items: [
      { name: "Bouteille jus (GM)", price: "250 DA" },
      { name: "Bouteille jus (PM)", price: "100 DA" },
      { name: "Fanta / Coca (GM)", price: "250 DA" },
      { name: "Fanta / Coca (PM)", price: "100 DA" },
      { name: "Eau minérale (GM)", price: "100 DA" },
      { name: "Coca zéro 1 litre", price: "250 DA" },
      { name: "Mojito", price: "400 DA" },
      { name: "Jus pressé (le verre)", price: "400 DA" },
      { name: "Jus pressé (la carafe)", price: "1400 DA" },
    ],
  },
  {
    id: "boissons-chaudes",
    title: "Boissons Chaudes",
    items: [
      { name: "Café", price: "150 DA" },
      { name: "Café Nespresso", price: "200 DA" },
      { name: "Thé", price: "50 DA" },
    ],
  },
];
