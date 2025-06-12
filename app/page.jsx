import PersonalCardProfile from "@/components/PersonalCardProfile";
import FrontendMentorSection from "@/components/frontendMentorSection";
import Welcoming from "@/components/welcoming";
import PhraseSection from "@/components/phraseSection";
import SkillAndToolsSection from "@/components/SkillAndToolsSection";
import LetsworkTogether from "@/components/letsworkTogether";
import RightSideMenu from "@/components/rightSideMenu";
import LastSection from "@/components/LastSection";

const HomePage = () => {
  return (
    <>
      <PersonalCardProfile />
      <FrontendMentorSection />
      <Welcoming />
      <PhraseSection />
      <SkillAndToolsSection />
      <LetsworkTogether />
      <RightSideMenu />
      <LastSection />
    </>
  );
};

export default HomePage;
