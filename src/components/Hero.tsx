import { useLang } from "@/context/LanguageContext";
import { heroImage, heroPartnerCtas } from "@/data/content";

export default function Hero() {
  const { t, lang } = useLang();

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
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center gap-6 text-center">
          
          {/* Headline */}
          <h1 className="whitespace-pre-line text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.heroHeadline}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl whitespace-pre-line text-lg leading-8 text-slate-200/80">
            {t.heroSubtitle}
          </p>

          {/* Partner CTAs */}
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-6">
            {heroPartnerCtas.map((partner) => {
              const spacingClass =
                partner.id === "uber-eats"
                  ? "mr-[5px]"
                  : partner.id === "bolt"
                  ? "ml-[5px]"
                  : "";

              // Force Bolt to always have URL
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
                  className={`group flex flex-col items-center ${spacingClass} outline-none`}
                >
                  {/* Logo */}
                  <img
                    src={partner.logoSrc}
                    alt={partner.alt}
                    className={[
                      "block h-14 w-auto object-contain transition-transform duration-200",
                      partner.logoWidthClass ?? "max-w-[100px]",
                      "group-hover:scale-105",
                    ].join(" ")}
                    draggable={false}
                  />

                  {/* CTA Label (NEW - improves CTR) */}
                  <span className="mt-2 text-xs font-semibold tracking-wide text-white/90 opacity-80 group-hover:opacity-100">
                    {lang === "pt"
                      ? partner.id === "uber-eats"
                        ? "Pedir no Uber"
                        : partner.id === "glovo"
                        ? "Abrir na Glovo"
                        : "Pedir no Bolt"
                      : partner.id === "uber-eats"
                      ? "Order on Uber"
                      : partner.id === "glovo"
                      ? "Open in Glovo"
                      : "Order on Bolt"}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
