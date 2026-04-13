import { heroPartnerCtas } from "@/data/content";

<div className="mt-10 flex flex-wrap items-start justify-center gap-6">
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
          <span className="mt-2 text-xs font-semibold tracking-wide text-slate-500">
            Em breve
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
      >
        {logo}
      </a>
    );
  })}
</div>
