import { useLang } from "@/context/LanguageContext";
import { ctaLinks, heroImage } from "@/data/content";

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
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl whitespace-pre-line">
            {t.heroHeadline}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200/80">
            {t.heroSubtitle}
          </p>

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={ctaLinks.order}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#E63946] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#d32f3b]"
            >
              {t.ctaOrder}
            </a>
            <a
              href={ctaLinks.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white transition hover:bg-white/20"
            >
              {t.ctaUberEats}
            </a>
            <a
              href={ctaLinks.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white transition hover:bg-white/20"
            >
              {t.ctaGlovo}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
