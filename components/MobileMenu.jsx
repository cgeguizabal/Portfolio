"use client";
import mobileMenu from "@/styles/components/mobileMenu.module.scss";
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
      className={mobileMenu.container}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeOut" },
      }}
    >
      <nav className={`${mobileMenu.content}`}>
        {/* HOME */}
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.1, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${mobileMenu.content_home} ${dosis.className}`}
          onClick={showHome}
        >
          <RiHome9Line className={mobileMenu.content_icon} />
          
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
              ? `${mobileMenu.selected} ${dosis.className}`
              : `${mobileMenu.content_about} ${dosis.className}`
          }
          onClick={showAbout}
        >
          <BsFileEarmarkPerson className={mobileMenu.content_icon} />

       
        </motion.button>
        {/*SHOWCASE*/}
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
              ? `${mobileMenu.selected} ${dosis.className}`
              : `${mobileMenu.content_showcase} ${dosis.className}`
          }
          onClick={showShowCase}
        >
          <PiSuitcase className={mobileMenu.content_icon} />

        
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
              ? `${mobileMenu.selected} ${dosis.className}`
              : `${mobileMenu.content_skills} ${dosis.className}`
          }
          onClick={showSkills}
        >
          <VscTools className={mobileMenu.content_icon} />

          
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
              ? `${mobileMenu.selected} ${dosis.className}`
              : `${mobileMenu.content_contact} ${dosis.className}`
          }
          onClick={showContact}
        >
          <MdConnectWithoutContact className={mobileMenu.content_icon} />

          
        </motion.button>
      </nav>
    </motion.div>
  );
}

export default RightSideMenu;
