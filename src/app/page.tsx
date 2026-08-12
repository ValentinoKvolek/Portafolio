import { TitleBar } from "@/components/TitleBar";
import { StatusBar } from "@/components/StatusBar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="crt-overlay h-svh flex flex-col overflow-hidden bg-bg">
      <TitleBar />
      <main id="scroll-main" className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-8">
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
      <StatusBar />
    </div>
  );
}
