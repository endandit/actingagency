import { useState } from "react";
import { toast } from "sonner";
import QRCode from "react-qr-code";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const INTERESSES = [
  "Voorstelling op school",
  "Dramalessen",
  "Sociale vaardigheidstraining",
  "Bedrijfstraining",
  "Overig / kennismaking",
];

const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Annemieke Buijs
ORG:Annemieke's Acting Agency / An&Lies
TEL:+31622375622
EMAIL:annemieke@actingagency.nl
URL:www.actingagency.nl
END:VCARD`;

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interesse, setInteresse] = useState(INTERESSES[0]);
  const [bericht, setBericht] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { toast.error("Vul uw naam in"); return; }
    if (!email.trim()) { toast.error("Vul uw e-mailadres in"); return; }

    setSubmitting(true);
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7ad3da34/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), interest: interesse, message: bericht.trim() }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Bedankt! We nemen zo snel mogelijk contact met u op.");
        setName(""); setPhone(""); setEmail(""); setBericht("");
        setInteresse(INTERESSES[0]);
      } else {
        toast.error(data.error || "Er ging iets mis. Probeer het opnieuw.");
      }
    } catch {
      toast.error("Er ging iets mis. Probeer het opnieuw of bel ons direct.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact" data-name="section/contact">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-curtain.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A0200]/82" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}
          >
            Contact
          </h2>
          <p className="text-white/70 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
            Nieuwsgierig? Laat het ons weten!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h3
              className="text-white font-bold text-xl mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Stuur een bericht
            </h3>
            <p
              className="text-white/60 text-sm mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ik heb interesse in:
            </p>

            {/* Interest dropdown */}
            <div className="mb-5">
              <select
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
                className="w-full bg-white/15 text-white border border-white/30 rounded-xl px-4 py-3 outline-none focus:border-[#F9D71C] transition-colors cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {INTERESSES.map((opt) => (
                  <option key={opt} value={opt} className="text-black bg-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Name + phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1 tracking-wide uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Naam *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Uw naam"
                  required
                  className="w-full bg-white/15 text-white border border-white/30 rounded-xl px-4 py-3 outline-none focus:border-[#F9D71C] transition-colors placeholder:text-white/40"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1 tracking-wide uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Telefoon
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+31 6"
                  className="w-full bg-white/15 text-white border border-white/30 rounded-xl px-4 py-3 outline-none focus:border-[#F9D71C] transition-colors placeholder:text-white/40"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-white/60 text-xs font-medium mb-1 tracking-wide uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
                E-mail *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="uw@email.nl"
                required
                className="w-full bg-white/15 text-white border border-white/30 rounded-xl px-4 py-3 outline-none focus:border-[#F9D71C] transition-colors placeholder:text-white/40"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-white/60 text-xs font-medium mb-1 tracking-wide uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
                Bericht (optioneel)
              </label>
              <textarea
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                placeholder="Vertel kort wat u zoekt..."
                rows={4}
                className="w-full bg-white/15 text-white border border-white/30 rounded-xl px-4 py-3 outline-none focus:border-[#F9D71C] transition-colors placeholder:text-white/40 resize-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(135deg, #C0392B, #E53935)",
                boxShadow: "0 4px 20px rgba(192,57,43,0.4)",
              }}
            >
              {submitting ? "Versturen..." : "Verstuur bericht →"}
            </button>
          </form>

          {/* Info + QR */}
          <div className="flex flex-col gap-6">
            {/* Direct contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <h3
                className="text-white font-bold text-lg mb-5"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Direct contact
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+31622375622"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(249,135,207,0.25)" }}>
                    <svg width="22" height="22" viewBox="0 0 75 75" fill="none">
                      <path d="M14 16 C14 16 18 12 22 14 L30 22 C32 24 32 28 30 30 L26 34 C28 40 36 46 42 48 L46 44 C48 42 52 42 54 44 L62 52 C64 56 60 60 60 60 C40 70 6 38 14 16 Z" stroke="#F987CF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>Telefoon</p>
                    <p className="text-[#F987CF] font-bold text-lg group-hover:text-white transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      06 22 37 56 22
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:annemieke@actingagency.nl"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(59,130,246,0.2)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>E-mail</p>
                    <p className="text-[#60A5FA] font-semibold group-hover:text-white transition-colors text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      annemieke@<br />actingagency.nl
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/annemieke-buijs-a13b3517/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(148,215,81,0.2)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#94D751">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>LinkedIn</p>
                    <p className="text-[#94D751] font-semibold group-hover:text-white transition-colors text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Annemieke Buijs
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* QR code */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col items-center gap-4">
              <p
                className="text-white font-bold text-center"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Scan &amp; sla op
              </p>
              <div className="bg-white p-3 rounded-2xl shadow-lg">
                <QRCode value={vCardData} size={140} fgColor="#C0392B" bgColor="#ffffff" />
              </div>
              <p
                className="text-white/50 text-xs text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Scan om contactgegevens op te slaan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
