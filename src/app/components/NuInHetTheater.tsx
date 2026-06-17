import { useState, useEffect, useCallback } from "react";

interface Voorstelling {
  titel: string;
  ondertitel: string;
  leeftijd: string;
  beschrijving: string;
  posterSrc: string;
}

const voorstellingen: Voorstelling[] = [
  {
    titel: "Niets is wat het lijkt",
    ondertitel: "Een vrolijk sprookje vol vooroordelen",
    leeftijd: "6+",
    beschrijving:
      "Aladdin heeft het duurste vliegende tapijt van de wereld. Op een dag wordt het gestolen. Dat heeft vast de wolf gedaan... Een spannende zoektocht naar de dader volgt waarin niets is wat het lijkt!",
    posterSrc: "/images/show-poster.webp",
  },
  {
    titel: "Maak RUIMTE!",
    ondertitel: "Een muzikale zoektocht door het heelal",
    leeftijd: "4+",
    beschrijving:
      "An&Lies zitten elkaar op aarde behoorlijk in de weg. Ze gaan op zoek naar meer ruimte en waar kan dat beter dan in het heelal. Een muzikale zoektocht volgt. In de ruimte doen ze een belangrijke ontdekking...",
    posterSrc: "/images/maakruimte.webp",
  },
  {
    titel: "Madeleine Bookstore",
    ondertitel: "Een boekenwinkel vol verhalen en avontuur",
    leeftijd: "5+",
    beschrijving:
      "In de charmante boekenwinkel van Madeleine komen verhalen tot leven. Bezoekers worden meegenomen in een wereld van verbeelding, humor en ontdekking — een interactieve beleving waarbij elk boek een nieuw avontuur onthult.",
    posterSrc: "/images/anlies-duo.webp",
  },
];

const INFO =
  "Geïnteresseerd in een voorstelling op uw school? Neem contact op om de mogelijkheden te bespreken!";

interface NuInHetTheaterProps {
  onScrollToContact: () => void;
}

export default function NuInHetTheater({ onScrollToContact }: NuInHetTheaterProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 200);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo((current + 1) % voorstellingen.length), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + voorstellingen.length) % voorstellingen.length),
    [current, goTo]
  );

  // Auto-advance every 7 seconds
  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const v = voorstellingen[current];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="voorstelling">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/content-bg.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Decorative silhouette */}
      <div className="absolute bottom-0 left-8 opacity-5 pointer-events-none">
        <svg width="200" height="320" viewBox="0 0 100 160" fill="white">
          <ellipse cx="50" cy="32" rx="22" ry="20" />
          <path d="M28 28 Q18 14 24 6" strokeWidth="5" stroke="white" fill="none" strokeLinecap="round" />
          <ellipse cx="50" cy="33" rx="18" ry="18" />
          <path d="M32 55 L10 36" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <path d="M68 55 L90 36" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <rect x="30" y="48" width="40" height="24" rx="8" />
          <path d="M24 70 L76 70 L82 100 L18 100 Z" />
          <rect x="26" y="100" width="16" height="38" rx="6" />
          <rect x="58" y="100" width="16" height="38" rx="6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "rgba(192, 57, 43, 0.3)", border: "1px solid rgba(192,57,43,0.6)" }}
          >
            <span
              className="text-[#F9D71C] text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ★ Nu te zien ★
            </span>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
            }}
          >
            Nu in het theater
          </h2>
        </div>

        {/* Carousel content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-200"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {/* Poster */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#E91E8C] opacity-30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#F9D71C] opacity-30" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={v.posterSrc}
                  alt={`Voorstelling: ${v.titel}`}
                  className="max-w-xs w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-3 py-1 rounded-full text-sm font-bold"
                style={{ background: "#E91E8C", color: "white", fontFamily: "Poppins, sans-serif" }}
              >
                {v.leeftijd}
              </span>
              <span
                className="text-white/60 text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
              >
                {v.ondertitel}
              </span>
            </div>

            <h3
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
              }}
            >
              {v.titel}
            </h3>

            <p
              className="text-white/85 leading-relaxed mb-6 text-lg"
              style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
            >
              {v.beschrijving}
            </p>

            <p
              className="text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {INFO}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onScrollToContact}
                className="px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #C0392B, #E53935)",
                  boxShadow: "0 4px 20px rgba(192,57,43,0.5)",
                }}
              >
                Boek deze voorstelling
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Op locatie", "Basisonderwijs", "Interactief", "Op maat"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/30 text-white/70"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            aria-label="Vorige voorstelling"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-150"
          >
            ‹
          </button>

          <div className="flex gap-3">
            {voorstellingen.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Voorstelling ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                style={{
                  background: i === current ? "#E91E8C" : "rgba(255,255,255,0.3)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Volgende voorstelling"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-150"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
