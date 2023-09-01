import data from "../../public/data.json";

import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import EducationSection from "@/components/sections/EducationSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hassan Attar - Portfolio</title>
        <meta
          name="description"
          content="I'm a Web Developer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing projects like Natours API, Fitness Tracker and more."
        />

        <meta
          name="keywords"
          content="Hassan Attar, Hassan, Attar, HassanAttar, Hasan Attar, HasanAttar, Hasan, Developer, Software Developer, Web, Web Developer, Full-stack web developer"
        />
        <meta name="author" content="Hassan Attar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hassan Attar - Portfolio" />
        <meta
          property="og:description"
          content="I'm a Web Developer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing projects like Natours API, Fitness Tracker and more."
        />
        <meta
          property="og:image"
          content="https://hassanattar.com/ha-logo.png"
        />
        <meta property="og:url" content="https://hassanattar.com" />

        <meta property="twitter:title" content="Hassan Attar - Portfolio" />
        <meta
          property="twitter:description"
          content="I'm a Web Developer with expertise in JavaScript, TypeScript, Java, C++, PHP, HTML, CSS, and various web development technologies. Explore my portfolio showcasing projects like Natours API, Fitness Tracker and more."
        />
        <meta
          property="twitter:image"
          content="https://hassanattar.com/ha-logo.png"
        />
        <meta property="twitter:url" content="https://hassanattar.com" />
      </Head>

      <HeroSection />
      <SkillsSection skills={data.skills} />
      <PortfolioSection projects={data.projects} />
      <EducationSection edu={data.education} />
      <AboutMeSection aboutMe={data.aboutMe} />
    </>
  );
}
