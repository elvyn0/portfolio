import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import BentoSection from "./Components/BentoSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Scene3D from "./Components/Scene3D";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-neutral-100 relative selection:bg-red-600/40 selection:text-white">
        {/* Cinematic Studio 3D Ambient Lighting & Floating Embers */}
        <Scene3D />

        {/* Quick Navigation Dock (Auto-reveals when scrolling down) */}
        <Headers />

        {/* Master Flow matching the exact reference structure */}
        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>

          <section id="projects" className="scroll-mt-12">
            <Projects />
          </section>

          <section id="process" className="scroll-mt-12">
            <BentoSection />
          </section>

          <section id="contact" className="scroll-mt-12">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
