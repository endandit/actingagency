import { PoppetjeAn, PoppetjeLies } from "./Poppetjes";

interface HeroProps {
  onScrollToServices: () => void;
  onScrollToContact: () => void;
}

export default function Hero({ onScrollToServices, onScrollToContact }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "88px" }}
    >
      {/* Background curtain */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-curtain.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="flex flex-col gap-6">
            {/* Presenteert badge */}
            <div className="flex flex-col gap-2">
              <span
                className="text-white/70 text-sm font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Annemieke's Acting Agency presenteert
              </span>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#F9D71C] bg-[#F9D71C]/15 backdrop-blur-sm w-fit">
                <PoppetjeAn size={28} />
                <span
                  className="text-[#F9D71C] font-black tracking-tight"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem" }}
                >
                  An&amp;Lies
                </span>
                <PoppetjeLies size={28} />
              </div>
            </div>

            {/* Main headline */}
            <h1
              className="text-white leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              Wij brengen{" "}
              <span className="text-[#F9D71C]">theater</span>
              <br />
              naar <span className="text-[#E91E8C]">úw school</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-white/85 text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Annemieke Buijs en Elise Fernandez vormen het enthousiaste theaterduo
              An&amp;Lies. Wij maken en spelen voorstellingen op maat,
              verzorgen dramalessen en sociale vaardigheidstrainingen — direct bij
              u op school.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Voorstellingen op maat", color: "bg-[#E91E8C]/20 border-[#E91E8C] text-[#FFB3DF]" },
                { label: "Dramalessen", color: "bg-[#F9D71C]/20 border-[#F9D71C] text-[#FFF5A0]" },
                { label: "Sociale vaardigheden", color: "bg-[#C0392B]/20 border-[#C0392B] text-[#FFB0A0]" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full border text-sm font-medium backdrop-blur-sm ${color}`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onScrollToServices}
                className="px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #C0392B 0%, #E53935 100%)",
                  boxShadow: "0 4px 20px rgba(192, 57, 43, 0.5)",
                }}
              >
                Wat doen wij?
              </button>
              <button
                onClick={onScrollToContact}
                className="px-7 py-3.5 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-[#C0392B] transition-all duration-200 backdrop-blur-sm hover:scale-105 active:scale-95"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Neem contact op
              </button>
            </div>

            {/* Sub-brand note */}
            <p
              className="text-white/50 text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Onderdeel van Annemieke's Acting Agency
            </p>
          </div>

          {/* Photo side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative colored border behind */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
                style={{ background: "linear-gradient(135deg, #F9D71C, #E91E8C)" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "linear-gradient(135deg, #C0392B, #E91E8C)" }}
              />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/anlies-duo.webp"
                  alt="Annemieke en Elise spelen theater voor kinderen"
                  className="w-full max-w-sm lg:max-w-md object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                  <p
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    An &amp; Lies
                  </p>
                  <p
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Annemieke Buijs &amp; Elise Fernandez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-9 rounded-full border-2 border-white/50 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
