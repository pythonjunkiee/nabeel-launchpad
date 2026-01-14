import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, GraduationCap, Award, FolderKanban, Wrench, Mail, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-48"
        }`}
      >
        <div className="nav-glass rounded-2xl p-3 flex flex-col gap-2 shadow-lg shadow-primary/10">
          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-xl hover:bg-muted/50 transition-colors self-end mb-2"
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5 text-muted-foreground" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                title={isCollapsed ? link.name : undefined}
              >
                <link.icon className="w-4 h-4 flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px bg-border my-2" />

          {/* Resume Link */}
          <motion.a
            href="/resume"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={isCollapsed ? "Resume" : undefined}
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  Resume
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>

          {/* Theme Toggle */}
          <div className={`mt-2 ${isCollapsed ? "self-center" : ""}`}>
            <ThemeToggle />
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 nav-glass rounded-xl shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 z-40 nav-glass rounded-2xl p-4 md:hidden w-56"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.a>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
