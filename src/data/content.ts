// ============================================================
// Sortido Landing Page — Centralized Content & Translations
// ============================================================

export type Lang = "pt" | "en";

// --- Shared Types ---
export interface HeroPartnerCta {
  id: string;
  href?: string;
  logoSrc: string;
  alt: string;
  comingSoon?: boolean;
  logoWidthClass?: string;
}

// --- CTA Links (editable) ---
export const ctaLinks = {
  order:
    "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA?srsltid=AfmBOor-W3wTMUB9NiAxeQ5xW8g5WFShgXV5fb9f0sZT6UMu2gdE94ut",
  about: "https://maps.app.goo.gl/5sAat1fMhLRFvYYz7",
  uberEats:
    "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA?srsltid=AfmBOor-W3wTMUB9NiAxeQ5xW8g5WFShgXV5fb9f0sZT6UMu2gdE94ut",
  glovo: "https://glovoapp.com/pt/pt/lisboa/stores/sortido-lis",
  bolt: "https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/",
};

// --- Hero Delivery Partners (logos as CTA buttons) ---
export const heroPartnerCtas: HeroPartnerCta[] = [
  {
    id: "uber-eats",
    href: ctaLinks.uberEats,
    logoSrc: "/uber-eats.png",
    alt: "Uber Eats",
    logoWidthClass: "max-w-[108px]",
  },
  {
    id: "glovo",
    href: ctaLinks.glovo,
    logoSrc: "/glovo.png",
    alt: "Glovo",
    logoWidthClass: "max-w-[92px]",
  },
  {
    id: "bolt",
    href: ctaLinks.bolt,
    logoSrc: "/bolt-food.png",
    alt: "Bolt Food",
    comingSoon: false,
  },
];

// --- Hero Gallery ---
export const heroImage =
  "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/715cf852-70f7-4120-b4c0-26e114fdec20.png";

export const deliveryImage =
  "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/13a8fc0d-f8c1-404f-84d2-5edd51ecade9.png";

// --- Categories ---
export interface Category {
  id: string;
  titlePT: string;
  titleEN: string;
  subtitlePT: string;
  subtitleEN: string;
  image: string;
  href: string;
  uberCategory: string;
}

export const categories: Category[] = [
  {
    id: "beer-cider",
    titlePT: "Produtos do dia-a-dia",
    titleEN: "Everyday essentials",
    subtitlePT: "Tudo o que precisas, quando precisas",
    subtitleEN: "Everything you need, when you need it",
    image: "/daily_products.png",
    href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/4ac421bb-e462-49f0-96f3-3b5ee26ce102?ps=1&scats=4ac421bb-e462-49f0-96f3-3b5ee26ce102&scatsubs=",
    uberCategory: "Produtos do dia-a-dia",
  },
  {
    id: "soft-drinks-water",
    titlePT: "Sempre frescos",
    titleEN: "Always fresh",
    subtitlePT: "Bebidas geladas, prontas a beber",
    subtitleEN: "Chilled drinks, ready to enjoy",
    image: "/always_fresh.png",
    href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/d6eb5b8d-ecfa-4147-b796-d3c2873dd834?ps=1&scats=d6eb5b8d-ecfa-4147-b796-d3c2873dd834&scatsubs=",
    uberCategory: "Sempre frescos",
  },
  {
    id: "snacks-sweets",
    titlePT: "Para matar o desejo",
    titleEN: "Cravings sorted",
    subtitlePT: "Snacks e doces para qualquer momento",
    subtitleEN: "Snacks and sweets for any moment",
    image: "/matar_o_desejo.png",
    href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA?srsltid=AfmBOor-W3wTMUB9NiAxeQ5xW8g5WFShgXV5fb9f0sZT6UMu2gdE94ut",
    uberCategory: "Para matar o desejo",
  },
];

// --- Best Sellers ---
export interface BestSeller {
  id: string;
  titlePT: string;
  titleEN: string;
  image: string;
  href: string;
  marketplace: "Uber Eats" | "Glovo" | "Bolt";
}

export const bestSellers: BestSeller[] = [
  {
    id: "super-bock-uber",
    titlePT: "Super Bock Original",
    titleEN: "Super Bock Original",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/0ed41f5a-9308-4005-ba07-9e82f82fd25f.png",
    href: ctaLinks.uberEats,
    marketplace: "Uber Eats",
  },
  {
    id: "monster-energy-uber",
    titlePT: "Monster Energy",
    titleEN: "Monster Energy",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/d93db569-f48c-4c2a-a61d-d0ad66506d98.png",
    href: ctaLinks.uberEats,
    marketplace: "Uber Eats",
  },
  {
    id: "coca-cola-glovo",
    titlePT: "Coca-Cola Gelada",
    titleEN: "Ice-Cold Coca-Cola",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/d93db569-f48c-4c2a-a61d-d0ad66506d98.png",
    href: "https://glovoapp.com/pt/pt/sortido/coca-cola",
    marketplace: "Glovo",
  },
  {
    id: "compal-glovo",
    titlePT: "Compal Clássico",
    titleEN: "Compal Classic",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/ffe1dd88-25b9-456d-b9fe-adc3157f81c9.png",
    href: "https://glovoapp.com/pt/pt/sortido/compal",
    marketplace: "Glovo",
  },
  {
    id: "agua-luso-bolt",
    titlePT: "Água Luso 1.5L",
    titleEN: "Luso Water 1.5L",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/ffe1dd88-25b9-456d-b9fe-adc3157f81c9.png",
    href: "https://bolt.eu/pt/food/sortido/agua-luso",
    marketplace: "Bolt",
  },
  {
    id: "sagres-bolt",
    titlePT: "Sagres Branca",
    titleEN: "Sagres Lager",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/0ed41f5a-9308-4005-ba07-9e82f82fd25f.png",
    href: "https://bolt.eu/pt/food/sortido/sagres",
    marketplace: "Bolt",
  },
];

// --- Features ---
export interface Feature {
  id: string;
  titlePT: string;
  titleEN: string;
  descPT: string;
  descEN: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "fast",
    titlePT: "Mais rápido que supermercados",
    titleEN: "Faster than supermarkets",
    descPT: "Não esperes pelo dia seguinte. Recebe já.",
    descEN: "No next-day delivery. Get what you need now.",
    icon: "⚡",
  },
  {
    id: "cold",
    titlePT: "Sempre gelado",
    titleEN: "Always chilled",
    descPT:
      "Todas as bebidas saem do nosso frigorífico. Geladas, como devem ser.",
    descEN:
      "Every drink comes straight from our fridge. Ice-cold, as it should be.",
    icon: "❄️",
  },
  {
    id: "unmatched",
    titlePT: "Aberto quando os outros fecham",
    titleEN: "Open when others aren’t",
    descPT: "De madrugada ou cedo de manhã — estamos sempre disponíveis.",
    descEN: "Late-night? Early morning? We’re always on.",
    icon: "🌙",
  },
  {
    id: "convenience",
    titlePT: "Feito para ser simples",
    titleEN: "Built for convenience",
    descPT: "Pede pouco ou muito. Sem complicações.",
    descEN: "Small orders are welcome. No stress.",
    icon: "📱",
  },
];

// --- Social Links ---
export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/sortido.pt",
    icon: "instagram",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/sortido.pt",
    icon: "facebook",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@sortido.pt",
    icon: "tiktok",
  },
];

// --- Footer Data ---
export const footerData = {
  contactPT: {
    title: "Contacto",
    phone: "+351 914 785 142",
    email: "geral@planetasortido.pt",
  },
  contactEN: {
    title: "Contact",
    phone: "+351 914 785 142",
    email: "geral@planetasortido.pt",
  },
  addressPT: {
    title: "Morada",
    line1: "R. Camilo Castelo Branco, 17",
    line2: "1150-084 Lisboa, Portugal",
  },
  addressEN: {
    title: "Address",
    line1: "R. Camilo Castelo Branco, 17",
    line2: "1150-084 Lisboa, Portugal",
  },
  hoursPT: {
    title: "Horário",
    line1: "Aberto 24h",
    line2: "7 dias por semana",
  },
  hoursEN: {
    title: "Hours",
    line1: "Open 24h",
    line2: "7 days a week",
  },
};

// --- Translations ---
export const translations = {
  pt: {
    headerCta: "Sobre nós",

    heroHeadline: "Produtos entregues em minutos.",
    heroSubtitleLine1: "Recebe tudo à tua porta em menos de 20 minutos.",
    heroSubtitleLine2: "Aberto 24/7",

    ctaOrder: "Encomenda agora",
    ctaComingSoon: "Em breve",
    ctaUberEats: "Uber Eats",
    ctaGlovo: "Glovo",

    categoriesTitle: "Precisas de algo agora?",
    categoriesSubtitle: "Escolhe e recebe em minutos",

    bestSellersTitle: "Do “preciso disto” → à tua porta em minutos",
    bestSellersSubtitle: "Sem filas, sem carregar sacos",
    viewOn: "Ver no",

    featuresTitle: "Porquê escolher a Sortido?",

    finalCtaHeadline: "Pronto para encomendar?",
    finalCtaSubtitle: "Vê o que está disponível perto de ti.",

    footerTagline: "Produtos entregues em minutos.",
    footerSections: "Secções",
    footerHome: "Início",
    footerDeals: "Descontos",
    footerOrderNow: "Encomenda agora",
    footerAboutUs: "Sobre nós",
    footerRights: "Todos os direitos reservados.",
  },

  en: {
    headerCta: "About us",

    heroHeadline: "Products delivered in minutes.",
    heroSubtitleLine1:
      "Get everything delivered to your door in under 20 minutes.",
    heroSubtitleLine2: "Open 24/7",

    ctaOrder: "Order now",
    ctaComingSoon: "Coming soon",
    ctaUberEats: "Uber Eats",
    ctaGlovo: "Glovo",

    categoriesTitle: "Do you need anything right now?",
    categoriesSubtitle: "Choose and receive in minutes",

    bestSellersTitle: "From “I need it” → at your door in minutes",
    bestSellersSubtitle: "No queues, no heavy bags",
    viewOn: "View on",

    featuresTitle: "Why choose Sortido?",

    finalCtaHeadline: "Ready to order?",
    finalCtaSubtitle: "Check what’s available near you.",

    footerTagline: "Products delivered in minutes.",
    footerSections: "Sections",
    footerHome: "Home",
    footerDeals: "Deals",
    footerOrderNow: "Order now",
    footerAboutUs: "About us",
    footerRights: "All rights reserved.",
  },
} as const;
