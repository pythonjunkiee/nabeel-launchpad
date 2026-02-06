import { motion, Variants } from "framer-motion";
import {
  Code,
  Brain,
  Wrench,
  Layers,
  Award,
  ExternalLink,
} from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  link?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "ML / DL & Libraries",
    icon: Brain,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    skills: [
      "Wireshark",
      "Nessus",
      "IBM QRadar",
      "Splunk",
      "Kali Linux",
      "UFW",
      "Palo Alto",
      "VirtualBox",
    ],
  },
  {
    title: "Platforms & Infrastructure",
    icon: Layers,
    skills: [
      "Windows Server",
      "Active Directory",
      "Linux",
      "Microsoft Azure",
      "AWS",
      "Google Colab",
      "VS Code",
      "Git/GitHub",
    ],
  },
  {
    title: "Domains",
    icon: Layers,
    skills: [
      "SIEM",
      "MITRE ATT&CK",
      "Threat Hunting",
      "Incident Response",
      "Vulnerability Assessment",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Cloud Computing",
    ],
  },
];

const certifications: Certification[] = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Expires Oct 2027",
    skills: [
      "MySQL & NoSQL",
      "Exadata",
      "Cloud Resiliency",
      "OCI Analytics",
      "AI Data Services",
    ],
    link: "#",
  },
  {
    title: "Entrepreneurship: Preparing for Launch",
    issuer: "University of Illinois Urbana-Champaign",
    date: "Coursera",
    link: "#",
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Certifications"
      subtitle="Technologies and tools I work with"
    >
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div variants={itemVariants}>
        <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -4 }}
              className="group glass p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.date}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}