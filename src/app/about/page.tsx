import AboutHero from "@/components/AboutHero";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import EducationSection from "@/components/EducationSection";

export default function AboutPage() {
  return (
    <div className="text-xl">
      <AboutHero />

      <SkillsSection />

      <CareerSection />

      <EducationSection />
    </div>
  );
}
