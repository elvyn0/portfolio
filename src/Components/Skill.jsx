import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRender } from "react-icons/si";
import { LiaGit } from "react-icons/lia";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { fadeUp } from "./Animations";
import { Sparkles, Terminal, Cpu, Database, Cloud, Wrench } from "lucide-react";
import TiltCard from "./TiltCard";

// 3D Tactile Tech Tile
const TechTile3D = ({ icon, imageSrc, label, brandColor = "rgba(59,130,246,0.5)", imageClass = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-white/25 transition-colors duration-300 cursor-pointer overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? `0 10px 25px -5px ${brandColor}, 0 0 15px 0 ${brandColor}`
          : "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Dynamic ambient backlight on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: brandColor }}
      />

      {/* 3D Specular Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Icon or Image */}
      <div
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl mb-2 transition-transform duration-300 group-hover:scale-115 flex items-center justify-center"
        style={{ transform: "translateZ(20px)" }}
      >
        {icon ? (
          icon
        ) : (
          <img
            src={imageSrc}
            alt={label}
            className={`w-9 sm:w-11 md:w-12 object-contain drop-shadow ${imageClass}`}
          />
        )}
      </div>

      {/* Label */}
      <p
        className="relative z-10 text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 text-center truncate max-w-full"
        style={{ transform: "translateZ(15px)" }}
      >
        {label}
      </p>
    </motion.div>
  );
};

function Skill() {
  const categories = [
    {
      title: "Frontend Development",
      subtitle: "Building responsive, reactive user interfaces with modern UX standards",
      icon: Cpu,
      color: "text-cyan-400",
      skills: [
        { icon: <FaReact className="text-cyan-400" />, label: "React", brandColor: "rgba(34,211,238,0.5)" },
        { icon: <IoLogoJavascript className="text-yellow-400" />, label: "JavaScript", brandColor: "rgba(250,204,21,0.5)" },
        { imageSrc: assets.nextjs, label: "Next.js", brandColor: "rgba(255,255,255,0.4)", imageClass: "bg-white p-1 rounded-lg" },
        { imageSrc: assets.typescript, label: "TypeScript", brandColor: "rgba(59,130,246,0.5)" },
        { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5", brandColor: "rgba(249,115,22,0.5)" },
        { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS3", brandColor: "rgba(59,130,246,0.5)" },
        { icon: <RiTailwindCssFill className="text-cyan-300" />, label: "Tailwind CSS", brandColor: "rgba(103,232,249,0.5)" },
      ],
    },
    {
      title: "Backend Architecture",
      subtitle: "RESTful API engineering, secure authentication, and microservice patterns",
      icon: Terminal,
      color: "text-emerald-400",
      skills: [
        { icon: <DiNodejs className="text-green-500 text-5xl sm:text-6xl" />, label: "Node.js", brandColor: "rgba(34,197,94,0.5)" },
        { icon: <SiExpress className="text-neutral-200 text-4xl sm:text-5xl" />, label: "Express.js", brandColor: "rgba(255,255,255,0.4)" },
      ],
    },
    {
      title: "Database Design",
      subtitle: "Scalable schema design, indexing, and high-performance querying",
      icon: Database,
      color: "text-green-400",
      skills: [
        { icon: <SiMongodb className="text-emerald-500" />, label: "MongoDB", brandColor: "rgba(16,185,129,0.5)" },
      ],
    },
    {
      title: "Cloud & Deployment",
      subtitle: "Containerization, object storage, serverless hosting, and compute",
      icon: Cloud,
      color: "text-orange-400",
      skills: [
        { icon: <FaAws className="text-amber-400" />, label: "AWS (S3 & EC2)", brandColor: "rgba(251,191,36,0.5)" },
        { icon: <FaDocker className="text-sky-400" />, label: "Docker", brandColor: "rgba(56,189,248,0.5)" },
        { icon: <IoLogoVercel className="text-white bg-neutral-950 p-1.5 rounded-lg border border-white/20" />, label: "Vercel", brandColor: "rgba(255,255,255,0.4)" },
        { icon: <SiRender className="text-white bg-neutral-950 p-1.5 rounded-lg border border-white/20" />, label: "Render", brandColor: "rgba(255,255,255,0.4)" },
      ],
    },
    {
      title: "Developer Tools",
      subtitle: "Version control workflows, API debugging, and automation",
      icon: Wrench,
      color: "text-indigo-400",
      skills: [
        { icon: <LiaGit className="text-red-500 text-5xl" />, label: "Git", brandColor: "rgba(239,68,68,0.5)" },
        { icon: <FaGithub className="text-white bg-neutral-950 p-1.5 rounded-lg border border-white/20" />, label: "GitHub", brandColor: "rgba(255,255,255,0.4)" },
        { icon: <SiPostman className="text-orange-500" />, label: "Postman", brandColor: "rgba(249,115,22,0.5)" },
      ],
    },
    {
      title: "Familiar With",
      subtitle: "Languages & paradigms explored and leveraged across projects",
      icon: Sparkles,
      color: "text-yellow-400",
      skills: [
        { imageSrc: assets.python, label: "Python", brandColor: "rgba(234,179,8,0.5)" },
      ],
    },
  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <div className="w-full space-y-10">
        {/* Section Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Core Stack & Tools
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Tech <span className="text-neutral-500">Stack</span>
          </h2>
        </div>

        {/* Categories Stack */}
        <div className="space-y-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <TiltCard
                key={idx}
                maxTilt={4}
                scale={1.005}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-900/75 backdrop-blur-xl border border-white/10 relative overflow-hidden"
              >
                <div style={{ transform: "translateZ(15px)" }}>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                        <Icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 shrink-0">
                      {cat.skills.length} tools
                    </span>
                  </div>

                  {/* 3D Tiles Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <TechTile3D
                        key={sIdx}
                        icon={skill.icon}
                        imageSrc={skill.imageSrc}
                        label={skill.label}
                        brandColor={skill.brandColor}
                        imageClass={skill.imageClass}
                      />
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
