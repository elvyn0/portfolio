import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./Animations";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiPostman,
  SiJavascript,
} from "react-icons/si";
import { Terminal } from "lucide-react";

const rawSkillCategories = [
  {
    id: "frontend",
    label: "FRONTEND",
    skills: [
      {
        name: "JavaScript",
        tag: "ES6+ Core",
        icon: SiJavascript,
        color: "#F7DF1E",
        bg: "rgba(247, 223, 30, 0.08)",
        border: "rgba(247, 223, 30, 0.25)",
      },
      {
        name: "React.js",
        tag: "UI Library",
        icon: FaReact,
        color: "#61DAFB",
        bg: "rgba(97, 218, 251, 0.08)",
        border: "rgba(97, 218, 251, 0.25)",
      },
      {
        name: "Next.js",
        tag: "Fullstack / SSR",
        icon: SiNextdotjs,
        color: "#FFFFFF",
        bg: "rgba(255, 255, 255, 0.08)",
        border: "rgba(255, 255, 255, 0.25)",
      },
      {
        name: "TypeScript",
        tag: "Static Types",
        icon: SiTypescript,
        color: "#3178C6",
        bg: "rgba(49, 120, 198, 0.08)",
        border: "rgba(49, 120, 198, 0.25)",
      },
      {
        name: "Tailwind CSS",
        tag: "Utility Styling",
        icon: SiTailwindcss,
        color: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.08)",
        border: "rgba(6, 182, 212, 0.25)",
      },
      {
        name: "HTML5",
        tag: "Semantic Core",
        icon: FaHtml5,
        color: "#E34F26",
        bg: "rgba(227, 79, 38, 0.08)",
        border: "rgba(227, 79, 38, 0.25)",
      },
      {
        name: "CSS3",
        tag: "Modern Layouts",
        icon: FaCss3Alt,
        color: "#1572B6",
        bg: "rgba(21, 114, 182, 0.08)",
        border: "rgba(21, 114, 182, 0.25)",
      },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    skills: [
      {
        name: "Node.js",
        tag: "JS Runtime",
        icon: FaNodeJs,
        color: "#5FA04E",
        bg: "rgba(95, 160, 78, 0.08)",
        border: "rgba(95, 160, 78, 0.25)",
      },
      {
        name: "Express.js",
        tag: "Server Framework",
        icon: SiExpress,
        color: "#EEEEEE",
        bg: "rgba(255, 255, 255, 0.08)",
        border: "rgba(255, 255, 255, 0.25)",
      },
    ],
  },
  {
    id: "database",
    label: "DATABASE",
    skills: [
      {
        name: "MongoDB",
        tag: "NoSQL Database",
        icon: SiMongodb,
        color: "#47A248",
        bg: "rgba(71, 162, 72, 0.08)",
        border: "rgba(71, 162, 72, 0.25)",
      },
      {
        name: "PostgreSQL",
        tag: "SQL Foundational",
        icon: SiPostgresql,
        color: "#4169E1",
        bg: "rgba(65, 105, 225, 0.08)",
        border: "rgba(65, 105, 225, 0.25)",
      },
      {
        name: "Firebase",
        tag: "Cloud Firestore",
        icon: SiFirebase,
        color: "#FFCA28",
        bg: "rgba(255, 202, 40, 0.08)",
        border: "rgba(255, 202, 40, 0.25)",
      },
    ],
  },
  {
    id: "cloud",
    label: "CLOUD & DEPLOY",
    skills: [
      {
        name: "AWS EC2",
        tag: "Cloud Compute",
        icon: FaAws,
        color: "#FF9900",
        bg: "rgba(255, 153, 0, 0.08)",
        border: "rgba(255, 153, 0, 0.25)",
      },
      {
        name: "AWS S3",
        tag: "Object Storage",
        icon: FaAws,
        color: "#569A31",
        bg: "rgba(86, 154, 49, 0.08)",
        border: "rgba(86, 154, 49, 0.25)",
      },
      {
        name: "GitHub Actions",
        tag: "CI/CD Automation",
        icon: SiGithubactions,
        color: "#2088FF",
        bg: "rgba(32, 136, 255, 0.08)",
        border: "rgba(32, 136, 255, 0.25)",
      },
      {
        name: "Docker",
        tag: "Containers",
        icon: FaDocker,
        color: "#2496ED",
        bg: "rgba(36, 150, 237, 0.08)",
        border: "rgba(36, 150, 237, 0.25)",
      },
      {
        name: "Vercel",
        tag: "Edge Hosting",
        icon: SiVercel,
        color: "#FFFFFF",
        bg: "rgba(255, 255, 255, 0.08)",
        border: "rgba(255, 255, 255, 0.25)",
      },
      {
        name: "Render",
        tag: "Web Services",
        icon: SiRender,
        color: "#46E3B7",
        bg: "rgba(70, 227, 183, 0.08)",
        border: "rgba(70, 227, 183, 0.25)",
      },
    ],
  },
  {
    id: "tools",
    label: "TOOLS & DEVOPS",
    skills: [
      {
        name: "Git",
        tag: "Version Control",
        icon: FaGitAlt,
        color: "#F05032",
        bg: "rgba(240, 80, 50, 0.08)",
        border: "rgba(240, 80, 50, 0.25)",
      },
      {
        name: "GitHub",
        tag: "Repo & Collab",
        icon: FaGithub,
        color: "#FFFFFF",
        bg: "rgba(255, 255, 255, 0.08)",
        border: "rgba(255, 255, 255, 0.25)",
      },
      {
        name: "Postman",
        tag: "API Testing",
        icon: SiPostman,
        color: "#FF6C37",
        bg: "rgba(255, 108, 55, 0.08)",
        border: "rgba(255, 108, 55, 0.25)",
      },
    ],
  },
  {
    id: "familiar",
    label: "FAMILIAR WITH",
    skills: [
      {
        name: "Python",
        tag: "Scripting & Backend",
        icon: FaPython,
        color: "#3776AB",
        bg: "rgba(55, 118, 171, 0.08)",
        border: "rgba(55, 118, 171, 0.25)",
      },
    ],
  },
];

const allSkills = rawSkillCategories.flatMap((c) =>
  c.skills.map((s) => ({ ...s, category: c.label }))
);

const skillCategories = [
  { id: "all", label: "ALL", count: allSkills.length },
  ...rawSkillCategories.map((c) => ({
    id: c.id,
    label: c.label,
    count: c.skills.length,
    skills: c.skills,
  })),
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const displayedSkills =
    activeCategory === "all"
      ? allSkills
      : (skillCategories.find((c) => c.id === activeCategory)?.skills || []).map((s) => ({
          ...s,
          category: skillCategories.find((c) => c.id === activeCategory)?.label,
        }));

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 md:py-20"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-900">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              // TECH STACK &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white font-serif">
            SKILLS &amp; TOOLS
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
            {allSkills.length} industry-grade tools and technologies powering production web architectures,
            robust databases, and cloud infrastructure.
          </p>
        </div>

        {/* Total verified indicator */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-lg bg-neutral-950 border border-neutral-850 flex items-center gap-3">
            <Terminal className="w-4 h-4 text-red-500" />
            <div className="text-left">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                VERIFIED STACK
              </span>
              <span className="text-sm font-bold text-white font-mono">
                {allSkills.length} TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex items-center gap-2 flex-wrap mb-8">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 select-none ${
                isActive
                  ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.45)] ring-1 ring-red-400"
                  : "bg-neutral-950/80 text-neutral-400 hover:text-white border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? "bg-black/30 text-white" : "bg-neutral-900 text-neutral-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Interactive Skill Tiles Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative p-4 rounded-xl bg-neutral-950/70 border border-neutral-900 hover:border-neutral-700 flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-default"
                style={{
                  boxShadow: isHovered
                    ? `0 10px 25px -5px ${skill.bg}, 0 0 15px -3px ${skill.border}`
                    : "none",
                  borderColor: isHovered ? skill.color : undefined,
                }}
              >
                {/* Ambient Soft Glow on Hover */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundColor: skill.color,
                    opacity: isHovered ? 0.2 : 0,
                  }}
                />

                {/* Top: Category Tag + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-400 font-semibold">
                      {skill.category}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                      style={{
                        backgroundColor: isHovered ? skill.color : "#404040",
                      }}
                    />
                  </div>

                  {/* Brand Icon Box */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                    style={{
                      backgroundColor: skill.bg,
                      border: `1px solid ${skill.border}`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>

                {/* Bottom: Skill Name & Subtitle Tag */}
                <div className="mt-2">
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5 truncate">
                    {skill.tag}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Editorial Banner */}
      <div className="mt-10 p-5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-300 font-bold uppercase tracking-wider">
            PRODUCTION READY &amp; DEPLOYMENT TESTED
          </span>
        </div>
      </div>
    </motion.section>
  );
}
