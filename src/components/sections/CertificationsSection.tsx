import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { SectionWrapper, itemVariants } from "@/components/SectionWrapper";

const certifications = [
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2024 (Expires Oct 2027)",
    credentialUrl: "https://www.linkedin.com/in/nxbeel/",
  },
  {
    name: "Entrepreneurship: Preparing for Launch",
    issuer: "University of Illinois Urbana-Champaign (Coursera)",
    date: "2023",
    credentialUrl: "https://www.linkedin.com/in/nxbeel/",
  },
  {
    name: "AWS Academy Graduate – Introduction to Cloud Semester 1",
    issuer: "Amazon Web Services Training and Certification",
    date: "Mar 2024",
    credentialUrl: "https://www.linkedin.com/in/nxbeel/",
  },
  {
    name: "Python and Artificial Intelligence Bootcamp",
    issuer: "DevTown & GDSC KIIT Chapter",
    date: "2022",
    credentialUrl: "https://cert.devtown.in.tech/verify/iRFhu",
  },
];

export function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and certifications I've earned"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group liquid-glass rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                <Award className="w-5 h-5 text-white/70" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-poppins font-medium text-white text-sm leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-white/55 text-xs mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 text-xs text-white/35">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:scale-105 transition-all flex-shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
