import { useLang } from "@/context/LanguageContext";
import {
  categories,
  features,
  deliveryImage,
  heroPartnerCtas,
} from "@/data/content";

// ---- New Top Section ----
export function NewTopSection() {
  const { lang } = useLang();

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A1628] sm:text-4xl">
            {lang === "pt"
              ? "As melhores ofertas estão aqui — pede já"
              : "Best deals are live — order now"}
          </h2>
          <p className="mt-3 text-gray-500">
            {lang === "pt"
              ? "Combos e preços especiais disponíveis agora — entrega rápida"
              : "Exclusive combos and deals live now — fast delivery"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Uber */}
          <a
            href="https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0?ps=1&scats=e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0&scatsubs="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold text-[#0A1628]">
                {lang === "pt" ? "Descontos Uber Eats" : "Uber Eats deals"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {lang === "pt"
                  ? "Preços mais baixos por tempo limitado"
                  : "Lower prices for a limited time"}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-flex rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white">
                {lang === "pt" ? "Ver ofertas" : "View deals"}
              </span>
            </div>
          </a>

          {/* Glovo */}
          <a
            href="https://glovoapp.com/pt/pt/lisboa/stores/sortido-lis?content=combos-sc.52490173%2Fagua-sumos-e-refrigerantes-c.52490170"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold text-[#0A1628]">
                {lang === "pt" ? "Combos que compensam" : "Best-value combos"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {lang === "pt"
                  ? "Mais por menos — só hoje"
                  : "More for less — today only"}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-flex rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white">
                {lang === "pt" ? "Aproveitar" : "Get it"}
              </span>
            </div>
          </a>

          {/* Bolt */}
          <a
            href="https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold text-[#0A1628]">
                {lang === "pt" ? "Ofertas Bolt Food" : "Bolt Food deals"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {lang === "pt"
                  ? "Entrega rápida + promoções ativas"
                  : "Fast delivery + active promos"}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-flex rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white">
                {lang === "pt" ? "Pedir agora" : "Order now"}
              </span>
            </div>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          {lang === "pt"
            ? "⏱️ Ofertas podem mudar a qualquer momento"
            : "⏱️ Deals may change at any time"}
        </p>
      </div>
    </section>
  );
}
  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A1628] sm:text-4xl">
            {lang === "pt" ? copy.title.pt : copy.title.en}
          </h2>
          <p className="mt-3 text-gray-500">
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
              className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg"
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
                <span className="inline-flex rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white">
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

// ---- Categories Section ----
export function CategoriesSection() {
  const { lang, t } = useLang();

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A1628] sm:text-4xl">
            {t.categoriesTitle}
          </h2>
          <p className="mt-3 text-gray-500">{t.categoriesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.id} className="rounded-2xl bg-white shadow-md">
              <img src={cat.image} className="rounded-t-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Features Section ----
export function FeaturesSection() {
  const { lang, t } = useLang();

  return (
    <section className="w-full bg-[#0A1628] py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {t.featuresTitle}
        </h2>
      </div>
    </section>
  );
}

// ---- Final CTA Section ----
export function FinalCtaSection() {
  const { t } = useLang();

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24 text-center">
      <h2 className="text-3xl font-bold">{t.finalCtaHeadline}</h2>
    </section>
  );
}          pt: "Ver ofertas",
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
