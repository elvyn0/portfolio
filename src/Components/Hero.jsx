import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="md:pt-18">
      <div className="flex flex-col gap-5 bg-white w-fit py-5 px-3 h-fit   pb-2 items-center justify-center rounded-2xl">
        <div className="flex flex-col text-center">
          <p className="text-sm text-gray-400 font-semibold mb-0 -ml-47">Hi, I'm</p>
          <h1 className="font-bold text-5xl">Anoop</h1>
        </div>

        <div className="flex flex-col  items-center justify-center text-center gap-5">
          <div>
            <p className="mb-5 text-2xl font-bold">Full Stack Developer</p>
            <p className="text-gray-500 font-semibold">
              I build and deploy scalable full-stack applications that solve real-world problems.
            </p>
          </div>
          <div className="flex  gap-3">
            <a href="https://www.linkedin.com/in/anoop0" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="size-10 text-blue-900 hover:bg-gray-200 p-1 cursor-pointer rounded-lg transition" />
            </a>

            <a href="https://github.com/elvyn0" target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-10 text-black hover:bg-gray-200 p-1 cursor-pointer rounded-lg transition" />
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <ArrowRight className="size-6 text-red-500" />
            <button className="bg-black text-white py-3 px-6 rounded-full font-black cursor-pointer">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
