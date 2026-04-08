import { useLang } from "@/context/LanguageContext";
import { ctaLinks } from "@/data/content";

export default function Header() {
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-[#E63946]">
            Sortido
          </span>
        </a>

        {/* Right side: lang toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            aria-label="Toggle language"
          >
            <span
              className={
                lang === "pt" ? "text-[#E63946] font-bold" : "text-gray-400"
              }
            >
              PT
            </span>
            <span className="text-gray-300">/</span>
            <span
              className={
                lang === "en" ? "text-[#E63946] font-bold" : "text-gray-400"
              }
            >
              EN
            </span>
          </button>

          {/* Compact CTA */}
          <a
            href={ctaLinks.order}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-[#E63946] px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-[#d32f3b] hover:shadow-lg"
          >
            {t.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}