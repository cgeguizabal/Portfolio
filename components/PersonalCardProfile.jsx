"use client"; // Must be first line

import personalCardProfile from "../styles/components/personalCard.module.scss";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PersonalCardProfile() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // don't render on server at all

  return (
    <motion.div
      className={personalCardProfile.container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.5, ease: "easeOut" },
      }}
    >
      <div className={personalCardProfile.image}>
        <Image
          src="/images/photo-1.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className={personalCardProfile.image_profile}
          priority
        />
      </div>
    </motion.div>
  );
}
