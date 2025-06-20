"use client";

import personalCardProfile from "../styles/components/personalCard.module.scss";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function PersonalCardProfile() {
  useEffect(() => {
    // This helps prevent HMR issues
    return () => {};
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/carlosguillermo.eguizbalorellana",
    linkedin: "https://www.linkedin.com/in/carlos-guillermo-eguizabal-orellana",
    whatsapp: "https://wa.me/50371403458",
    email: "cgeguizabal@gmail.com",
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`,
      "_blank"
    );
  };

  return (
    // WHOLE CONTAINER FOR PERSONAL CARD PROFILE
    <motion.div
      className={personalCardProfile.container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.5, ease: "easeOut" },
      }}
      key="personal-card" // Added key for HMR stability
    >
      {/* PROFILE IMAGE */}
      <motion.div
        className={personalCardProfile.image}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          x: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
      >
        <Image
          src="/images/photo-2.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className={personalCardProfile.image_profile}
          priority
        />
        <motion.img
          className={personalCardProfile.image_circle}
          src="/images/element-circle.png"
          alt="Rotating image"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          key="rotating-circle" // Important for HMR
        />
      </motion.div>

      {/* FULL NAME */}
      <motion.div
        className={personalCardProfile.name}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          y: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
      >
        <h1
          className={`${personalCardProfile.name_fullName} ${dosis.className}`}
        >
          GUILLERMO EGUIZABAL
        </h1>
      </motion.div>

      {/* SPECIALIZATION */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          y: { duration: 1.1, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
      >
        <div className={personalCardProfile.specialization}>
          <h3
            className={`${personalCardProfile.specialization_text} ${dosis.className}`}
          >
            WEB DEVELOPER/ DESIGNER
          </h3>
        </div>
      </motion.div>

      {/* SOCIAL MEDIA ICONS */}
      <motion.div
        className={personalCardProfile.icons}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          y: { duration: 1.4, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
      >
        <a
          href={socialLinks.facebook}
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
          className={personalCardProfile.icons_img_container}
        >
          <FaFacebookF className={personalCardProfile.icons_img} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          className={personalCardProfile.icons_img_container}
        >
          <FaLinkedinIn className={personalCardProfile.icons_img} />
        </a>
        <a
          href="#"
          onClick={handleEmailClick}
          aria-label="Email"
          rel="noopener noreferrer"
          className={personalCardProfile.icons_img_container}
        >
          <MdEmail className={personalCardProfile.icons_img} />
        </a>
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          aria-label="WhatsApp"
          rel="noopener noreferrer"
          className={personalCardProfile.icons_img_container}
        >
          <FaWhatsapp className={personalCardProfile.icons_img} />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          y: { duration: 1.7, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
        className={`${personalCardProfile.location} ${dosis.className}`}
      >
        <p className={personalCardProfile.location_country}>
          Web Developer & Graphic Designer skilled in Frontend & Backend, based
          in <br />
          <b>El Salvador</b>
        </p>
      </motion.div>
    </motion.div>
  );
}
