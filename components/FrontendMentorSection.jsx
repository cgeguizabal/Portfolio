"use client";
import frontEndMentor from "@/styles/components/frontEndMentor.module.scss";
import { motion } from "framer-motion";
import { SiFrontendmentor } from "react-icons/si";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function FrontendMentorSection() {
  // Animation durations
  const containerDuration = 0.7;
  const containerDelay = 0.3;

  return (
    <motion.div
      className={frontEndMentor.container}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        delay: containerDelay,
        x: { duration: containerDuration, ease: "easeInOut" },
        opacity: { duration: 1.2, ease: "easeOut" },
      }}
    >
      <div className={`${frontEndMentor.content} ${dosis.className}`}>
        <div className={frontEndMentor.content_text}>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: containerDelay + containerDuration,
              y: { duration: 2.6, ease: "easeInOut" },
              opacity: { duration: 2.6, ease: "easeOut" },
            }}
            className={frontEndMentor.content_text_1}
          >
            See My
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
            className={frontEndMentor.content_text_2}
          >
            Frontend Builds{" "}
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
            className={frontEndMentor.content_text_3}
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
          href="https://www.frontendmentor.io/profile/cgeguizabal"
          target="_blank"
          rel="noopener noreferrer"
          className={frontEndMentor.button}
        >
          <h3>FrontEndMentor</h3>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default FrontendMentorSection;
