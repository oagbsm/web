import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import CompanyStrip from "../src/components/CompanyStrip";
import About from "../src/components/About";
import Website from "../src/components/Website";
import App from "../src/components/App";
import CaseStudies from "../src/components/CaseStudies";
import C2 from "../src/components/C2";
import Bespoke from "../src/components/Bespoke";
import ContactSection from "../src/components/Contact";
import Industries from "../src/components/Industries";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />

      <div className="flex-1">
        <section id="top">
          <HeroSection />
        </section>

        <section id="websites">
          <Website />
        </section>

        <section id="apps">
          <App />
        </section>

        <section id="case-studies">
          <CaseStudies />
        </section>

        <section>
          <C2 />
        </section>
              <section id="industries" className="w-full">
          <Industries />
        </section>
        <section>
          <Bespoke />
        </section>
  
              <section id ="about">
          <About />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>

    </main>
  );
}