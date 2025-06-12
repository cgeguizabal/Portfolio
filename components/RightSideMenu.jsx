"use client";
import rightSideMenu from "@/styles/components/rightSideMenu.module.scss";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
    ></motion.div>
  );
}

export default RightSideMenu;
