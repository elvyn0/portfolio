import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./Animations";
import { Mail, Globe, MapPin, ArrowRight, Copy, Check, Phone } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import TiltCard from "./TiltCard";

function Contact() {
  const email = "anoops0666@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 md:py-20 border-t border-neutral-900/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ================= LEFT: LET'S WORK TOGETHER ================= */}
          <div className="lg:col-span-5 space-y-5">
            <div className="leading-[0.9]">
              <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white">
                LET'S WORK
              </h2>
              <div className="flex items-center gap-2">
                <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white">
                  TOGETHER
                </h2>
                <span className="text-red-500 font-bold text-2xl -mt-2">✦</span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              I'm currently open for new projects and collaborations. Let's create something amazing that drives results.
            </p>

            {/* Pill Button matching reference: red circle arrow + label */}
            <div className="pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 hover:border-red-600 transition-colors group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-neutral-300 group-hover:text-white uppercase">
                  AVAILABLE FOR FREELANCE &amp; FULL-TIME
                </span>
              </a>
            </div>
          </div>

          {/* ================= CENTER: CONTACT ROWS WITH OUTLINE CIRCLES ================= */}
          <div className="lg:col-span-4 space-y-4">
            {/* Email */}
            <div
              onClick={handleCopy}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border border-red-700/80 bg-black flex items-center justify-center text-red-500 group-hover:border-red-500 group-hover:bg-red-950/30 transition-all shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                  {email}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono pl-2">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 inline" /> : "COPY"}
                </span>
              </div>
            </div>

            {/* LinkedIn / Website */}
            <a
              href="https://www.linkedin.com/in/anoop0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 group"
            >
              <div className="w-9 h-9 rounded-full border border-red-700/80 bg-black flex items-center justify-center text-red-500 group-hover:border-red-500 group-hover:bg-red-950/30 transition-all shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                linkedin.com/in/anoop0
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/elvyn0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 group"
            >
              <div className="w-9 h-9 rounded-full border border-red-700/80 bg-black flex items-center justify-center text-red-500 group-hover:border-red-500 group-hover:bg-red-950/30 transition-all shrink-0">
                <FaGithub className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                github.com/elvyn0
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full border border-red-700/80 bg-black flex items-center justify-center text-red-500 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-300">
                Kerala, India (Remote Worldwide)
              </span>
            </div>
          </div>

          {/* ================= RIGHT: 3D LAPTOP & MUG MOCKUP ================= */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end items-end gap-3">
            {/* 3D Laptop */}
            <TiltCard
              maxTilt={8}
              scale={1.02}
              className="w-full max-w-[280px] rounded-xl bg-black border border-neutral-800 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.9)] relative"
            >
              {/* Laptop Screen */}
              <div className="aspect-[16/10] w-full rounded-lg bg-[#0c0c0e] border border-neutral-900 p-3 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="text-[9px] font-mono text-neutral-400">anoop.dev</span>
                  </div>
                  <p className="font-bebas text-base leading-tight text-white tracking-wide mt-2">
                    WE BUILD DIGITAL EXPERIENCES
                  </p>
                </div>

                {/* Red abstract diagonal graphic like reference */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-6 bg-red-700 transform -skew-x-12" />
                    <div className="w-4 h-6 bg-red-600 transform -skew-x-12" />
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400">MERN 2026</span>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="h-1.5 w-full bg-neutral-800 rounded-b mt-1.5 flex justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-b" />
              </div>
            </TiltCard>

            {/* Coffee Mug with 'A' matching the reference mug */}
            <div className="hidden sm:flex flex-col items-center justify-center w-10 h-14 rounded-md bg-neutral-900 border border-neutral-800 relative shadow-md">
              <span className="font-bebas text-sm text-neutral-400">A</span>
              {/* Mug handle */}
              <div className="absolute -left-2 top-3 w-2.5 h-6 rounded-l-md border-l-2 border-y-2 border-neutral-800" />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
