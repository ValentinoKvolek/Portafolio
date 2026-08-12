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
    <div className="crt-overlay min-h-screen bg-bg">
      <TitleBar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-16">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <StatusBar />
    </div>
  );
}
