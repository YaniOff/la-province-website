export const site = {
  name: "La Province",
  legalName: "Restaurant La Province",
  tagline: "Poissons du jour et cuisine de famille à Azazga",
  metaDescription:
    "Restaurant La Province à Azazga, dans la wilaya de Tizi Ouzou. Le poisson arrive frais chaque matin, la salle est faite pour les grandes tablées et l'on réserve par téléphone ou sur WhatsApp.",
  cuisine: ["Française", "Poissons et fruits de mer", "Algérienne"],

  address: {
    line1: "Numéro 12 Ouarkik",
    line2: "Route Nationale",
    city: "Azazga",
    postalCode: "15001",
    region: "Tizi Ouzou",
    country: "Algérie",
    full: "Numéro 12 Ouarkik, Route Nationale, Azazga 15001, Tizi Ouzou",
  },

  phone: "+213 551 81 33 20",
  phoneHref: "tel:+213551813320",

  whatsapp: {
    number: "213551813320",
    href: "https://wa.me/213551813320",
  },

  hours: {
    label: "Tous les jours",
    display: "de 10h00 à minuit",
    opens: "10:00",
    closes: "00:00",
  },

  social: {
    facebook: "https://www.facebook.com/RestaurantLaProvince/",
    tiktok: "https://www.tiktok.com/@restaurant_la_province",
    tripadvisor:
      "https://www.tripadvisor.fr/Restaurant_Review-g15245215-d23738327-Reviews-Restaurant_La_Province-Azazga_Tizi_Ouzou_Province.html",
  },

  mapsLinkHref:
    "https://www.google.com/maps/search/?api=1&query=Restaurant+La+Province+Azazga+Tizi+Ouzou",
} as const;
