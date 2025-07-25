"use client";
import letsworkTogether from "@/styles/components/letsworkTogether.module.scss";
import { motion } from "motion/react";
import { Dosis } from "next/font/google";
import { PiShareNetworkBold } from "react-icons/pi";
import usebuttonStore from "@/store/buttonStore";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function LetsworkTogether() {
  const { showContact } = usebuttonStore();
  return (
    <motion.button
      className={letsworkTogether.container}
      initial={{ opacity: 0, scale: 0.8, y: 75 }}
      exit={{ opacity: 0, y: 100, transition: { duration: 1 } }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        delay: 0,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.3, ease: "easeOut" },
      }}
      onClick={showContact}
    >
      <div className={letsworkTogether.content}>
        <div className={`${letsworkTogether.content_text} ${dosis.className}`}>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              y: { duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 2, ease: "easeOut" },
            }}
            className={letsworkTogether.content_text_1}
          >
            Let’s create
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              y: { duration: 1, ease: "easeInOut" },
              opacity: { duration: 2, ease: "easeOut" },
            }}
            className={letsworkTogether.content_text_2}
          >
            Something great
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              y: { duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 2, ease: "easeOut" },
            }}
            className={letsworkTogether.content_text_3}
          >
            Together.
          </motion.span>
        </div>
        <div>
          <PiShareNetworkBold className={letsworkTogether.content_icon} />
        </div>
      </div>
    </motion.button>
  );
}

export default LetsworkTogether;
