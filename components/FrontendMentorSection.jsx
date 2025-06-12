"use client";
import frontEndMentor from "@/styles/components/frontEndMentor.module.scss";
import { motion } from "motion/react";
import { SiFrontendmentor } from "react-icons/si";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function FrontendMentorSection() {
  return (
    <motion.div
      className={frontEndMentor.container}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        delay: 0.3,
        x: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 1.2, ease: "easeOut" },
      }}
    >
      <div className={`${frontEndMentor.content} ${dosis.className}`}>
        <div>
          <span>See My</span>
          <span>Frontend Builds </span>
          <span>on</span>
        </div>
      </div>
    </motion.div>
  );
}

export default FrontendMentorSection;
