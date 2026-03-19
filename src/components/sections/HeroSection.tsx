import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";
import { MagneticWrapper } from "../MagneticWrapper";
import { TextShimmer } from "../ui/text-shimmer";
import AnimatedTextCycle from "../ui/animated-text-cycle";

const metrics = [
  { value: 2000, suffix: "+", label: "Satellite Images Processed" },
  { value: 97.7, suffix: "%", label: "CNN Model Accuracy" },
  { value: 1,    suffix: "",  label: "Published Research Paper" },
];

const roles = [
  "Software Developer",
  "AI Engineer",
  "Security Analyst",
  "ML Researcher",
  "Problem Solver",
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearTimeout(id);
  }, [roleIndex]);

  const scrollToAbout    = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col px-6 pt-8 scroll-mt-0 overflow-hidden"
    >

      {/* ── Hero content — flex-1 centres it, pb-24 keeps clear of scroll btn ── */}
      <motion.div
        className="relative z-20 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center pb-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs text-white/65 tracking-wide">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="font-poppins font-medium text-5xl md:text-7xl lg:text-8xl mb-0 leading-[1.07]"
          style={{ letterSpacing: "-0.04em" }}
        >
          <TextShimmer as="span" duration={3.5} spread={5} className="font-poppins font-medium">
            Nabeel Anwar
          </TextShimmer>
          <br />
          <em className="font-serif not-italic text-white/72" style={{ fontStyle: "italic" }}>
            Siddiqui
          </em>
        </motion.h1>

        {/* Animated role subtitle */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mt-6 mb-12"
        >
          <span className="h-px w-10 bg-white/20 flex-shrink-0" />
          <p className="font-poppins font-light text-lg md:text-xl text-white/60 tracking-[0.18em] flex items-center whitespace-nowrap">
            Software&nbsp;
            <AnimatedTextCycle
              words={["Engineer", "Developer", "Architect", "Builder", "Innovator"]}
              interval={2800}
              className="font-poppins font-light text-lg md:text-xl text-white/60 tracking-[0.18em]"
            />
          </p>
          <span className="h-px w-10 bg-white/20 flex-shrink-0" />
        </motion.div>

        {/* Metrics */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="liquid-glass rounded-full px-5 py-2.5 flex flex-col items-center">
              <span className="font-poppins font-medium text-xl text-white">
                <AnimatedCounter value={m.value} suffix={m.suffix} decimals={m.suffix === "%" ? 1 : 0} />
              </span>
              <span className="text-[10px] text-white/45 mt-0.5 uppercase tracking-widest whitespace-nowrap">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <MagneticWrapper strength={0.18}>
            <button
              onClick={scrollToProjects}
              className="liquid-glass-strong rounded-full px-7 py-3 flex items-center gap-3 text-white font-medium text-sm hover:scale-105 active:scale-95 transition-transform"
            >
              <Eye className="w-4 h-4" />
              View My Work
            </button>
          </MagneticWrapper>

          <MagneticWrapper strength={0.18}>
            <a
              href="/resume"
              className="liquid-glass rounded-full px-7 py-3 flex items-center gap-3 text-white/75 font-medium text-sm hover:scale-105 active:scale-95 transition-transform"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </MagneticWrapper>
        </motion.div>
      </motion.div>

      {/* ── Scroll button — sits at the natural bottom, never overlaps content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-20 flex justify-center pb-10"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-white/35 hover:text-white/70 transition-colors cursor-pointer group"
          aria-label="Scroll to About"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
