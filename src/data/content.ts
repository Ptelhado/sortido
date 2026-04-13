// ============================================================
// Sortido Landing Page — Centralized Content & Translations
// ============================================================

export type Lang = "pt" | "en";

// --- CTA Links (editable) ---
export const ctaLinks = {
  order: "https://sortido.pt/order",
  about: "https://maps.app.goo.gl/5sAat1fMhLRFvYYz7",
  uberEats: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA?srsltid=AfmBOor-W3wTMUB9NiAxeQ5xW8g5WFShgXV5fb9f0sZT6UMu2gdE94ut",
  glovo: "https://glovoapp.com/pt/pt/sortido",
};

// --- Hero Delivery Partners (logos as CTA buttons) ---
export const heroPartnerCtas: HeroPartnerCta[] = [
  {
    id: "uber-eats",
    href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA?srsltid=AfmBOor-W3wTMUB9NiAxeQ5xW8g5WFShgXV5fb9f0sZT6UMu2gdE94ut",
    logoSrc: "/uber-eats.png",
    alt: "Uber Eats",
    logoWidthClass: "max-w-[108px]",
  },
  {
    id: "glovo",
    href: "https://glovoapp.com/pt/pt/sortido",
    logoSrc: "/glovo.png",
    alt: "Glovo",
    logoWidthClass: "max-w-[92px]",
  },
  {
    id: "bolt",
    logoSrc: "/bolt-food.png",
    alt: "Bolt Food",
    comingSoon: true,
    logoWidthClass: "max-w-[96px]",
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
  image: string;
}

export const categories: Category[] = [
  {
    id: "beers",
    titlePT: "Cervejas",
    titleEN: "Beers",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/0ed41f5a-9308-4005-ba07-9e82f82fd25f.png",
  },
  {
    id: "sodas",
    titlePT: "Refrigerantes",
    titleEN: "Sodas",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/d93db569-f48c-4c2a-a61d-d0ad66506d98.png",
  },
  {
    id: "essentials",
    titlePT: "Essenciais",
    titleEN: "Essentials",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/ffe1dd88-25b9-456d-b9fe-adc3157f81c9.png",
  },
];

// --- Best Sellers ---
export interface BestSeller {
  id: string;
  titlePT: string;
  titleEN: string;
  image: string;
  href: string;
  marketplace: "Glovo" | "Bolt";
}

export const bestSellers: BestSeller[] = [
  {
    id: "super-bock",
    titlePT: "Super Bock Original",
    titleEN: "Super Bock Original",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/0ed41f5a-9308-4005-ba07-9e82f82fd25f.png",
    href: "https://glovoapp.com/pt/pt/sortido/super-bock",
    marketplace: "Glovo",
  },
  {
    id: "coca-cola",
    titlePT: "Coca-Cola Gelada",
    titleEN: "Ice-Cold Coca-Cola",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/d93db569-f48c-4c2a-a61d-d0ad66506d98.png",
    href: "https://glovoapp.com/pt/pt/sortido/coca-cola",
    marketplace: "Glovo",
  },
  {
    id: "agua-luso",
    titlePT: "Água Luso 1.5L",
    titleEN: "Luso Water 1.5L",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/ffe1dd88-25b9-456d-b9fe-adc3157f81c9.png",
    href: "https://bolt.eu/pt/food/sortido/agua-luso",
    marketplace: "Bolt",
  },
  {
    id: "monster-energy",
    titlePT: "Monster Energy",
    titleEN: "Monster Energy",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/d93db569-f48c-4c2a-a61d-d0ad66506d98.png",
    href: "https://glovoapp.com/pt/pt/sortido/monster-energy",
    marketplace: "Glovo",
  },
  {
    id: "sagres",
    titlePT: "Sagres Branca",
    titleEN: "Sagres Lager",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/0ed41f5a-9308-4005-ba07-9e82f82fd25f.png",
    href: "https://bolt.eu/pt/food/sortido/sagres",
    marketplace: "Bolt",
  },
  {
    id: "compal",
    titlePT: "Compal Clássico",
    titleEN: "Compal Classic",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1075182/2026-04-07/ffe1dd88-25b9-456d-b9fe-adc3157f81c9.png",
    href: "https://glovoapp.com/pt/pt/sortido/compal",
    marketplace: "Glovo",
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
    titlePT: "Entrega em minutos",
    titleEN: "Delivery in minutes",
    descPT: "Recebe as tuas bebidas geladas e essenciais em minutos, diretamente à tua porta.",
    descEN: "Get your chilled drinks and essentials in minutes, straight to your door.",
    icon: "⚡",
  },
  {
    id: "cold",
    titlePT: "Sempre gelado",
    titleEN: "Always chilled",
    descPT: "Todas as bebidas saem do nosso frigorífico. Geladas, como devem ser.",
    descEN: "Every drink comes straight from our fridge. Ice-cold, as it should be.",
    icon: "❄️",
  },
  {
    id: "premium",
    titlePT: "Marcas premium",
    titleEN: "Premium brands",
    descPT: "Seleção curada das melhores marcas nacionais e internacionais.",
    descEN: "Curated selection of the best national and international brands.",
    icon: "✨",
  },
  {
    id: "convenience",
    titlePT: "Conveniência real",
    titleEN: "Real convenience",
    descPT: "Disponível no Uber Eats e Glovo. Encomenda onde quiseres.",
    descEN: "Available on Uber Eats and Glovo. Order wherever you want.",
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
  contactPT: { title: "Contacto", phone: "+351 912 345 678", email: "info@sortido.pt" },
  contactEN: { title: "Contact", phone: "+351 912 345 678", email: "info@sortido.pt" },
  addressPT: { title: "Morada", line1: "Rua da Conveniência, 42", line2: "1200-100 Lisboa, Portugal" },
  addressEN: { title: "Address", line1: "Rua da Conveniência, 42", line2: "1200-100 Lisbon, Portugal" },
  hoursPT: { title: "Horário", line1: "Seg–Dom: 10h – 02h" },
  hoursEN: { title: "Hours", line1: "Mon–Sun: 10am – 2am" },
};

// --- Translations ---
export const translations = {
  pt: {
    headerCta: "Sobre nós",
    heroHeadline: "Bebidas geladas e essenciais,\nentregues em minutos.",
    heroSubtitle: "O supermercado de conveniência premium. Cervejas, refrigerantes, águas e snacks — sempre gelados, sempre rápidos.",
    ctaOrder: "Encomendar",
    ctaComingSoon: "Em breve",
    ctaUberEats: "Uber Eats",
    ctaGlovo: "Glovo",
    categoriesTitle: "O que temos para ti",
    categoriesSubtitle: "Explora as nossas categorias",
    bestSellersTitle: "Mais vendidos",
    bestSellersSubtitle: "Os favoritos dos nossos clientes",
    viewOn: "Ver no",
    featuresTitle: "Porquê Sortido?",
    finalCtaHeadline: "Pronto para encomendar?",
    finalCtaSubtitle: "Bebidas geladas à distância de um clique.",
    footerTagline: "O supermercado de conveniência premium de Lisboa.",
    footerSections: "Secções",
    footerHome: "Início",
    footerProducts: "Produtos",
    footerBestSellers: "Mais Vendidos",
    footerAbout: "Sobre",
    footerOrderNow: "Encomendar",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    headerCta: "About us",
    heroHeadline: "Chilled drinks & essentials,\ndelivered in minutes.",
    heroSubtitle: "The premium convenience supermarket. Beers, sodas, water and snacks — always chilled, always fast.",
    ctaOrder: "Order now",
    ctaComingSoon: "Coming soon",
    ctaUberEats: "Uber Eats",
    ctaGlovo: "Glovo",
    categoriesTitle: "What we have for you",
    categoriesSubtitle: "Explore our categories",
    bestSellersTitle: "Best sellers",
    bestSellersSubtitle: "Our customers' favorites",
    viewOn: "View on",
    featuresTitle: "Why Sortido?",
    finalCtaHeadline: "Ready to order?",
    finalCtaSubtitle: "Chilled drinks just a click away.",
    footerTagline: "Lisbon's premium convenience supermarket.",
    footerSections: "Sections",
    footerHome: "Home",
    footerProducts: "Products",
    footerBestSellers: "Best Sellers",
    footerAbout: "About",
    footerOrderNow: "Order now",
    footerRights: "All rights reserved.",
  },
} as const;
