import { motion } from "framer-motion";
import { Sparkles, Globe, Download, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden pt-6 pb-16 md:pb-24">
      {/* ================= TOP UTILITY BAR (matching reference) ================= */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between text-xs font-bold tracking-widest uppercase">
        <div className="leading-tight text-neutral-300">
          <p className="text-red-600">FULL STACK DEVELOPER</p>
          <p className="text-neutral-400">MERN ARCHITECT</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-300 tracking-wider">
          <span>AVAILABLE FOR FREELANCE</span>
          <span className="text-red-500 font-bold">✦</span>
        </div>
      </div>

      {/* ================= HERO MASTER STAGE ================= */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-6 sm:mt-10">

        {/* Layer 1: Giant Red PORTFOLIO Typography (Stretches across entire width) */}
        <div className="absolute top-2 sm:top-4 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
          <h1 className="font-bebas text-[23vw] leading-none tracking-tight text-[#8f111a] sm:text-[#9e141f] text-center uppercase drop-shadow-[0_20px_40px_rgba(158,20,31,0.25)]">
            DEVELOPER
          </h1>
        </div>

        {/* Layer 2 & 3: Content Grid (Left Text | Center Portrait | Right Stats) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] sm:min-h-[640px] pt-4 sm:pt-8">

          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start z-20 space-y-3"
          >
            {/* Script "Hello, I'm" */}
            <span className="font-script text-3xl sm:text-4xl text-neutral-100 font-normal">
              Hello, I'm
            </span>

            {/* Huge Stacked Name matching reference */}
            <div className="leading-[0.88] select-none">
              <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white">
                ANOOP
              </h2>
              <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white">
                S
              </h2>
            </div>

            {/* Red Subtitle in 2 lines matching reference */}
            <div className="font-bold uppercase text-xs sm:text-sm tracking-wider leading-snug text-red-600 pt-1">
              <p>FULL STACK DEVELOPER &amp;</p>
              <p>MERN STACK ARCHITECT</p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
              I design and build fast, user-focused web applications that combine modern architecture with seamless user experiences. Passionate about clean code, smooth interactions, and details that make a difference.
            </p>

            {/* Pill: AVAILABLE WORLDWIDE */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 text-[11px] font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="/Anoop_S_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(185,28,28,0.4)] hover:-translate-y-0.5"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/Anoop_S_Full_Stack_Developer_Resume.pdf"
                download="Anoop_S_FullStack_Developer_Resume.pdf"
                title="Download Resume"
                className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-red-600 transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* ================= CENTER PORTRAIT (Overlapping PORTFOLIO) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-4 flex justify-center items-end relative z-10 self-end -mb-4 sm:-mb-8"
          >
            {/* Subtle red studio backlight */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />

            {/* Cutout Portrait Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] overflow-hidden flex justify-center">
              <img
                src="/project1image/Anoop_cutout.png"
                alt="Anoop"
                className="w-full h-auto object-contain object-bottom filter grayscale contrast-110 brightness-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] select-none"
              />
              {/* Bottom fade into pitch black */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN (Vision + Stats) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end z-20 space-y-10 sm:space-y-12"
          >
            {/* Floating Vision Badge */}
            <div className="flex items-start gap-2.5 max-w-xs text-left lg:text-right">
              <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">✦</span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Turning ideas into powerful, high-performance digital applications.
              </p>
            </div>

            {/* Stats Block: Red Number on left, 2-line label on right */}
            <div className="space-y-6 w-full max-w-xs">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="font-bebas text-5xl sm:text-6xl text-red-600 leading-none tracking-tight">
                  3+
                </span>
                <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase leading-tight text-left">
                  <p>PROJECTS</p>
                  <p>COMPLETED</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="font-bebas text-5xl sm:text-6xl text-red-600 leading-none tracking-tight">
                  100%
                </span>
                <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase leading-tight text-left">
                  <p>MERN</p>
                  <p>SPECIALIST</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
