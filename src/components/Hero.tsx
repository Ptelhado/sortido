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
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center text-center">

  {/* Headline */}
  <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
    {t.heroHeadline}
  </h1>

  {/* 24/7 (moved here + emphasized) */}
  <p className="mt-4 text-base font-bold text-white sm:text-lg tracking-wide">
    {t.heroSubtitleLine2}
  </p>

  {/* Icons (more spacing from 24/7) */}
  <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-8">
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

  {/* Supporting line (kept below icons) */}
  <p className="mt-6 text-sm text-slate-200/80 sm:text-base">
    {t.heroSubtitleLine1}
  </p>

</div>
        
          {/* Supporting Message (Now tied to action) */}
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="text-sm text-slate-200/80 sm:text-base">
              {t.heroSubtitleLine1}
            </p>

            <p className="text-base font-bold text-white sm:text-lg tracking-wide">
              {t.heroSubtitleLine2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
