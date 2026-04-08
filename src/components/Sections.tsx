import { useLang } from "@/context/LanguageContext";
import {
  categories,
  bestSellers,
  features,
  ctaLinks,
  deliveryImage,
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
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={lang === "pt" ? cat.titlePT : cat.titleEN}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white">
                  {lang === "pt" ? cat.titlePT : cat.titleEN}
                </h3>
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {bestSellers.map((item) => (
            <BestSellerCard key={item.id} item={item} lang={lang} viewOn={t.viewOn} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellerCard({
  item,
  lang,
  viewOn,
}: {
  item: (typeof bestSellers)[0];
  lang: Lang;
  viewOn: string;
}) {
  const title = lang === "pt" ? item.titlePT : item.titleEN;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      {/* Title above image */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-sm font-semibold text-[#0A1628] group-hover:text-[#E63946] transition-colors line-clamp-1">
          {title}
        </h3>
      </div>

      {/* Image */}
      <div className="aspect-square overflow-hidden mx-3 rounded-xl bg-gray-50">
        <img
          src={item.image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Marketplace badge */}
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
            item.marketplace === "Glovo"
              ? "bg-[#FFC244]/15 text-[#D4A017]"
              : "bg-[#34D186]/15 text-[#1B9E5A]"
          }`}
        >
          {item.marketplace}
        </span>
        <span className="text-xs text-gray-400">
          {viewOn} {item.marketplace}
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
      {/* Background image */}
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
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
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

        {/* CTA Group — same 3 buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={ctaLinks.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#E63946] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#d32f3b] hover:shadow-xl sm:w-auto"
          >
            {t.ctaOrder}
          </a>
          <a
            href={ctaLinks.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#0A1628] bg-transparent px-7 py-3.5 text-base font-bold text-[#0A1628] transition-all hover:bg-[#0A1628] hover:text-white sm:w-auto"
          >
            {t.ctaUberEats}
          </a>
          <a
            href={ctaLinks.glovo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#0A1628] bg-transparent px-7 py-3.5 text-base font-bold text-[#0A1628] transition-all hover:bg-[#0A1628] hover:text-white sm:w-auto"
          >
            {t.ctaGlovo}
          </a>
        </div>
      </div>
    </section>
  );
}