import HomeHero from "@/components/HomeHero";
import TechStack from "@/components/TechStack";
import HomeProjects from "@/components/HomeProjects";

export default function Home() {
  return (
    <div className="text-xl bg-white dark:bg-[#16171a]">
      <HomeHero />

      <TechStack />

      <HomeProjects />
    </div>
  );
}
