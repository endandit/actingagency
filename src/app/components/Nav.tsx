import { useState, useEffect } from "react";
import { PoppetjeAn, PoppetjeLies } from "./Poppetjes";

interface NavProps {
  onScrollToServices: () => void;
  onScrollToContact: () => void;
}

export default function Nav({ onScrollToServices, onScrollToContact }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 group"
          aria-label="Annemieke's Acting Agency - naar boven"
        >
          <PoppetjeAn size={52} className="group-hover:scale-105 transition-transform duration-200" />
          <div className="flex flex-col items-center leading-none">
            <span
              className="text-[#C0392B] font-black tracking-tight leading-none"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              Annemieke's
            </span>
            <span
              className="text-[#8B1A10] font-medium tracking-widest uppercase"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em" }}
            >
              Acting Agency
            </span>
          </div>
          <PoppetjeLies size={52} className="group-hover:scale-105 transition-transform duration-200" />
        </button>

        {/* Nav icons */}
        <div className="flex items-center gap-6">
          <button
            onClick={onScrollToServices}
            className="flex flex-col items-center gap-1 text-[#C0392B] hover:text-[#8B1A10] transition-colors group"
            aria-label="Naar onze diensten"
          >
            <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
              <path
                d="M10 8 L10 52 L50 52 L50 20 L38 8 Z M38 8 L38 20 L50 20"
                stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <line x1="18" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <line x1="18" y1="40" x2="36" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              Diensten
            </span>
          </button>

          <button
            onClick={onScrollToContact}
            className="flex flex-col items-center gap-1 text-[#C0392B] hover:text-[#8B1A10] transition-colors group"
            aria-label="Naar contact"
          >
            <svg width="28" height="28" viewBox="0 0 75 75" fill="none">
              <path
                d="M14 16 C14 16 18 12 22 14 L30 22 C32 24 32 28 30 30 L26 34 C28 40 36 46 42 48 L46 44 C48 42 52 42 54 44 L62 52 C64 56 60 60 60 60 C40 70 6 38 14 16 Z"
                stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              Contact
            </span>
          </button>
        </div>
      </div>

      {/* Red underline accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#C0392B] via-[#E91E8C] to-[#F9D71C]" />
    </nav>
  );
}
