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
            <BestSellerCard key={item.id} item={item} lang={lang} />
          ))}
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
