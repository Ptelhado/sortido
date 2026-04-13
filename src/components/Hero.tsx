import { useLang } from "@/context/LanguageContext";
import { ctaLinks, heroImage, heroPartnerCtas } from "@/data/content";

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

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200/80">
            {t.heroSubtitle}
          </p>

          <div className="mx-auto mt-2 flex w-full max-w-3xl flex-wrap items-start justify-center gap-4">
            {/* Encomendar image button */}
            
              href={ctaLinks.order}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full"
            >
              <img
                src="https://raw.githubusercontent.com/Ptelhado/sortido/main/public/uber-eats.png"
                alt="Encomendar"
                className="h-14 w-auto object-contain"
                draggable={false}
              />
            </a>

            {heroPartnerCtas.map((partner) => {
              const logoButton = (
                <div className="flex flex-col items-center">
                  <div
                    className={[
                      "flex h-14 min-w-[148px] items-center justify-center rounded-full px-5",
                      "border border-white/15 bg-white/10 backdrop-blur-md",
                      "shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition",
                      partner.comingSoon
                        ? "cursor-default opacity-80"
                        : "hover:bg-white/16 hover:border-white/25",
                    ].join(" ")}
                  >
                    <img
                      src={partner.logoSrc}
                      alt={partner.alt}
                      className={[
                        "block h-auto max-h-8 w-auto object-contain",
                        partner.logoWidthClass ?? "max-w-[100px]",
                      ].join(" ")}
                      draggable={false}
                    />
                  </div>

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
                    {logoButton}
                  </div>
                );
              }

              return (
                
                  key={partner.id}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.alt}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full"
                >
                  {logoButton}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
