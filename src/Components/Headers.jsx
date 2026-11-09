import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Hero" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

function Headers() {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 280);

      const scrollPos = scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          aria-label="Quick Navigation"
        >
          <div className="p-1 rounded-full bg-black/90 backdrop-blur-xl border border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1 px-2 py-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-neutral-900 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeDockDot"
                        className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-red-600"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Headers;
