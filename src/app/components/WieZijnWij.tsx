import { PoppetjeAn, PoppetjeLies } from "./Poppetjes";

export default function WieZijnWij() {
  return (
    <section className="bg-[#FFF8F0] py-24 px-6" id="wie-zijn-wij">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <PoppetjeAn size={60} />
            <h2
              className="text-[#C0392B] leading-none"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
              }}
            >
              Wie zijn wij?
            </h2>
            <PoppetjeLies size={60} />
          </div>
          <p
            className="text-[#5A2A20] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Annemieke en Elise vormen het enthousiaste theaterduo An&amp;Lies.
            Samen brengen zij theater direct naar de klas.
          </p>
        </div>

        {/* Bio cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Annemieke */}
          <div className="relative">
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-3xl"
              style={{ background: "#E91E8C", opacity: 0.15 }}
            />
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FFD6EC]">
              <div className="h-56 overflow-hidden bg-[#FFD6EC]">
                <img
                  src="/images/bedrijven-02.webp"
                  alt="Annemieke Buijs"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ background: "linear-gradient(to bottom, #C0392B, #E91E8C)" }}
                  />
                  <div>
                    <h3
                      className="text-[#C0392B] font-black text-2xl leading-none"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Annemieke Buijs
                    </h3>
                    <p
                      className="text-[#8B1A10] text-sm font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Eigenaar / acteur / (drama)docent
                    </p>
                  </div>
                </div>
                <p
                  className="text-[#3A1A0A] leading-relaxed mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Wie ben ik? Dat vraag ik me ook weleens af. Dramadocent,
                  trainingsacteur, ondernemer — of toch Madeleine Bookstore, het
                  typetje dat geen blad voor de mond neemt? Ik ben het waarschijnlijk
                  allemaal. En precies daarom vind ik toneelspelen zo heerlijk: lekker
                  transformeren in iemand die toch al een beetje in je zit.
                </p>
                <p
                  className="text-[#3A1A0A] leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Drie jaar geleden richtte ik AAA op met één doel: zoveel mogelijk
                  mensen laten genieten van de energie die theater met zich meebrengt.
                  Samen met Elise maak ik op maat gemaakte voorstellingen, dramalessen
                  en sociale vaardigheidstrainingen — voor scholen, buurthuizen,
                  familiefestivals en bedrijven. U vraagt, wij maken.
                </p>
                <a
                  href="https://www.linkedin.com/in/annemieke-buijs-a13b3517/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-[#C0392B] font-semibold hover:text-[#8B1A10] transition-colors text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn profiel
                </a>
              </div>
            </div>
          </div>

          {/* Elise */}
          <div className="relative">
            <div
              className="absolute -top-3 -right-3 w-full h-full rounded-3xl"
              style={{ background: "#F9D71C", opacity: 0.2 }}
            />
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-[#FFF5A0]">
              <div
                className="h-56 overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FFF5A0 0%, #FFD6EC 100%)" }}
              >
                <img
                  src="/images/anlies-duo.webp"
                  alt="Annemieke en Elise als theaterduo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ background: "linear-gradient(to bottom, #E91E8C, #F9D71C)" }}
                  />
                  <div>
                    <h3
                      className="text-[#C0392B] font-black text-2xl leading-none"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Elise Fernandez
                    </h3>
                    <p
                      className="text-[#8B1A10] text-sm font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Acteur / clown / theaterdocent
                    </p>
                  </div>
                </div>
                <p
                  className="text-[#3A1A0A] leading-relaxed mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Al vanaf dat ik een klein meisje was hield ik van toneelspelen.
                  Na een reis door Australië heb ik de knoop doorgehakt en mijn
                  acteursschool succesvol afgerond. Ik maak en speel interactieve
                  kindervoorstellingen op locatie, en ben contact-clown voor mensen
                  met dementie en een beperking.
                </p>
                <p
                  className="text-[#3A1A0A] leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ervaring bij o.a. Postiljon Theater, Tof Toneel, MEMO Peuter Theater
                  en de Medi-clowns. Opgeleid aan de acteursschool, kleinkunst bij
                  Thopss en clownsopleiding (School voor Clown &amp; Leven).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Duo statement */}
        <div
          className="mt-14 rounded-3xl p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #C0392B 0%, #8B1A10 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
            <div className="absolute top-4 left-8"><PoppetjeAn size={80} /></div>
            <div className="absolute bottom-4 right-8"><PoppetjeLies size={80} /></div>
          </div>
          <p
            className="text-white text-xl font-medium leading-relaxed max-w-2xl mx-auto relative z-10"
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}
          >
            "Aan de basis staan An &amp; Lies — wij gaan samenwerkingen aan met
            spelers uit verschillende disciplines, afhankelijk van wat nodig is
            voor de les of voorstelling."
          </p>
        </div>
      </div>
    </section>
  );
}
