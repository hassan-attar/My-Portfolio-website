import data from "../../public/data.json";

import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import EducationSection from "@/components/sections/EducationSection";
import AboutMeSection from "@/components/sections/AboutMeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection skills={data.skills} />
      <PortfolioSection projects={data.projects} />
      <EducationSection edu={data.education} />
      <AboutMeSection aboutMe={data.aboutMe} />
    </>
  );
}
