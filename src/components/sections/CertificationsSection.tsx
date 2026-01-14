import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { SectionWrapper, itemVariants } from "@/components/SectionWrapper";

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
}

const certifications: CertificationItem[] = [
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
    name: "AWS Academy Graduate - Introduction to Cloud Semester 1",
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
  {
    name: "IELTS Academic - Band 7.5 (CEFR Level C1)",
    issuer: "British Council / IDP / Cambridge Assessment",
    date: "Mar 2021",
  },
];

export function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and certifications I've earned"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mt-1">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
