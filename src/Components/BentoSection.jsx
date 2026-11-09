import { motion } from "framer-motion";
import { fadeUp } from "./Animations";
import { Search, Lightbulb, Edit3, Code2, Send, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

function BentoSection() {
  const skills = [
    "WEB DESIGN",
    "REACT.JS",
    "NODE.JS",
    "EXPRESS",
    "MONGODB",
    "NEXT.JS",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "DOCKER",
    "AWS S3 & EC2",
    "GIT & GITHUB",
    "REST APIS",
    "PYTHON",
    "SOCKET.IO",
  ];

  const workSteps = [
    {
      num: "01",
      icon: Search,
      title: "DISCOVER",
      desc: "Understanding goals, audience, and project requirements.",
    },
    {
      num: "02",
      icon: Lightbulb,
      title: "IDEATE",
      desc: "Planning, wireframing, and creating the right concept.",
    },
    {
      num: "03",
      icon: Edit3,
      title: "DESIGN",
      desc: "Crafting visual design with a focus on user experience.",
    },
    {
      num: "04",
      icon: Code2,
      title: "DEVELOP",
      desc: "Building fast, responsive, and high-performing websites.",
    },
    {
      num: "05",
      icon: Send,
      title: "DELIVER",
      desc: "Testing, optimizing, and launching with perfection.",
    },
  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* ================= COLUMN 1: EDUCATION & SKILLS ================= */}
          <TiltCard
            maxTilt={4}
            scale={1.01}
            className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
                EDUCATION &amp; SKILLS
              </h3>

              {/* EDUCATION */}
              <div className="space-y-4 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block">
                  EDUCATION
                </span>

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-neutral-900 pb-3">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        Full Stack MERN Specialization
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Self-Taught &amp; Production Applications
                      </p>
                    </div>
                    <span className="text-xs font-mono text-red-600 font-bold shrink-0">
                      2025 - Present
                    </span>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-3">
                  SKILLS
                </span>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded bg-black border border-neutral-800 text-[11px] font-bold tracking-wider text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ================= COLUMN 2: WORK PROCESS ================= */}
          <TiltCard
            maxTilt={4}
            scale={1.01}
            className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-neutral-950/80 border border-neutral-900"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
              WORK PROCESS
            </h3>

            <div className="space-y-5 relative">
              {/* Continuous vertical red connector line matching reference */}
              <div className="absolute top-4 bottom-4 left-4 w-[1px] bg-red-900/60" />

              {workSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    {/* Red Outlined Circle with Icon matching reference */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-black border border-red-700/80 flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-red-500" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-red-600 font-mono">
                          {step.num}
                        </span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </TiltCard>

          {/* ================= COLUMN 3: SOLID CRIMSON QUOTE CARD ================= */}
          <TiltCard
            maxTilt={5}
            scale={1.02}
            className="lg:col-span-3 p-6 sm:p-8 rounded-xl bg-[#6f0c13] text-white flex flex-col justify-between shadow-[0_15px_40px_rgba(111,12,19,0.4)] relative overflow-hidden"
          >
            <div>
              {/* Double Quotes symbol matching reference */}
              <div className="text-5xl font-serif leading-none text-red-400/90 mb-4 select-none">
                “
              </div>

              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-white">
                Good design is not just how it looks, but how it works.
              </blockquote>

              {/* Signature matching reference */}
              <div className="font-script text-3xl sm:text-4xl text-neutral-100 mt-6 select-none">
                Anoop
              </div>
            </div>

            {/* Bottom 3-line text + red star matching reference */}
            <div className="pt-8 mt-6">
              <p className="text-[11px] font-bold tracking-widest uppercase leading-tight text-red-200">
                LET'S CREATE
              </p>
              <p className="text-[11px] font-bold tracking-widest uppercase leading-tight text-red-200">
                SOMETHING GREAT
              </p>
              <p className="text-[11px] font-bold tracking-widest uppercase leading-tight text-red-200">
                TOGETHER.
              </p>
              <div className="mt-2 text-red-300 font-bold text-xs">
                ✦
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </motion.div>
  );
}

export default BentoSection;
