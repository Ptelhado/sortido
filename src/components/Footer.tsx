import { useLang } from "@/context/LanguageContext";
import { footerData, ctaLinks } from "@/data/content";

export default function Footer() {
  const { lang, t } = useLang();

  const contact = lang === "pt" ? footerData.contactPT : footerData.contactEN;
  const address = lang === "pt" ? footerData.addressPT : footerData.addressEN;
  const hours = lang === "pt" ? footerData.hoursPT : footerData.hoursEN;

  const sectionLinks = [
    {
      label: t.footerHome,
      href: "#hero",
      external: false,
    },
    {
      label: t.footerDeals,
      href: "#new-top-section",
      external: false,
    },
    {
      label: t.footerAboutUs,
      href: ctaLinks.about,
      external: true,
    },
  ];

  const legalLinks = [
    {
      label: lang === "pt" ? "Termos & Condições" : "Terms & Conditions",
      href: "/termos",
      external: false,
    },
    {
      label: lang === "pt" ? "Política de Privacidade" : "Privacy Policy",
      href: "/privacidade",
      external: false,
    },
    {
      label: lang === "pt" ? "Política de Cookies" : "Cookie Policy",
      href: "/cookies",
      external: false,
    },
    {
      label:
        lang === "pt"
          ? "Livro de Reclamações"
          : "Complaints Book",
      href: "https://www.livroreclamacoes.pt/",
      external: true,
    },
  ];

  return (
    <footer className="w-full bg-[#0A1628] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-2xl font-extrabold tracking-tight text-[#E63946]">
              Sortido
            </span>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footerTagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              {t.footerSections}
            </h4>

            <ul className="space-y-2.5">
              {sectionLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              {contact.title}
            </h4>

            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            <h4 className="mb-3 mt-8 text-sm font-bold uppercase tracking-wider text-white/40">
              {hours.title}
            </h4>

            <div className="space-y-1 text-sm text-white/60">
              <p>{hours.line1}</p>
              <p>{hours.line2}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              {address.title}
            </h4>

            <p className="text-sm leading-relaxed text-white/60">
              {address.line1}
              <br />
              {address.line2}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Sortido. {t.footerRights}
            </p>

            <nav
              aria-label={lang === "pt" ? "Ligações legais" : "Legal links"}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
            >
              {legalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-xs text-white/45 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
