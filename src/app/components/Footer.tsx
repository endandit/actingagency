import { PoppetjeAn, PoppetjeLies } from "./Poppetjes";

export default function Footer() {
  return (
    <footer style={{ background: "#1A0A00" }}>
      {/* Red band at top */}
      <div className="h-1.5" style={{ background: "linear-gradient(to right, #C0392B, #E91E8C, #F9D71C, #E91E8C, #C0392B)" }} />

      <div className="max-w-6xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <PoppetjeAn size={44} />
              <div>
                <p
                  className="text-white font-black leading-none"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.4rem" }}
                >
                  Annemieke's
                </p>
                <p
                  className="text-white/50 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Acting Agency
                </p>
              </div>
              <PoppetjeLies size={44} />
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Theater voor scholen, kinderen en bedrijven — met An&amp;Lies en meer.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#F9D71C] font-bold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+31622375622"
                className="text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                06 22 37 56 22
              </a>
              <a
                href="mailto:annemieke@actingagency.nl"
                className="text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                annemieke@actingagency.nl
              </a>
              <a
                href="https://www.actingagency.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                www.actingagency.nl
              </a>
              <a
                href="https://www.linkedin.com/in/annemieke-buijs-a13b3517/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h4
              className="text-[#F9D71C] font-bold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Navigatie
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#wie-zijn-wij", label: "Wie zijn wij" },
                { href: "#diensten", label: "Wat doen wij" },
                { href: "#voorstelling", label: "Huidige voorstelling" },
                { href: "#tarieven", label: "Tarieven" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white/70 hover:text-[#E91E8C] transition-colors text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            © {new Date().getFullYear()} Annemieke's Acting Agency. Alle rechten voorbehouden.
          </p>
          <a
            href="https://endandit.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 text-xs hover:text-white/40 transition-colors"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            website gebouwd door Edd van endandit.nl
          </a>
        </div>
      </div>
    </footer>
  );
}
