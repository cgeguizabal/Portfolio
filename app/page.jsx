"use client";
import PersonalCardProfile from "@/components/PersonalCardProfile";
import FrontendMentorSection from "@/components/FrontendMentorSection";
import Welcoming from "@/components/Welcoming";
import PhraseSection from "@/components/PhraseSection";
import SkillAndToolsSection from "@/components/SkillAndToolsSection";
import LetsworkTogether from "@/components/LetsworkTogether";
import RightSideMenu from "@/components/RightSideMenu";
import LastSection from "@/components/LastSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Showcase from "@/components/Showcase";
import SkillsAndTools from "@/components/SkillsAndTools";

import { AnimatePresence } from "motion/react";

import usebuttonStore from "@/store/buttonStore";
const HomePage = () => {
  const {
    aboutSection,
    welcomingSection,
    showCaseSection,
    skillsSection,
    contactSection,
    showHome,
    showAbout,
    showShowCase,
    showSkills,
    showContact,
  } = usebuttonStore();

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowWelcome(false), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <PersonalCardProfile />
      <FrontendMentorSection />
      <AnimatePresence mode="wait">
        {welcomingSection && <Welcoming key="welcoming" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {welcomingSection && <LetsworkTogether key="welcoming" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {welcomingSection && <SkillAndToolsSection key="welcoming" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {welcomingSection && <PhraseSection key="welcoming" />}
      </AnimatePresence>
      <RightSideMenu />
      <LastSection />
      <AnimatePresence mode="wait">
        {aboutSection && <About key="about" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showCaseSection && <Showcase key="showcase" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {contactSection && <Contact key="about" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {skillsSection && <SkillsAndTools key="skills" />}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
