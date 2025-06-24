"use client";

import welcoming from "@/styles/components/welcoming.module.scss";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function Welcoming() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className={welcoming.container}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 1 } }}
      transition={{
        delay: 0,
        y: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 1.7, ease: "easeOut" },
      }}
    >
      <div className={welcoming.content}>
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, y: -110 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 1.5, ease: "easeOut" },
          }}
          className={welcoming.logo}
        >
          <img
            className={welcoming.logo_img}
            src="images/Logo.png"
            alt="Logo"
          />
        </motion.div>
        {/* Tittle*/}
        {/* <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            y: { duration: 1.7, ease: "easeInOut" },
            opacity: { duration: 2.5, ease: "easeOut" },
          }}
        >
          <h3 className={`${welcoming.text} ${dosis.className}`}>
            Web Developer
          </h3>
        </motion.div> */}
      </div>
    </motion.div>
  );
}
