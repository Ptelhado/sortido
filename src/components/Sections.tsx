import { useLang } from "@/context/LanguageContext";
import {
  categories,
  features,
  deliveryImage,
  heroPartnerCtas,
} from "@/data/content";

// ---- New Top Section (Deals / CTR Focused) ----
export function NewTopSection() {
  const { lang } = useLang();

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Title */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Uber */}
          <a
            href="https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0?ps=1&scats=e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0&scatsubs="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                {lang === "pt" ? "Big Deal" : "Big Deal"}
              </span>
            </div>
          </a>

          {/* Glovo */}
          <a
            href="https://glovoapp.com/pt/pt/lisboa/stores/sortido-lis?content=combos-sc.52490173%2Fagua-sumos-e-refrigerantes-c.52490170"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                {lang === "pt" ? "Glovo" : "Glovo"}
              </span>
            </div>
          </a>

          {/* Bolt */}
          <a
            href="https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                {lang === "pt" ? "Bolt Food" : "Bolt Food"}
              </span>
            </div>
          </a>
        </div>

        {/* Microcopy */}
        <p className="mt-6 text-center text-xs text-gray-400">
          {lang === "pt"
            ? "⏱️ Ofertas podem mudar a qualquer momento"
            : "⏱️ Deals may change at any time"}
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
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl"
            >
              <img
                src={cat.image}
                alt={lang === "pt" ? cat.titlePT : cat.titleEN}
                className="h-full w-full object-cover"
              />
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
          {t.featuresTitle}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="mb-4 block text-3xl">{feat.icon}</span>

              <h3 className="mb-2 text-lg font-bold">
                {lang === "pt" ? feat.titlePT : feat.titleEN}
              </h3>

              <p className="text-sm text-white/70">
                {lang === "pt" ? feat.descPT : feat.descEN}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Final CTA Section ----
export function FinalCtaSection() {
  const { t } = useLang();

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-[#0A1628] sm:text-4xl">
          {t.finalCtaHeadline}
        </h2>

        <p className="mt-4 text-gray-500">{t.finalCtaSubtitle}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {heroPartnerCtas.map((partner) => (
            <a
              key={partner.id}
              href={partner.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.logoSrc}
                alt={partner.alt}
                className="h-14 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
