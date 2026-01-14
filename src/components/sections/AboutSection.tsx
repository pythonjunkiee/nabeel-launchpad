import { motion, Variants } from "framer-motion";
import { MapPin, Briefcase, Brain, Cloud, Eye, Database } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

const bentoItems = [
  {
    title: "About Me",
    content:
      "I'm a Machine Learning, AI-Development and Web development engineer with a passion for building intelligent systems. I specialize in Deep Learning, CNN architectures, and end-to-end ML pipelines and being better than salwa at everything .",
    icon: Brain,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Location",
    content: "Abu Dhabi, UAE",
    icon: MapPin,
    className: "",
  },
  {
    title: "Specialization",
    content: "Computer Vision & ML",
    icon: Eye,
    className: "",
  },
  {
    title: "Preferred Roles",
    content: "ML Engineer, AI Engineer, Web Dev Engineer",
    icon: Briefcase,
    className: "md:col-span-2",
  },
  {
    title: "Tech Focus",
    content: "Python, TensorFlow, PyTorch, React, TypeScript, Node.js, Tailwind CSS, Next.js",
    icon: Database,
    className: "md:col-span-2",
  },
  {
    title: "Domain",
    content: "Cloud Computing & AI Systems",
    icon: Cloud,
    className: "",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Building intelligent systems from satellite pixels to cloud workloads"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className={`group relative p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300 ${item.className}`}
          >
            {/* Icon */}
            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
