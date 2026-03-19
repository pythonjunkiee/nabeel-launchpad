import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nxbeel/", icon: Linkedin },
  { name: "GitHub",   href: "https://github.com/pythonjunkiee",    icon: Github  },
  { name: "Email",    href: "mailto:nxbeelanwar@gmail.com",         icon: Mail    },
];

export function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="font-poppins font-medium text-white text-base tracking-tight">
              Nabeel Anwar{" "}
              <em className="font-serif italic font-normal text-white/60" style={{ fontStyle: "italic" }}>
                Siddiqui
              </em>
            </h3>
            <p className="text-white/40 text-xs">Software Developer · AI Engineer</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:scale-105 transition-all"
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-xs text-white/40">Open to Roles</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Nabeel Anwar Siddiqui. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
