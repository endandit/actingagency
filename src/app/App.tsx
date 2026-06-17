import { useRef } from "react";
import { Toaster } from "sonner";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WieZijnWij from "./components/WieZijnWij";
import WatDoenWe from "./components/WatDoenWe";
import NuInHetTheater from "./components/NuInHetTheater";
import Tarieven from "./components/Tarieven";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const servicesRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToServices = () => {
    const el = document.getElementById("diensten");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Toaster position="top-center" richColors />
      <Nav onScrollToServices={scrollToServices} onScrollToContact={scrollToContact} />
      <main>
        <Hero onScrollToServices={scrollToServices} onScrollToContact={scrollToContact} />
        <WieZijnWij />
        <WatDoenWe />
        <NuInHetTheater onScrollToContact={scrollToContact} />
        <Tarieven onScrollToContact={scrollToContact} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
