import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

const educationData = [
  {
    title: "B.Tech, Computer Science Engineering",
    organization: "KIIT University",
    location: "Bhubaneswar, India",
    period: "2021 – 2025",
    details: ["Focus areas: Machine Learning, AI, Web Development, Cloud Computing"],
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
    <SectionWrapper id="education" title="Education" subtitle="My academic background">
      <div className="grid gap-4">
        {educationData.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            variants={itemVariants}
            className="liquid-glass rounded-3xl p-6 md:p-8 hover:scale-[1.01] transition-transform duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors mt-0.5">
                <GraduationCap className="w-5 h-5 text-white/70" />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-medium text-white text-base mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium mb-3">{item.organization}</p>
                <div className="flex flex-wrap gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
                {item.details && (
                  <ul className="mt-3 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                        <span className="text-white/30 mt-0.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
