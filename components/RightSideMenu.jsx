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

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function RightSideMenu() {
  const [isMounted, setIsMounted] = useState(false);

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
        delay: 0.2,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeOut" },
      }}
    >
      <div className={`${rightSideMenu.content}`}>
        {/* HOME */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            y: { duration: 1.1, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_home} ${dosis.className}`}
        >
          <RiHome9Line className={rightSideMenu.content_icon} />
          <span className={rightSideMenu.content_text}>HOME</span>
        </motion.div>
        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            y: { duration: 1.2, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_about} ${dosis.className}`}
        >
          <BsFileEarmarkPerson className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>ABOUT</span>
        </motion.div>
        {/*SHOWCASE*/}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            y: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_showcase} ${dosis.className}`}
        >
          <PiSuitcase className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>SHOWCASE</span>
        </motion.div>
        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            y: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_skills} ${dosis.className}`}
        >
          <VscTools className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>SKILLS</span>
        </motion.div>
        {/*CONTACT*/}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6,
            y: { duration: 1.6, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          className={`${rightSideMenu.content_contact} ${dosis.className}`}
        >
          <MdConnectWithoutContact className={rightSideMenu.content_icon} />

          <span className={rightSideMenu.content_text}>CONTACT</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RightSideMenu;
