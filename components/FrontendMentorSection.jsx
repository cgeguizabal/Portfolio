"use client";
import frontEndMentor from "@/styles/components/frontEndMentor.module.scss";
import { motion } from "motion/react";

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
    ></motion.div>
  );
}

export default FrontendMentorSection;
