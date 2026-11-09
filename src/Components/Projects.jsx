import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./Animations";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TiltCard from "./TiltCard";

function Projects() {
  const [scenicActiveScreen, setScenicActiveScreen] = useState("/project1image/homepage1.png");

  const projects = [
    {
      num: "01",
      title: "SCENIC WONDERS",
      category: "TRAVEL COMMUNITY & BOOKING",
      image: scenicActiveScreen,
      liveUrl: "https://scenic-wonders.vercel.app",
      githubUrl: "https://github.com/elvyn0/ScenicWonders.git",
      hasThumbnails: true,
      screens: [
        { label: "FEED", src: "/project1image/homepage1.png" },
        { label: "HOTEL", src: "/project1image/hotelbooking.png" },
        { label: "ADMIN", src: "/project1image/adminpanel.png" },
      ],
    },
    {
      num: "02",
      title: "ADMIN ANALYTICS",
      category: "HOTEL & OPERATIONS DASHBOARD",
      image: "/project1image/adminpanel.png",
      liveUrl: "https://scenic-wonders-adminpanel.vercel.app",
      githubUrl: "https://github.com/elvyn0/ScenicWonders.git",
      hasThumbnails: false,
    },
    {
      num: "03",
      title: "TEXTURES",
      category: "E-COMMERCE PLATFORM",
      image: "/project1image/textures_screenshot.png",
      liveUrl: "https://textures-sable-ten.vercel.app",
      githubUrl: "https://github.com/elvyn0/E-commerce.git",
      hasThumbnails: false,
    },

  ];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 md:py-16">

        {/* Section Header with Line matching reference */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-white shrink-0">
            SELECTED PROJECTS
          </h2>

          <div className="h-[1px] flex-1 bg-neutral-800/90" />

          <a
            href="https://github.com/elvyn0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 hover:text-white transition-colors shrink-0"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
          </a>
        </div>

        {/* 3-Card Grid matching the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <TiltCard
              key={idx}
              maxTilt={6}
              scale={1.015}
              className="group flex flex-col justify-between bg-neutral-950/80 border border-neutral-900 rounded-lg overflow-hidden hover:border-neutral-800 transition-all duration-300"
            >
              <div>
                {/* Screenshot Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.image}
                      src={project.image}
                      alt={project.title}
                      initial={{ opacity: 0.85 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-103 transition-transform duration-500"
                    />
                  </AnimatePresence>

                  {/* Optional screenshot switcher pills for project 1 */}
                  {project.hasThumbnails && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 z-20">
                      {project.screens.map((s, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setScenicActiveScreen(s.src);
                          }}
                          className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase transition-all cursor-pointer ${scenicActiveScreen === s.src
                              ? "bg-red-600 text-white shadow-[0_0_8px_rgba(220,38,38,0.7)]"
                              : "bg-black/80 text-neutral-400 hover:text-white"
                            }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row matching reference: 01 | Title & Subtitle | Arrow */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Red Number */}
                    <span className="font-bebas text-3xl sm:text-4xl text-red-600 leading-none select-none">
                      {project.num}
                    </span>

                    {/* Title & Category */}
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white tracking-wide group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[10px] font-semibold text-neutral-400 tracking-wider uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Action */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-400 hover:text-white transition-colors"
                      title="View Live"
                    >
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="px-4 pb-3 pt-1 border-t border-neutral-900/80 flex items-center justify-between text-[11px] font-semibold text-neutral-400">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <FaGithub className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default Projects;
