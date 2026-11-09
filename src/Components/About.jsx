import { motion } from "framer-motion";
import { fadeUp } from "./Animations";
import { ShieldCheck, Rocket, Code2, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

function About() {
  const highlights = [
    {
      icon: Rocket,
      title: "3+ Production Apps",
      desc: "Architected, built, and deployed from scratch",
      color: "text-orange-400",
      border: "border-orange-500/20",
      bg: "bg-orange-500/5",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Mindset",
      desc: "Security by design, not as an afterthought",
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/5",
    },
    {
      icon: Code2,
      title: "MERN Stack Specialist",
      desc: "Full-cycle React, Node, Express & MongoDB",
      color: "text-indigo-400",
      border: "border-indigo-500/20",
      bg: "bg-indigo-500/5",
    },
  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <TiltCard
        maxTilt={5}
        scale={1.008}
        className="p-6 md:p-10 rounded-3xl bg-neutral-900/75 backdrop-blur-xl border border-white/10 relative overflow-hidden"
      >
        {/* Ambient backlight */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div style={{ transform: "translateZ(20px)" }}>
          {/* Section Subheading Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Philosophy
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-neutral-500">me</span>
          </h2>

          <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">I build things.</span> That's the simplest way to put it.
              What started as curiosity about how websites work turned into a year of late nights, countless bugs,
              and three production applications built completely from scratch.
            </p>
            <p>
              My background is unconventional — commerce degree, a year in cybersecurity, then a complete pivot into full
              stack development. No shortcuts. No bootcamp. Just building, breaking things, and figuring it out.
            </p>
            <p>
              Today I specialize in the <span className="text-white font-semibold">MERN stack</span> — React on the frontend,
              Node.js and Express on the backend, MongoDB for data, and whatever it takes to ship something that actually works.
              I've built real-time messaging systems, payment integrations, AI assistants, booking platforms, and e-commerce apps — all deployed and live.
            </p>
            <p className="text-neutral-400">
              I write code the way my cybersecurity background taught me to think — with security in mind from the start, not as an afterthought.
              When I'm deep in a project and new ideas keep coming instead of frustration — that's when I know I'm exactly where I'm supposed to be.
            </p>
          </div>

          {/* 3D Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20`}
                >
                  <Icon className={`w-6 h-6 ${item.color} mb-2`} />
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-neutral-400 leading-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default About;
