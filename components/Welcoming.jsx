"use client";

import welcoming from "@/styles/components/welcoming.module.scss";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
      transition={{
        delay: 0.2,
        x: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 1.7, ease: "easeOut" },
      }}
    ></motion.div>
  );
}
