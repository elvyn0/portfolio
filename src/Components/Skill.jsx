import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRender } from "react-icons/si";
import { LiaGit } from "react-icons/lia";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { fadeUp } from "./Animations";

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

export const AwsS3 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
    <defs>
      <linearGradient id="logosAwsS30" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F"></stop>
        <stop offset="100%" stopColor="#6CAE3E"></stop>
      </linearGradient>
    </defs>
    <path fill="url(#logosAwsS30)" d="M0 0h256v256H0z"></path>
    <path
      fill="#FFF"
      d="m194.675 137.256l1.229-8.652c11.33 6.787 11.478 9.59 11.475 9.667c-.02.016-1.952 1.629-12.704-1.015Zm-6.218-1.728c-19.584-5.926-46.857-18.438-57.894-23.654c0-.045.013-.086.013-.131c0-4.24-3.45-7.69-7.693-7.69c-4.237 0-7.687 3.45-7.687 7.69s3.45 7.69 7.687 7.69c1.862 0 3.552-.695 4.886-1.8c12.986 6.148 40.048 18.478 59.776 24.302l-7.801 55.059c-.023.15-.032.3-.032.451c0 4.848-21.463 13.754-56.532 13.754c-35.44 0-57.13-8.906-57.13-13.754a3.31 3.31 0 0 0-.028-.435l-16.3-119.062c14.108 9.712 44.454 14.85 73.478 14.85c28.979 0 59.273-5.12 73.41-14.802l-8.153 57.532ZM48 65.528c.23-4.21 24.428-20.73 75.2-20.73c50.764 0 74.966 16.516 75.2 20.73v1.437c-2.784 9.443-34.144 19.434-75.2 19.434c-41.127 0-72.503-10.023-75.2-19.479v-1.392Zm156.8.07c0-11.087-31.79-27.2-81.6-27.2c-49.812 0-81.6 16.113-81.6 27.2l.3 2.414l17.754 129.676c.426 14.503 39.1 19.91 63.526 19.91c30.31 0 62.512-6.969 62.928-19.9l7.668-54.07c4.265 1.02 7.776 1.542 10.595 1.542c3.785 0 6.345-.925 7.897-2.774c1.274-1.517 1.76-3.354 1.396-5.31c-.83-4.428-6.087-9.202-16.794-15.311l7.603-53.639l.327-2.537Z"
    ></path>
  </svg>
);

function Skill() {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
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
            <TechImage src={assets.nextjs} label="Next.js" className="bg-white p-1 rounded-md" />
            <TechImage src={assets.typescript} label="TypeScript" />
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

        {/* Cloud & Deployment:  */}
        <div>
          <p className="font-semibold text-gray-300 text-lg mb-2">Cloud & Deployment</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
            <TechItem icon={<FaAws className="text-yellow-100" />} label="AWS (S3 & EC2 )" />
            <TechItem icon={<FaDocker className="text-blue-400" />} label="Docker" />
            <TechItem icon={<IoLogoVercel className="text-black bg-white p-1 rounded-md" />} label="Vercel" />
            <TechItem icon={<SiRender className="text-black bg-white p-1 rounded-md" />} label="Render" />
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <p className="font-semibold text-gray-300 text-lg mb-4">Tools</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
            <TechItem icon={<LiaGit className="text-red-500" />} label="Git" />
            <TechItem icon={<FaGithub className=" text-black bg-white p-1 rounded-md" />} label="GitHub" />
            <TechItem icon={<SiPostman className="text-orange-500" />} label="Postman" />
          </div>
        </div>

        {/* FAMILIAR */}
        <div>
          <p className="font-semibold text-gray-300 text-lg mb-4">Familiar With</p>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
            <TechImage src={assets.python} label="Python" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
