import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nxbeel/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/pythonjunkiee",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:nxbeelanwar@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-display text-xl font-bold">
              Nabeel Anwar Siddiqui
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Developer Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Status & Badges */}
          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />
              </div>
              <span className="text-sm text-muted-foreground">
                Open to Roles
              </span>
            </div>

            {/* LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/nxbeel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <ExternalLink className="w-2.5 h-2.5 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-primary">
                View on LinkedIn
              </span>
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
}