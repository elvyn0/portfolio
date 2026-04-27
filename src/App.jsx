import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";

function App() {
  return (
    <div className="bg-black  p-5 ">
      <Headers />

      <Home />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
