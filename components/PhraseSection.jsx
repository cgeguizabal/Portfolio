"use client";
import phraseSection from "@/styles/components/phraseSection.module.scss";
import { motion } from "motion/react";
import { PiMountainsFill } from "react-icons/pi";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function PhraseSection() {
  const containerDuration = 0.7;
  const containerDelay = 0.3;
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
    >
      <div className={`${phraseSection.content} ${dosis.className}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: containerDelay + containerDuration,
            y: { duration: 1.8, ease: "easeInOut" },
            opacity: { duration: 2.6, ease: "easeOut" },
          }}
        >
          <PiMountainsFill className={phraseSection.content_icon} />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: containerDelay + containerDuration,
            y: { duration: 1.6, ease: "easeInOut" },
            opacity: { duration: 2.6, ease: "easeOut" },
          }}
          className={phraseSection.content_text_1}
        >
          Every good idea must be{" "}
          <span className={phraseSection.content_word}> guided</span>{" "}
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: containerDelay + containerDuration,
            y: { duration: 1.8, ease: "easeInOut" },
            opacity: { duration: 2.6, ease: "easeOut" },
          }}
          className={phraseSection.content_text_2}
        >
          to the <span className={phraseSection.content_word}>highest</span> of
          every <span className={phraseSection.content_word}>mountain</span>
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default PhraseSection;
