import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  details?: string[];
  skills?: string[];
  impact?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Intern",
    organization: "Qlub",
    period: "Jan 2025 – Aug 2025",
    description:
      "Supported API-linked payment integration across 85+ restaurants.",
    details: [
      "Performed SQL queries to verify partner data integrity and validate production table mappings",
      "Created detailed data-mapping documentation and assisted in resolving API–database mismatches during integration testing",
    ],
    skills: ["SQL", "REST APIs", "Data Validation", "Documentation"],
    impact:
      "Enhanced transaction reliability and reduced data mismatches in payment flows",
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey"
    >
      <div className="grid gap-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            variants={itemVariants}
          >
            <motion.div
              className="glass p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
              )}

              {/* Details */}
              {item.details && (
                <ul className="space-y-2 mb-4">
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              {item.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Impact */}
              {item.impact && (
                <p className="text-sm text-foreground font-medium">
                  💡 {item.impact}
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
