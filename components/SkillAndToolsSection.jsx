"use client";
import skillAndToolsSection from "@/styles/components/skillAndTools.module.scss";
import { motion } from "motion/react";
import { Dosis } from "next/font/google";
import { GrJs, GrMysql, GrTechnology } from "react-icons/gr";
import {
  SiCsswizardry,
  SiNetlify,
  SiFirebase,
  SiExpress,
  SiNodemon,
  SiVite,
  SiInsomnia,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiGithub,
  SiCanva,
  SiPostman,
} from "react-icons/si";
import { RiNextjsLine, RiVercelLine, RiTailwindCssFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { PiFramerLogoLight } from "react-icons/pi";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  FaReact,
  FaHtml5,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaSass,
  FaWordpressSimple,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { BiLogoMongodb } from "react-icons/bi";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function SkillAndToolsSection() {
  return (
    <motion.div
      className={skillAndToolsSection.container}
      initial={{ opacity: 0, scale: 0.8, y: 75 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 1 } }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        delay: 0.2,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.3, ease: "easeOut" },
      }}
    >
      <div className={skillAndToolsSection.content}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            y: { duration: 1.2, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${skillAndToolsSection.content_text} `}
        >
          <h2
            className={`${skillAndToolsSection.content_text_1} ${dosis.className}`}
          >
            My Skill <br />
            and Tools
          </h2>
          <GrTechnology className={skillAndToolsSection.content_text_2} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            y: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={skillAndToolsSection.content_icons}
        >
          <ul className={skillAndToolsSection.content_icons_list}>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <SiCsswizardry />
            </li>
            <li>
              <GrJs />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <RiNextjsLine />
            </li>
            <li>
              <FaPhp />
            </li>
            <li>
              <TbBrandTypescript />
            </li>
            <li>
              <FaAws />
            </li>
            <li>
              <SiNetlify />
            </li>
            <li>
              <RiVercelLine />
            </li>
            <li>
              <SiFirebase />
            </li>
            <li>
              <SiExpress />
            </li>
            <li>
              <FaLaravel />
            </li>
            <li>
              <FaNodeJs />
            </li>
            <li>
              <SiNodemon />
            </li>
            <li>
              <GiBearFace />
            </li>
            <li>
              <FaSass />
            </li>
            <li>
              <RiTailwindCssFill />
            </li>
            <li>
              <SiVite />
            </li>
            <li>
              <FaWordpressSimple />
            </li>
            <li>
              <SiInsomnia />
            </li>
            <li>
              <SiPostman />
            </li>
            <li>
              <TbApi />
            </li>
            <li>
              <FaNpm />
            </li>
            <li>
              <TbBrandFramerMotion />
            </li>
            <li>
              <GrMysql />
            </li>
            <li>
              <BiLogoMongodb />
            </li>
            <li>
              <SiGithub />
            </li>
            <li>
              <PiFramerLogoLight />
            </li>
            <li>
              <FaFigma />
            </li>
            <li>
              <SiAdobeaftereffects />
            </li>
            <li>
              <SiAdobeaudition />
            </li>
            <li>
              <SiAdobelightroom />
            </li>
            <li>
              <SiAdobephotoshop />
            </li>
            <li>
              <SiAdobeillustrator />
            </li>
            <li>
              <SiAdobeillustrator />
            </li>
            <li>
              <SiAdobepremierepro />
            </li>
            <li>
              <SiAdobexd />
            </li>
            <li>
              <SiCanva />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <SiCsswizardry />
            </li>
            <li>
              <GrJs />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <RiNextjsLine />
            </li>
            <li>
              <FaPhp />
            </li>
            <li>
              <TbBrandTypescript />
            </li>
            <li>
              <FaAws />
            </li>
            <li>
              <SiNetlify />
            </li>
            <li>
              <RiVercelLine />
            </li>
            <li>
              <SiFirebase />
            </li>
            <li>
              <SiExpress />
            </li>
            <li>
              <FaLaravel />
            </li>
            <li>
              <FaNodeJs />
            </li>
            <li>
              <SiNodemon />
            </li>
            <li>
              <GiBearFace />
            </li>
            <li>
              <FaSass />
            </li>
            <li>
              <RiTailwindCssFill />
            </li>
            <li>
              <SiVite />
            </li>
            <li>
              <FaWordpressSimple />
            </li>
            <li>
              <SiInsomnia />
            </li>
            <li>
              <SiPostman />
            </li>
            <li>
              <TbApi />
            </li>
            <li>
              <FaNpm />
            </li>
            <li>
              <TbBrandFramerMotion />
            </li>
            <li>
              <GrMysql />
            </li>
            <li>
              <BiLogoMongodb />
            </li>
            <li>
              <SiGithub />
            </li>
            <li>
              <PiFramerLogoLight />
            </li>
            <li>
              <FaFigma />
            </li>
            <li>
              <SiAdobeaftereffects />
            </li>
            <li>
              <SiAdobeaudition />
            </li>
            <li>
              <SiAdobelightroom />
            </li>
            <li>
              <SiAdobephotoshop />
            </li>
            <li>
              <SiAdobeillustrator />
            </li>
            <li>
              <SiAdobeillustrator />
            </li>
            <li>
              <SiAdobepremierepro />
            </li>
            <li>
              <SiAdobexd />
            </li>
            <li>
              <SiCanva />
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillAndToolsSection;
