import { useLang } from "@/context/LanguageContext";
import { heroImage, heroPartnerCtas } from "@/data/content";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A1628]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sortido hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center gap-6 text-center">
          <h1 className="whitespace-pre-line text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.heroHeadline}
          </h1>
          
          <p className="mx-auto max-w-2xl whitespace-pre-line text-lg leading-8 text-slate-200/80">
            {t.heroSubtitle}
          </p>
          
          <div className="mx-auto mt-4 flex flex-wrap items-start justify-center gap-6">
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
                    <span className="mt-2 text-xs font-semibold tracking-wide text-white/80">
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
                  className="outline-none rounded-full focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {logo}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
