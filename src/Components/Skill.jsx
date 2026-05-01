import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRender } from "react-icons/si";
import { LiaGit } from "react-icons/lia";
import { assets } from "../assets/assets";

const TechItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition">{icon}</div>
      <p className="text-xs sm:text-sm text-gray-400">{label}</p>
    </div>
  );
};

const TechImage = ({ src, label, className = "" }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <img src={src} className={`w-10 sm:w-12 md:w-14 transition group-hover:scale-110 ${className}`} />
      <p className="text-xs sm:text-sm text-gray-400">{label}</p>
    </div>
  );
};

function Skill() {
  return (
    <div className="text-white flex flex-col gap-5 max-w-5xl mx-auto px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-8xl font-bold">
        Tech <span className="text-neutral-600">Stack</span>
      </h1>

      {/* Reusable grid */}
      {/* FRONTEND */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-1">Frontend</p>
        <p className="text-neutral-400 text-sm mb-4">Built responsive UI and dynamic components</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
          <TechItem icon={<FaReact className="text-blue-400" />} label="React" />
          <TechItem icon={<IoLogoJavascript className="text-yellow-300" />} label="JavaScript" />
          <TechItem icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
          <TechItem icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
          <TechItem icon={<RiTailwindCssFill className="text-cyan-300" />} label="Tailwind" />
        </div>
      </div>

      {/* BACKEND */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-1">Backend</p>
        <p className="text-neutral-400 text-sm mb-4">Developed REST APIs and authentication</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
          <TechItem icon={<DiNodejs className="text-green-500 md:text-6xl" />} label="Node.js" />
          <TechItem icon={<SiExpress className="text-yellow-300 md:text-6xl" />} label="Express" />
        </div>
      </div>

      {/* DATABASE */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-1">Database</p>
        <p className="text-neutral-400 text-sm mb-4">Designed schemas for users and bookings</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
          <TechItem icon={<SiMongodb className="text-green-500" />} label="MongoDB" />
        </div>
      </div>

      {/* FAMILIAR */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-4">Familiar With</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
          <TechImage src={assets.python} label="Python" />

          <TechImage src={assets.nextjs} label="Next.js" className="bg-white p-1 rounded-md" />

          <TechImage src={assets.typescript} label="TypeScript" />
        </div>
      </div>

      {/* TOOLS */}
      <div>
        <p className="font-semibold text-gray-300 text-lg mb-4">Tools</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
          <TechItem icon={<LiaGit className="text-red-500" />} label="Git" />
          <TechItem icon={<FaGithub className=" text-black bg-white p-1 rounded-md" />} label="GitHub" />
          <TechItem icon={<SiPostman className="text-orange-500" />} label="Postman" />
          <TechItem icon={<IoLogoVercel className="text-black bg-white p-1 rounded-md" />} label="Vercel" />
          <TechItem icon={<SiRender className="text-black bg-white p-1 rounded-md" />} label="Render" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
