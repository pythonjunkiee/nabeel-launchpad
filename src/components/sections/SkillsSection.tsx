import { motion } from "framer-motion";
import { Code, Brain, Wrench, Layers, Globe } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui", "React Router", "TanStack Query", "REST APIs", "Supabase"],
  },
  {
    title: "ML / DL & Libraries",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    skills: ["Wireshark", "Nessus", "IBM QRadar", "Splunk", "Kali Linux", "UFW", "Palo Alto", "VirtualBox"],
  },
  {
    title: "Platforms & Infrastructure",
    icon: Layers,
    skills: ["Windows Server", "Active Directory", "Linux", "Microsoft Azure", "AWS", "Google Colab", "VS Code", "Git/GitHub"],
  },
  {
    title: "Domains",
    icon: Layers,
    skills: ["SIEM", "MITRE ATT&CK", "Threat Hunting", "Incident Response", "Vulnerability Assessment", "Machine Learning", "Deep Learning", "Computer Vision", "Cloud Computing", "Full-Stack Development"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="liquid-glass rounded-3xl p-6 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <category.icon className="w-4 h-4 text-white/70" />
              </div>
              <h3 className="font-poppins font-medium text-white text-sm">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/65 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
