"use client";
import rightSideMenu from "@/styles/components/rightSideMenu.module.scss";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Dosis } from "next/font/google";
import { RiHome9Line } from "react-icons/ri";

import { PiSuitcase } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsFileEarmarkPerson } from "react-icons/bs";

import { VscTools } from "react-icons/vsc";

import usebuttonStore from "@/store/buttonStore";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function RightSideMenu() {
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <motion.div
      className={rightSideMenu.container}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeOut" },
      }}
    >
      <nav className={`${rightSideMenu.content}`}>
        {/* HOME */}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.1, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_home} ${dosis.className}`}
          onClick={showHome}
        >
          <RiHome9Line className={rightSideMenu.content_icon} />
          <span className={rightSideMenu.content_text}>HOME</span>
        </motion.button>
        {/* ABOUT */}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.2, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={
            aboutSection
              ? `${rightSideMenu.selected} ${dosis.className}`
              : `${rightSideMenu.content_about} ${dosis.className}`
          }
          onClick={showAbout}
        >
          <BsFileEarmarkPerson className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>ABOUT</span>
        </motion.button>
        {/*Projects*/}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={
            showCaseSection
              ? `${rightSideMenu.selected} ${dosis.className}`
              : `${rightSideMenu.content_showcase} ${dosis.className}`
          }
          onClick={showShowCase}
        >
          <PiSuitcase className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>PROJECTS</span>
        </motion.button>
        {/* SKILLS */}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={
            skillsSection
              ? `${rightSideMenu.selected} ${dosis.className}`
              : `${rightSideMenu.content_skills} ${dosis.className}`
          }
          onClick={showSkills}
        >
          <VscTools className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>SKILLS</span>
        </motion.button>
        {/*CONTACT*/}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.6, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={
            contactSection
              ? `${rightSideMenu.selected} ${dosis.className}`
              : `${rightSideMenu.content_contact} ${dosis.className}`
          }
          onClick={showContact}
        >
          <MdConnectWithoutContact className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>CONTACT</span>
        </motion.button>
      </nav>
    </motion.div>
  );
}

export default RightSideMenu;
