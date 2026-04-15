import { useLang } from "@/context/LanguageContext";
import { heroImage, heroPartnerCtas } from "@/data/content";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A1628]">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sortido hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col items-center justify-center text-center">

          {/* Headline */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.heroHeadline}
          </h1>

          {/* 24/7 (more breathing room) */}
          <p className="mt-5 text-base font-bold tracking-wide text-white sm:text-lg">
            {t.heroSubtitleLine2}
          </p>

          {/* Icons (increased spacing from subtitle) */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {heroPartnerCtas.map((partner) => {
              const href =
                partner.id === "bolt"
                  ? "https://food.bolt.eu/pt-pt/386-lisbon/p/186270-sortido/"
                  : partner.href;

              return (
                <a
                  key={partner.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.alt}
                  className="group rounded-xl p-2 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <img
                    src={partner.logoSrc}
                    alt={partner.alt}
                    className={[
                      "h-14 w-auto object-contain transition-transform duration-200",
                      partner.logoWidthClass ?? "max-w-[100px]",
                      "group-hover:scale-105",
                    ].join(" ")}
                    draggable={false}
                  />
                </a>
              );
            })}
          </div>

          {/* Supporting message */}
          <p className="mt-6 text-sm text-slate-200/80 sm:text-base">
            {t.heroSubtitleLine1}
          </p>

        </div>
      </div>
    </section>
  );
}
