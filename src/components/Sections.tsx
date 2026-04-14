import { useLang } from "@/context/LanguageContext";
import {
  categories,
  bestSellers,
  features,
  deliveryImage,
  heroPartnerCtas,
} from "@/data/content";
import type { Lang } from "@/data/content";

// ---- Categories Section ----
export function CategoriesSection() {
  const { lang, t } = useLang();

  return (
    <section id="categories" className="w-full bg-[#FAFBFC] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            {t.categoriesTitle}
          </h2>
          <p className="mt-3 text-base text-gray-500">{t.categoriesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Best Sellers Section ----
export function BestSellersSection() {
  const { lang, t } = useLang();

  const uberEatsItems = bestSellers.filter(
    (item) => item.marketplace === "Uber Eats"
  );
  const glovoItems = bestSellers.filter(
    (item) => item.marketplace === "Glovo"
  );
  const boltItems = bestSellers.filter(
    (item) => item.marketplace === "Bolt"
  );

  return (
    <section id="bestsellers" className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            {t.bestSellersTitle}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {t.bestSellersSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            {uberEatsItems.map((item) => (
              <BestSellerCard key={item.id} item={item} lang={lang} />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {glovoItems.map((item) => (
              <BestSellerCard key={item.id} item={item} lang={lang} />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {boltItems.map((item) => (
              <BestSellerCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BestSellerCard({
  item,
  lang,
}: {
  item: (typeof bestSellers)[0];
  lang: Lang;
}) {
  const title = lang === "pt" ? item.titlePT : item.titleEN;

  const badgeClass =
    item.marketplace === "Uber Eats"
      ? "bg-black text-white"
      : item.marketplace === "Glovo"
      ? "bg-[#FFC244]/15 text-[#D4A017]"
      : "bg-[#34D186]/15 text-[#1B9E5A]";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="px-4 pb-2 pt-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-[#0A1628] transition-colors group-hover:text-[#E63946]">
          {title}
        </h3>
      </div>

      <div className="mx-3 aspect-square overflow-hidden rounded-xl bg-gray-50">
        <img
          src={item.image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center px-4 py-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${badgeClass}`}
        >
          {item.marketplace}
        </span>
      </div>
    </a>
  );
}

// ---- Features Section ----
export function FeaturesSection() {
  const { lang, t } = useLang();

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#0A1628] py-16 sm:py-24"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src={deliveryImage}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {t.featuresTitle}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <span className="mb-4 block text-3xl">{feat.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-white">
                {lang === "pt" ? feat.titlePT : feat.titleEN}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
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
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
          {t.finalCtaHeadline}
        </h2>
        <p className="mt-4 text-base text-gray-500">{t.finalCtaSubtitle}</p>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-6">
          {heroPartnerCtas.map((partner) => {
            const spacingClass =
              partner.id === "uber-eats"
                ? "mr-[5px]"
                : partner.id === "bolt"
                ? "ml-[5px]"
                : "";

            const logo = (
              <div className={`flex flex-col items-center ${spacingClass}`}>
                <img
                  src={partner.logoSrc}
                  alt={partner.alt}
                  className={[
                    "block h-14 w-auto object-contain",
                    partner.logoWidthClass ?? "max-w-[100px]",
                    partner.comingSoon ? "opacity-80" : "",
                  ].join(" ")}
                  draggable={false}
                />
                {partner.comingSoon && (
                  <span className="mt-2 text-xs font-semibold tracking-wide text-gray-500">
                    {t.ctaComingSoon}
                  </span>
                )}
              </div>
            );

            if (partner.comingSoon || !partner.href) {
              return (
                <div key={partner.id} aria-label={partner.alt}>
                  {logo}
                </div>
              );
            }

            return (
              <a
                key={partner.id}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.alt}
              >
                {logo}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
