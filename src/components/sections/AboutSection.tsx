import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Brain, Cloud, Eye, Database, ArrowRight } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

const bentoItems = [
  {
    title: "About Me",
    content:
      "Hi! I'm Nabeel, a Software Engineer with a background in Computer Science specialising in Artificial Intelligence. I'm deeply interested in Machine Learning and Deep Learning, having architected GAN-based restoration models and CNN classifiers with 97.8% accuracy. I'm also actively expanding into Full-Stack Web Development.",
    icon: Brain,
    className: "md:col-span-2 md:row-span-2",
    extra: "Open to ML · AI · Full-Stack roles — Abu Dhabi & Remote",
  },
  {
    title: "Location",
    content: "Abu Dhabi, UAE",
    icon: MapPin,
    className: "",
    extra: "UTC+4 · Remote-friendly",
  },
  {
    title: "Focus",
    content: "Machine Learning · Computer Vision · AI Systems · Full-Stack Web",
    icon: Eye,
    className: "md:col-span-2",
    extra: "CNN · GANs · React · Node.js",
  },
  {
    title: "Preferred Roles",
    content: "ML Engineer · AI Engineer · Web Dev Engineer",
    icon: Briefcase,
    className: "md:col-span-2",
    extra: "Open to internships and full-time positions",
  },
  {
    title: "Tech Focus",
    content: "Python · TensorFlow · PyTorch · React · TypeScript · Node.js · Tailwind · Next.js",
    icon: Database,
    className: "md:col-span-2",
    extra: "Also: SQL · Streamlit · AWS · Azure · Git",
  },
  {
    title: "Domain",
    content: "ML · Deep Learning · AI Development · Full-Stack Web",
    icon: Cloud,
    className: "",
    extra: "Computer Vision · NLP · GIS · Security",
  },
];

export function AboutSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Building intelligent systems from satellite pixels to cloud workloads"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bentoItems.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            onHoverStart={() => setHovered(item.title)}
            onHoverEnd={() => setHovered(null)}
            animate={hovered === item.title ? { scale: 1.025 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            className={`group liquid-glass rounded-3xl p-6 cursor-default ${item.className}`}
          >
            {/* Icon */}
            <motion.div
              animate={hovered === item.title ? { scale: 1.1, rotate: 8 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4"
            >
              <item.icon className="w-5 h-5 text-white/75" />
            </motion.div>

            <h3 className="font-poppins font-medium text-white text-base mb-2">{item.title}</h3>
            <p className="text-white/52 text-sm leading-relaxed">{item.content}</p>

            {/* Hover reveal */}
            <AnimatePresence>
              {hovered === item.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/38 italic">{item.extra}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
