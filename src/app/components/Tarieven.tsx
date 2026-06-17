const TARIEVEN = [
  {
    titel: "Voorstelling",
    prijs: "€1.500",
    detail: "per voorstelling",
    beschrijving: "Een voorstelling bij u op locatie, afgestemd op het thema en de leeftijdsgroep. Twee voorstellingen op één dag: €2.600.",
    kleur: "#FFD6EC",
    kleurDark: "#C0392B",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    titel: "Per dagdeel",
    prijs: "€700",
    detail: "per dagdeel",
    beschrijving: "Een dagdeel dramalessen of sociale vaardigheidstraining voor een klas of groep.",
    kleur: "#C8F5C0",
    kleurDark: "#2E7D32",
    featured: true,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    titel: "Per uur",
    prijs: "€300",
    detail: "per uur",
    beschrijving: "Losse les of training per uur. Ideaal voor een kennismaking of korte interventie.",
    kleur: "#C8E4FF",
    kleurDark: "#1565C0",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
] as const;

interface TarievenProps {
  onScrollToContact: () => void;
}

export default function Tarieven({ onScrollToContact }: TarievenProps) {
  return (
    <section className="bg-[#FFF8F0] py-24 px-6" id="tarieven">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[#C0392B] mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
            }}
          >
            Tarieven
          </h2>
          <p
            className="text-[#5A2A20] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Transparante prijzen voor elke situatie. Neem contact op voor een offerte op maat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIEVEN.map((t) => (
            <div
              key={t.titel}
              className={`relative rounded-3xl overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl ${
                "featured" in t && t.featured ? "ring-4 ring-[#C0392B] ring-offset-2" : ""
              }`}
            >
              {"featured" in t && t.featured && (
                <div
                  className="text-center py-2 text-white text-xs font-bold tracking-widest uppercase"
                  style={{ background: "#C0392B", fontFamily: "Poppins, sans-serif" }}
                >
                  ★ Meest gevraagd ★
                </div>
              )}
              <div
                className="p-8 h-full flex flex-col"
                style={{ background: t.kleur + "60" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                  style={{ background: t.kleur, color: t.kleurDark }}
                >
                  {t.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", color: t.kleurDark }}
                >
                  {t.titel}
                </h3>
                <div className="mb-4">
                  <span
                    className="font-black leading-none"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2.2rem",
                      color: "#1A0A00",
                    }}
                  >
                    {t.prijs}
                  </span>
                  <span
                    className="text-[#5A2A20] text-sm ml-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.detail}
                  </span>
                </div>
                <p
                  className="text-[#3A1A0A] leading-relaxed text-sm flex-grow"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {t.beschrijving}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p
            className="text-[#5A2A20] mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Wilt u een offerte op maat of meer informatie? Neem gerust contact op.
          </p>
          <button
            onClick={onScrollToContact}
            className="px-8 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(135deg, #C0392B, #E53935)",
              boxShadow: "0 4px 20px rgba(192,57,43,0.35)",
            }}
          >
            Vraag een offerte aan
          </button>
        </div>
      </div>
    </section>
  );
}
