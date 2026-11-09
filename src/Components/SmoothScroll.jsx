import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";

export const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.3 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenisInstance(lenis);

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll, limit }) => {
      if (limit > 0) {
        setScrollProgress((scroll / limit) * 100);
      }
    });

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId === "#home" || targetId === "#top") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, {
          offset: -80,
          duration: 1.2,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {/* Editorial Glowing Crimson Top Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-neutral-950/40 backdrop-blur-xs">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(220,38,38,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {children}
    </LenisContext.Provider>
  );
}
