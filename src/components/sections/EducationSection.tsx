import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface EducationItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  details?: string[];
}

const educationData: EducationItem[] = [
  {
    title: "B.Tech, Computer Science Engineering",
    organization: "KIIT University",
    location: "Bhubaneswar, India",
    period: "2021 – 2025",
    details: [
      "Focus areas: Machine Learning, AI, Web Development, Cloud Computing",
    ],
  },
  {
    title: "Senior Secondary (12th)",
    organization: "The Model School",
    location: "Abu Dhabi, UAE",
    period: "2020 – 2021",
  },
  {
    title: "Secondary (10th)",
    organization: "The Model School",
    location: "Abu Dhabi, UAE",
    period: "2018 – 2019",
  },
];

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic background"
    >
      <div className="grid gap-6">
        {educationData.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            variants={itemVariants}
          >
            <motion.div
              className="glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mt-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {item.organization}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    {item.details && (
                      <ul className="mt-3 space-y-1">
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
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
