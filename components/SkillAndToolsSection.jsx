"use client";
import skillAndToolsSection from "@/styles/components/skillAndTools.module.scss";
import { motion } from "motion/react";

function SkillAndToolsSection() {
  return (
    <motion.div
      className={skillAndToolsSection.container}
      initial={{ opacity: 0, scale: 0.8, y: 75 }}
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
    ></motion.div>
  );
}

export default SkillAndToolsSection;
