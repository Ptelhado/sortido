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

            
              href={ctaLinks.order}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full"
            >
