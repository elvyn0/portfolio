import { motion } from "framer-motion";
import { fadeUp } from "./Animations";
import { Search, Lightbulb, Edit3, Code2, Send, GraduationCap, Award, Compass, Cpu, CheckCircle2 } from "lucide-react";
import TiltCard from "./TiltCard";

function BentoSection() {
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

  const engineeringHighlights = [
    {
      title: "Full-Stack Architecture",
      desc: "Production-ready applications with modular, testable codebases.",
    },
    {
      title: "Real-Time & Event-Driven",
      desc: "Instant bi-directional data flow using Socket.io and REST APIs.",
    },
    {
      title: "Cloud & DevOps Integration",
      desc: "Containerized with Docker, automated CI/CD, hosted on AWS & Vercel.",
    },
  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* ================= COLUMN 1: EDUCATION & CORE FOUNDATION ================= */}
          <TiltCard
            maxTilt={4}
            scale={1.01}
            className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col justify-between"
          >
            <div>



              {/* Engineering Pillars */}
              <div>
                <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ENGINEERING PHILOSOPHY</span>
                </h4>

                <div className="space-y-2.5">
                  {engineeringHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-black/60 border border-neutral-850 hover:border-neutral-750 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <h5 className="text-xs font-bold text-neutral-200">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 pl-5.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="pt-4 mt-5 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>CLEAN CODE GUARANTEED</span>
              </span>
              <span className="text-red-500 font-bold">PRODUCTION READY</span>
            </div>
          </TiltCard>

          {/* ================= COLUMN 2: WORK PROCESS ================= */}
          <TiltCard
            maxTilt={4}
            scale={1.01}
            className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col justify-between"
          >
            <div>
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
            </div>

            {/* Bottom Process summary */}
            <div className="pt-4 mt-5 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>AGILE ITERATION</span>
              <span className="text-red-500 font-bold">5 STAGES</span>
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
