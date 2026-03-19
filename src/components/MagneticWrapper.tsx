import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps any element and adds a subtle magnetic pull toward the cursor.
 * Snaps back smoothly when the mouse leaves.
 */
export function MagneticWrapper({
  children,
  strength = 0.2,
  className = "",
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const springCfg = { stiffness: 180, damping: 18, mass: 0.4 };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springCfg);
  const springY = useSpring(y, springCfg);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
