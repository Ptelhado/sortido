import { useLang } from "@/context/LanguageContext";
import { ctaLinks } from "@/data/content";

export default function Header() {
  const { lang, toggleLang, t } = useLang();

  const isMobile =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const mapsAppLink =
    "comgooglemaps://?daddr=YOUR_LAT,YOUR_LNG&directionsmode=driving";

  const aboutLink = isMobile ? mapsAppLink : ctaLinks.about;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#FF0000] text-white shadow-sm shadow-slate-900/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/sortido_logo.svg"
            alt="Sortido logo"
            className="h-28 w-auto"
          />
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            aria-label="Toggle language"
          >
            <span className={lang === "pt" ? "font-bold" : "text-white/70"}>
              PT
            </span>
            <span className="text-white/50">/</span>
            <span className={lang === "en" ? "font-bold" : "text-white/70"}>
              EN
            </span>
          </button>

          <a
            href={aboutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FF0000] shadow-md shadow-slate-900/20 transition-all hover:bg-slate-100 sm:px-5"
          >
            {t.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}
