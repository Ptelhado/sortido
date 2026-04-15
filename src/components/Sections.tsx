import { useLang } from "@/context/LanguageContext";
import { categories, features, heroPartnerCtas } from "@/data/content";

// ---- New Top Section ----
export function NewTopSection() {
  const { lang } = useLang();

  const deals = [
    {
      id: "uber",
      href: "https://www.ubereats.com/pt-en/store/sortido-lisboa/dVKCqH2PUaqlcIaGdgbmxA/755282a8-7d8f-51aa-a570-86867606e6c4/e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0?ps=1&scats=e04d6e55-3e0e-5b8a-9ebd-03ffee9017c0&scatsubs=",
      titlePT: "Descontos Uber Eats",
      titleEN: "Uber Eats deals",
      subtitlePT: "Preços mais baixos por tempo limitado",
      subtitleEN: "Lower prices for a limited time",
      badgePT: "Big Deal",
      badgeEN: "Big Deal",
    },
    {
      id: "glovo",
      href: "https://glovoapp.com/pt/pt/lisboa/stores/sortido-lis?content=combos-sc.52490173%2Fagua-sumos-e-refrigerantes-c.52490170",
      titlePT: "Combos que compensam",
      titleEN: "Best-value combos",
      subtitlePT: "Mais por menos — só hoje",
      subtitleEN: "More for less — today only",
      badgePT: "Glovo",
      badgeEN: "Glovo",
    },
    {
      id: "bolt",
      href: "https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/",
      titlePT: "Ofertas Bolt Food",
      titleEN: "Bolt Food deals",
      subtitlePT: "Entrega rápida + promoções ativas",
      subtitleEN: "Fast delivery + active promos",
      badgePT: "Bolt Food",
      badgeEN: "Bolt Food",
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            {lang === "pt"
              ? "As melhores ofertas estão aqui — pede já"
              : "Best deals are live — order now"}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {lang === "pt"
              ? "Combos e preços especiais disponíveis agora — entrega rápida"
              : "Exclusive combos and deals live now — fast delivery"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {deals.map((deal) => (
            <a
              key={deal.id}
              href={deal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-lg font-bold text-[#0A1628]">
                  {lang === "pt" ? deal.titlePT : deal.titleEN}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {lang === "pt" ? deal.subtitlePT : deal.subtitleEN}
                </p>
              </div>

              <div className="mt-6">
                <span className="inline-flex rounded-full bg-[#E63946] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-[#d62839]">
                  {lang === "pt" ? deal.badgePT : deal.badgeEN}
                </span>
              </div>
            </a>
          ))}
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

// ---- Categories Section ----
export function CategoriesSection() {
  const { lang, t } = useLang();

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            {t.categoriesTitle}
          </h2>
          <p className="mt-3 text-base text-gray-500">{t.categoriesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={lang === "pt" ? cat.titlePT : cat.titleEN}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white">
                  {lang === "pt" ? cat.titlePT : cat.titleEN}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  {lang === "pt" ? cat.subtitlePT : cat.subtitleEN}
                </p>
              </div>
            </a>
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
    <section className="w-full bg-[#0A1628] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t.featuresTitle}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <span className="mb-4 block text-3xl">{feat.icon}</span>

              <h3 className="mb-3 text-lg font-bold">
                {lang === "pt" ? feat.titlePT : feat.titleEN}
              </h3>

              <p className="text-sm leading-relaxed text-white/70">
                {lang === "pt" ? feat.descPT : feat.descEN}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-white/80 sm:text-lg">
          {lang === "pt"
            ? "Fresco e rápido a qualquer hora"
            : "Fresh and fast, any time"}
        </p>
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
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
          {t.finalCtaHeadline}
        </h2>

        <p className="mt-4 text-base text-gray-500">{t.finalCtaSubtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {heroPartnerCtas.map((partner) => {
            const href =
              partner.id === "bolt"
                ? "https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/"
                : partner.href;

            return (
              <a
                key={partner.id}
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.alt}
                className="transition-transform hover:scale-105"
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.alt}
                  className={[
                    "h-14 w-auto object-contain",
                    partner.logoWidthClass ?? "",
                  ].join(" ")}
                  draggable={false}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
