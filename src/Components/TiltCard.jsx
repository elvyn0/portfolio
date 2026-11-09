import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.015,
  glare = true,
  depth = true,
  onClick,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 24, mass: 0.35 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 24, mass: 0.35 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const glareBackground = useMotionTemplate`radial-gradient(circle 380px at ${glareX} ${glareY}, rgba(239, 68, 68, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 75%)`;

  const handleMouseMove = (e) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: isTouchDevice ? 1 : scale }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative transition-all duration-300 ${
        isHovered
          ? "shadow-[0_20px_45px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(220,38,38,0.25)]"
          : "shadow-lg shadow-black/60"
      } ${className}`}
    >
      {glare && !isTouchDevice && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 rounded-2xl overflow-hidden transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: glareBackground,
          }}
        />
      )}

      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: depth && isHovered && !isTouchDevice ? "translateZ(14px)" : "translateZ(0px)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
