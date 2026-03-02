import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setHovered(false);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 overflow-hidden";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 soft-glow",
    secondary:
      "glass border border-border hover:border-primary/50 hover:bg-primary/5",
    ghost: "hover:bg-muted/50",
  };

  const content = (
    <motion.div
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Canvas reveal on hover — only for primary buttons */}
      {variant === "primary" && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-0"
            >
              <CanvasRevealEffect
                animationSpeed={8}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],  /* blue-500 */
                  [99, 102, 241],  /* indigo-500 */
                ]}
                opacities={[0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.7]}
                dotSize={2}
                showGradient={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {/* Content always on top */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer">
      {content}
    </button>
  );
}
