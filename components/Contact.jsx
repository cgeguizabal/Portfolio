import { motion } from "motion/react";

import { Dosis } from "next/font/google";
import contact from "@/styles/components/contact.module.scss";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const Contact = () => {
  return (
    <>
      <motion.div
        className={contact.container}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 300,
          transition: {
            duration: 1,
            opacity: { duration: 1, ease: "easeOut" },
          },
        }}
        transition={{
          delay: 2,
          y: { duration: 0.7, ease: "easeInOut" },
          opacity: { duration: 1.7, ease: "easeOut" },
        }}
      >
        <h1>HELLOW CONTACT</h1>
      </motion.div>
    </>
  );
};

export default Contact;
