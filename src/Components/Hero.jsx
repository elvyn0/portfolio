import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "./Animations";

function Hero() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="show">
      <div className="w-full md:pt-16 flex justify-center md:justify-start">
        <div className="flex flex-col gap-6 bg-white w-full max-w-sm md:max-w-xs p-5 rounded-2xl shadow-md items-center text-center">
          {/* Intro */}
          <div>
            <p className="text-xs sm:text-sm text-gray-400 font-semibold mb-1">Hi, I'm</p>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Anoop</h1>
          </div>

          {/* Role + Tagline */}
          <div className="flex flex-col gap-3">
            <p className="text-lg sm:text-xl font-semibold text-gray-800">Full Stack Developer</p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              I build and deploy full stack applications designed for real-world use.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/anoop0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <CiLinkedin className="text-blue-700 text-2xl sm:text-3xl" />
            </a>

            <a
              href="https://github.com/elvyn0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FaGithub className="text-black text-2xl sm:text-3xl" />
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <ArrowRight className="size-5 text-red-500" />
            <button className="bg-black text-white py-2 px-5 rounded-full font-semibold hover:bg-gray-800 transition">
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
