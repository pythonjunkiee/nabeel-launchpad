import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import { AnimatedCounter } from "../AnimatedCounter";
import { ContainerScroll } from "../ui/container-scroll-animation";

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
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="block">Nabeel Anwar</span>
                <span className="block text-primary">Siddiqui</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Software Developer Engineer | B.Tech CSE (KIIT, 2025)
              </motion.p>
            </div>
          }
        >
          {/* Inner card content: metrics + CTA */}
          <div className="flex flex-col items-center justify-center h-full p-4 md:p-8">
            {/* Metrics */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton onClick={scrollToProjects} variant="primary">
                <Eye className="w-4 h-4" />
                View My Work
              </MagneticButton>
              <MagneticButton href="/resume" variant="secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </MagneticButton>
            </motion.div>
          </div>
        </ContainerScroll>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
