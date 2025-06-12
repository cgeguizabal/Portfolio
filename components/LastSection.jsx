"use client";

import lastSection from "@/styles/components/lastSection.module.scss";
import { motion } from "motion/react";

function LastSection() {
  return (
    <motion.div
      className={lastSection.container}
      initial={{ opacity: 0, x: 100 }}
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
    ></motion.div>
  );
}

export default LastSection;
