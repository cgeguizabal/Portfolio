"use client";

import lastSection from "@/styles/components/lastSection.module.scss";
import { motion } from "motion/react";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function LastSection() {
  const containerDuration = 0;
  const containerDelay = 0;
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
    >
      <div className={`${lastSection.content} ${dosis.className}`}>
        <div className={lastSection.content_text}>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: containerDelay + containerDuration,
              y: { duration: 1.6, ease: "easeInOut" },
              opacity: { duration: 2.6, ease: "easeOut" },
            }}
            className={lastSection.content_text_1}
          >
            Check My
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: containerDelay + containerDuration,
              y: { duration: 1.4, ease: "easeInOut" },
              opacity: { duration: 2.4, ease: "easeOut" },
            }}
            className={lastSection.content_text_2}
          >
            Repositories{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: containerDelay + containerDuration,
              y: { duration: 1.2, ease: "easeInOut" },
              opacity: { duration: 2.2, ease: "easeOut" },
            }}
            className={lastSection.content_text_3}
          >
            on
          </motion.span>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: containerDelay + containerDuration,
            y: { duration: 1, ease: "easeInOut" },
            opacity: { duration: 2, ease: "easeOut" },
          }}
          href="https://github.com/cgeguizabal"
          target="_blank"
          rel="noopener noreferrer"
          className={lastSection.button}
        >
          <h3>GitHub</h3>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default LastSection;
