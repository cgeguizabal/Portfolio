"use client";
import showcase from "@/styles/components/showcase.module.scss";
import { motion } from "motion/react";

function Showcase() {
  return (
    <motion.div
      className={showcase.container}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 300,
        transition: { duration: 1, ease: "easeOut" },
      }}
      transition={{
        delay: 2,
        y: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 1.7, ease: "easeOut" },
      }}
    >
      <div className={showcase.content}>
        <h2>HELLO SHOWCASE</h2>
      </div>
    </motion.div>
  );
}

export default Showcase;
