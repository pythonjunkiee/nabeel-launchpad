import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
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
      "Analyzed network traffic and protocols (DNS, HTTP, FTP, TCP/IP) using Wireshark to identify anomalies and credential exposure",
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
      <div className="relative pl-6">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-white/15" />

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div key={`${item.title}-${index}`} variants={itemVariants} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-6 w-3 h-3 rounded-full bg-white/60 ring-4 ring-white/10" />

              <div className="liquid-glass rounded-3xl p-6 md:p-8">
                {/* Period */}
                <div className="flex items-center gap-2 text-xs text-white/40 mb-3 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>

                {/* Title & org */}
                <h3 className="font-poppins font-medium text-white text-lg mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm font-medium mb-5">{item.organization}</p>

                {/* Details */}
                {item.details && (
                  <ul className="space-y-2 mb-5">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-sm text-white/55 flex items-start gap-2">
                        <span className="text-white/30 mt-0.5 shrink-0">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span key={skill} className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Impact */}
                {item.impact && (
                  <p className="text-xs text-white/40 italic">→ {item.impact}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
