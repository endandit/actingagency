import { useState } from "react";

const SECTIONS = [
  {
    id: "voorstellingen",
    label: "Voorstellingen",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: "#FFD6EC",
    accentDark: "#C0392B",
    title: "Voorstellingen op maat",
    body: "Op verzoek maken wij een voorstelling die aansluit bij de doelgroep, het thema, een jaarafsluiting of een andere speciale gebeurtenis — gespeeld bij u op locatie.",
    extra: "Samenwerking met kunstenaars uit verschillende disciplines zorgt voor een rijke theaterbeleving, volledig afgestemd op de vraag van de opdrachtgever.",
    image: "/images/maakruimte.webp",
    imageAlt: "Theatervoorstelling op maat",
  },
  {
    id: "dramalessen",
    label: "Dramalessen",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    accent: "#C8F5C0",
    accentDark: "#2E7D32",
    title: "Dramalessen op maat",
    body: "Een cursus als naschoolse activiteit, een blok dramalessen tijdens schooltijd, hulp bij de einduitvoering of samen met de kids toewerken naar een voorstelling? De lessen worden in overleg afgestemd — alles is mogelijk!",
    extra: "Geschikt voor alle leeftijdsgroepen in het (speciaal) basisonderwijs. Elk kind groeit op zijn eigen tempo en straalt op het podium.",
    image: "/images/school-01.webp",
    imageAlt: "Dramales voor kinderen",
  },
  {
    id: "vaardigheden",
    label: "Vaardigheden",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#C8E4FF",
    accentDark: "#1565C0",
    title: "Sociale vaardigheidstraining",
    body: "Als uitgangspunt gebruiken we de methode van de school en belichten daar een thema uit — vanuit theatertechnieken. De kinderen leren spelenderwijs communiceren, grenzen stellen, conflicten oplossen en inlevingsvermogen ontwikkelen. Een hoop lol is daarbij inbegrepen!",
    extra: "Ook uitermate geschikt voor buurthuizen, familiefestivals en andere locaties waar activiteiten voor kinderen en families worden georganiseerd.",
    image: "/images/school-02.webp",
    imageAlt: "Sociale vaardigheidstraining",
  },
] as const;

type SectionId = typeof SECTIONS[number]["id"];

export default function WatDoenWe() {
  const [active, setActive] = useState<SectionId>("voorstellingen");
  const section = SECTIONS.find((s) => s.id === active)!;

  return (
    <section className="py-24 px-6 bg-white" id="diensten">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-[#C0392B] mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
            }}
          >
            Wat doen wij?
          </h2>
          <p
            className="text-[#5A2A20] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Theater als middel voor groei, verbinding en plezier.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border-2 hover:scale-105 active:scale-95 ${
                active === s.id
                  ? "text-white border-transparent shadow-lg"
                  : "bg-white border-current hover:border-[#C0392B]"
              }`}
              style={{
                fontFamily: "Poppins, sans-serif",
                background:
                  active === s.id
                    ? `linear-gradient(135deg, #C0392B, #E53935)`
                    : undefined,
                color: active === s.id ? "white" : "#C0392B",
                boxShadow: active === s.id ? "0 4px 16px rgba(192,57,43,0.35)" : undefined,
              }}
            >
              <span style={{ color: active === s.id ? "white" : "#C0392B" }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300"
          style={{ borderTop: `4px solid ${section.accentDark}` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <div
              className="p-10 flex flex-col justify-center"
              style={{ background: section.accent + "50" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ background: section.accent, color: section.accentDark }}
              >
                {section.icon}
              </div>
              <h3
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: section.accentDark,
                }}
              >
                {section.title}
              </h3>
              <p
                className="text-[#3A1A0A] leading-relaxed mb-4 text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {section.body}
              </p>
              <p
                className="text-[#5A2A20] leading-relaxed text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {section.extra}
              </p>
            </div>

            {/* Image */}
            <div className="relative min-h-72 lg:min-h-0 overflow-hidden">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(to left, transparent, ${section.accent})` }}
              />
            </div>
          </div>
        </div>

        {/* LinkedIn note */}
        <p
          className="text-center mt-8 text-[#8B4040] text-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Bekijk ook onze individuele activiteiten op{" "}
          <a
            href="https://www.linkedin.com/in/annemieke-buijs-a13b3517/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C0392B] font-semibold underline hover:text-[#8B1A10]"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
