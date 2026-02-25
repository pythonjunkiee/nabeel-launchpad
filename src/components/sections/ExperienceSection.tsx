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
    title: "Security Intelligence & Analytics Trainee",
    organization: "Wipro",
    period: "Jan 2026 – Present",
    details: [
      "Built and managed virtualized security labs using Linux, Windows Server, Kali Linux, and VirtualBox for hands-on security testing in simulated enterprise environments",
      "Analyzed network traffic and protocols (DNS, HTTP, FTP, TCP/IP) using Wireshark to identify anomalies and credential exposure in lab-based and enterprise-simulated scenarios",
      "Configured and administered Windows Server services, including Active Directory, DNS, DHCP, and authentication controls",
      "Performed log analysis and security monitoring across Windows, Linux, proxy, firewall, and endpoint logs to detect suspicious activity",
      "Worked with SIEM platforms (IBM QRadar & Splunk) for log ingestion, correlation rules, alerting, offense management, and reporting",
      "Conducted vulnerability assessments using Nessus, prioritizing risks based on CVSS scoring and NIST / CIS benchmarks",
      "Applied the MITRE ATT&CK framework and threat hunting techniques to detect malware, brute-force attacks, phishing, and lateral movement",
      "Assisted in incident response workflows, firewall and WAF monitoring (UFW, Palo Alto), and cloud security fundamentals on Microsoft Azure",
    ],
    skills: ["SIEM", "Wireshark", "Nessus", "MITRE ATT&CK", "Windows Server", "Linux", "Azure", "Splunk", "QRadar"],
    impact: "Strengthened security monitoring capabilities and threat detection across enterprise environments",
  },
  {
    title: "Intern",
    organization: "Qlub",
    period: "Jan 2025 – Oct 2025",
    details: [
      "Supported API-linked payment integration across 85+ restaurants",
      "Performed SQL queries to verify partner data integrity and validate production table mappings",
      "Created detailed data-mapping documentation and assisted in resolving API–database mismatches during integration testing",
    ],
    skills: ["SQL", "REST APIs", "Data Validation", "Documentation"],
    impact: "Enhanced transaction reliability and reduced data mismatches in payment flows",
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My professional journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={itemVariants}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

              {/* Period badge */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-mono">{item.period}</span>
              </div>

              {/* Title & org */}
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">{item.organization}</p>

              {/* Concise details */}
              {item.details && (
                <ul className="space-y-1.5 mb-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              {item.skills && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Impact */}
              {item.impact && (
                <p className="text-xs text-muted-foreground italic mt-2">💡 {item.impact}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
