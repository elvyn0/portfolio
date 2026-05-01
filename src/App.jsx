import Headers from "./Components/Headers";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const ProfileLayout = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:max-w-90 md:h-screen md:sticky md:mr-10 md:ml-20 md:top-2">
          <Hero />
        </div>

        {/* RIGHT */}
        <div className="flex-1 p-5 flex justify-center items-center mt-8 md:mt-9">
          <div className="w-full max-w-3xl space-y-10 md:space-y-16">
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skill />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="bg-black flex flex-col items-center justify-center p-5">
      <Headers />
      <ProfileLayout />
    </div>
  );
}

export default App;
