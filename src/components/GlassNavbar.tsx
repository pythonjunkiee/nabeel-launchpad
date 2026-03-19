import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Briefcase, GraduationCap, Award,
  FolderKanban, Wrench, Mail, FileText, X, Menu,
  Sun, Moon, ChevronLeft,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "About",          href: "#about",          icon: User },
  { name: "Experience",     href: "#experience",     icon: Briefcase },
  { name: "Education",      href: "#education",      icon: GraduationCap },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Projects",       href: "#projects",       icon: FolderKanban },
  { name: "Skills",         href: "#skills",         icon: Wrench },
  { name: "Contact",        href: "#contact",        icon: Mail },
];

interface GlassNavbarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function GlassNavbar({ collapsed, onToggle }: GlassNavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* Labels: fade out fast, fade in after width has opened */
  const labelStyle = (isCollapsed: boolean): React.CSSProperties => ({
    opacity: isCollapsed ? 0 : 1,
    maxWidth: isCollapsed ? 0 : "10rem",
    overflow: "hidden",
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
    transition: isCollapsed
      ? "opacity 0.1s ease, max-width 0.25s ease"
      : "opacity 0.22s ease 0.14s, max-width 0.3s ease",
  });

  return (
    <>
      {/* ── Desktop: left floating sidebar ── */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <motion.aside
          initial={{ x: -80, opacity: 0, width: 192 }}
          animate={{ x: 0, opacity: 1, width: collapsed ? 68 : 192 }}
          transition={{
            x:       { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
            opacity: { duration: 0.6 },
            width:   { type: "spring", stiffness: 280, damping: 28 },
          }}
          className="flex flex-col liquid-glass-strong rounded-3xl py-3 overflow-hidden"
        >
          {/* Brand + collapse toggle */}
          <div className="px-2 pb-2 mb-1 border-b border-white/10">
            <div className={`flex items-center ${collapsed ? "flex-col gap-1.5" : "gap-1"}`}>
              <button
                onClick={() => scrollTo("#home")}
                title="Home"
                className={`flex items-center gap-2.5 flex-1 px-1.5 py-1.5 rounded-xl hover:bg-white/10 transition-colors ${collapsed ? "justify-center w-full" : ""}`}
              >
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white leading-none">N</span>
                </div>
                <span className="text-white font-semibold text-sm tracking-tighter" style={labelStyle(collapsed)}>
                  Nabeel
                </span>
              </button>

              {/* Collapse toggle — always visible at top */}
              <button
                onClick={onToggle}
                title={collapsed ? "Expand" : "Collapse"}
                className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-colors"
              >
                <motion.div
                  animate={{ rotate: collapsed ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-0.5 px-2 flex-1 py-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <div key={link.name} className="relative">
                  {active && (
                    <motion.div
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 rounded-xl bg-white/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => scrollTo(link.href)}
                    title={collapsed ? link.name : undefined}
                    className={`relative w-full flex items-center gap-2.5 px-2 py-2 rounded-xl text-xs font-medium transition-colors ${
                      collapsed ? "justify-center" : ""
                    } ${active ? "text-white" : "text-white/55 hover:text-white hover:bg-white/10"}`}
                  >
                    <link.icon className="w-4 h-4 flex-shrink-0" />
                    <span style={labelStyle(collapsed)}>{link.name}</span>
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Bottom actions */}
          <div className="px-2 pt-2 border-t border-white/10 mt-1 flex flex-col gap-0.5">
            {/* Resume */}
            <a
              href="/resume"
              title={collapsed ? "Resume" : undefined}
              className={`flex items-center gap-2.5 px-2 py-2 rounded-xl text-xs font-medium text-white/55 hover:text-white hover:bg-white/10 transition-colors w-full ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span style={labelStyle(collapsed)}>Resume</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={collapsed ? (theme === "dark" ? "Light mode" : "Dark mode") : undefined}
              className={`flex items-center gap-2.5 px-2 py-2 rounded-xl text-xs font-medium text-white/55 hover:text-white hover:bg-white/10 transition-colors w-full ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 flex-shrink-0" />
                  </motion.span>
                ) : (
                  <motion.span key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 flex-shrink-0" />
                  </motion.span>
                )}
              </AnimatePresence>
              <span style={labelStyle(collapsed)}>
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

          </div>
        </motion.aside>
      </div>

      {/* ── Mobile: theme toggle + hamburger ── */}
      <div className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2">
        <motion.button
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={toggleTheme}
          className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.button>

        <motion.button
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-16 right-4 z-50 md:hidden liquid-glass-strong rounded-3xl p-4 w-56"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = activeSection === link.href.slice(1);
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium text-left transition-all ${
                        active ? "bg-white/20 text-white" : "text-white/55 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <link.icon className="w-4 h-4 flex-shrink-0" />
                      {link.name}
                    </button>
                  );
                })}
                <div className="h-px bg-white/10 my-1" />
                <a
                  href="/resume"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium text-white/55 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
