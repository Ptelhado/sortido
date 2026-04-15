import { useLang } from "@/context/LanguageContext";
import {
  categories,
  bestSellers,
  features,
  deliveryImage,
  heroPartnerCtas,
} from "@/data/content";
import type { Lang } from "@/data/content";

// ---- New Top Section (HIGH-CONVERTING) ----
export function NewTopSection() {
  const { lang } = useLang();

  const copy = {
    title: {
      pt: "As melhores ofertas estão aqui — pede já",
      en: "Best deals are live — order now",
    },
    subtitle: {
      pt: "Combos e preços especiais disponíveis agora — entrega rápida",
      en: "Exclusive combos and deals live now — fast delivery",
    },
    items: [
      {
        platform: "uber",
        href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0?ps=1&scats=e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0&scatsubs=",
        title: {
          pt: "Descontos Uber Eats",
          en: "Uber Eats deals",
        },
        subtitle: {
          pt: "Preços mais baixos por tempo limitado",
          en: "Lower prices for a limited time",
        },
        cta: {
          pt: "Ver ofertas",
          en: "View deals",
        },
      },
      {
        platform: "glovo",
        href: "https://glovoapp.com/pt/pt/lisboa/stores/sortido-lis?content=combos-sc.52490173%2Fagua-sumos-e-refrigerantes-c.52490170",
        title: {
          pt: "Combos que compensam",
          en: "Best-value combos",
        },
        subtitle: {
          pt: "Mais por menos — só hoje",
          en: "More for less — today only",
        },
        cta: {
          pt: "Aproveitar",
          en: "Get it",
        },
      },
      {
        platform: "bolt",
        href: "https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/",
        title: {
          pt: "Ofertas Bolt Food",
          en: "Bolt Food deals",
        },
        subtitle: {
          pt: "Entrega rápida + promoções ativas",
          en: "Fast delivery + active promos",
        },
        cta: {
          pt: "Pedir agora",
          en: "Order now",
        },
      },
    ],
    microcopy: {
      pt: "⏱️ Ofertas podem mudar a qualquer momento",
      en: "⏱️ Deals may change at any time",
    },
  };

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            {lang === "pt" ? copy.title.pt : copy.title.en}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {lang === "pt" ? copy.subtitle.pt : copy.subtitle.en}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {copy.items.map((item) => (
            <a
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-lg font-bold text-[#0A1628]">
                  {lang === "pt" ? item.title.pt : item.title.en}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {lang === "pt" ? item.subtitle.pt : item.subtitle.en}
                </p>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center justify-center rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white transition-all group-hover:bg-[#d62839]">
                  {lang === "pt" ? item.cta.pt : item.cta.en}
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          {lang === "pt" ? copy.microcopy.pt : copy.microcopy.en}
        </p>
      </div>
    </section>
  );
}
