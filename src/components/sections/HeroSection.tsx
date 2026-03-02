import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import { AnimatedCounter } from "../AnimatedCounter";
import { HeroGeometric } from "../ui/hero-geometric";

const metrics = [
  { value: 97.7, suffix: "%", label: "Accuracy on Fishing Detection" },
  { value: 2000, suffix: "+", label: "Satellite Images Processed" },
  { value: 1, suffix: "", label: "Published Research Paper" },
];

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative">
      <HeroGeometric
        badge="Available for opportunities"
        title1="Nabeel Anwar"
        title2="Siddiqui"
        description="Software Developer Engineer | B.Tech CSE (KIIT, 2025)"
      >
        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="px-4 py-3 rounded-xl glass"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.suffix === "%" ? 1 : 0}
                />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton onClick={scrollToProjects} variant="primary">
            <Eye className="w-4 h-4" />
            View My Work
          </MagneticButton>
          <MagneticButton href="/resume" variant="secondary">
            <Download className="w-4 h-4" />
            Download Resume
          </MagneticButton>
        </div>
      </HeroGeometric>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
