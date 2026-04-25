import Headers from "./Components/Headers";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Skill from "./Components/Skill";

function App() {
  return (
    <div className="bg-black w-screen h-screen p-5 ">
      <Headers />
      <Hero />
      <Home />
      <Skill />
    </div>
  );
}

export default App;
