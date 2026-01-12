import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description?: string;
  details?: string[];
  skills?: string[];
  impact?: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
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
  {
    type: "education",
    title: "B.Tech, Computer Science Engineering",
    organization: "KIIT University",
    period: "2021 – 2025",
    details: [
      "Focus areas: Machine Learning, AI, Web Development, Cloud Computing",
    ],
  },
  {
    type: "education",
    title: "Senior Secondary (12th)",
    organization: "The Model School, Abu Dhabi",
    period: "2020 – 2021",
  },
  {
    type: "education",
    title: "Secondary (10th)",
    organization: "The Model School, Abu Dhabi",
    period: "2018 – 2019",
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  className="glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {item.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {item.organization}
                  </p>

                  {/* Description */}
                  {item.description && (
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.description}
                    </p>
                  )}

                  {/* Details */}
                  {item.details && (
                    <ul
                      className={`space-y-2 mb-4 ${
                        index % 2 === 0 ? "md:text-left" : ""
                      }`}
                    >
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  {item.skills && (
                    <div
                      className={`flex flex-wrap gap-2 mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Impact */}
                  {item.impact && (
                    <p
                      className={`text-sm text-foreground font-medium ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      💡 {item.impact}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}