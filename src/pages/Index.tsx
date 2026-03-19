import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useTheme } from "@/contexts/ThemeContext";

// Sidebar widths (px): left-4 margin (16) + sidebar width + 12px gap
const SIDEBAR_EXPANDED  = 16 + 192 + 12; // = 220px
const SIDEBAR_COLLAPSED = 16 + 68  + 12; // = 96px

const Index = () => {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : true
  );
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);

    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });

    const mq = window.matchMedia("(min-width: 768px)");
    const onMQ = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onMQ);

    return () => {
      window.removeEventListener("mousemove", onMove);
      mq.removeEventListener("change", onMQ);
    };
  }, []);

  const contentPaddingLeft = isDesktop
    ? navCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED
    : 0;

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden font-poppins"
      style={{ "--radius": "1rem" } as React.CSSProperties}
    >
      {/* ── Fixed video background ── */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Overlay ── */}
      <div className={`fixed inset-0 z-[1] transition-colors duration-500 ${theme === "dark" ? "bg-black/50" : "bg-white/78"}`} />

      {/* ── WebGL smoke ── */}
      <div className="fixed inset-0 z-[2] pointer-events-none opacity-[0.26]">
        <SmokeBackground smokeColor="#cccccc" />
      </div>

      {/* ── Mouse-tracking glow ── */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background: theme === "dark"
            ? `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.045), transparent 50%)`
            : `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.025), transparent 50%)`,
        }}
      />

      {/* ── Left sidebar nav — z-50 ── */}
      <GlassNavbar
        collapsed={navCollapsed}
        onToggle={() => setNavCollapsed((v) => !v)}
      />

      {/* ── Page content — shifts right to avoid sidebar overlap ── */}
      <motion.main
        className="relative z-10"
        animate={{ paddingLeft: contentPaddingLeft }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
