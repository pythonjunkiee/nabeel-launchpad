import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AchievementBadge } from "@/components/AchievementBadge";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      
      <Sidebar onCollapsedChange={setSidebarCollapsed} />
      
      <main 
        className="relative z-10 transition-all duration-300 md:ml-20"
        style={{ 
          marginLeft: sidebarCollapsed ? undefined : '220px',
        }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <AchievementBadge />
    </div>
  );
};

export default Index;