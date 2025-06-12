"use client";
import phraseSection from "@/styles/components/phraseSection.module.scss";
import { motion } from "motion/react";

function PhraseSection() {
  return (
    <motion.div
      className={phraseSection.container}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        delay: 0.2,
        y: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1, ease: "easeOut" },
      }}
    ></motion.div>
  );
}

export default PhraseSection;
