"use client";
import { motion } from "motion/react";
import { Dosis } from "next/font/google";
import about from "@/styles/components/about.module.scss";
import EducationBox from "./EducationBox";
import { PiGraduationCapLight, PiSuitcaseSimpleThin } from "react-icons/pi";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const About = () => {
  return (
    <motion.div
      className={about.container}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 300,
        transition: { duration: 1, ease: "easeOut" },
      }}
      transition={{
        delay: 2,
        y: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 1.7, ease: "easeOut" },
      }}
    >
      <div className={about.content}>
        <div className={`${about.content_title} ${dosis.className}`}>
          <h3>Resume</h3>
        </div>

        <div className={about.content_text_container}>
          <p className={`${about.content_text} ${dosis.className}`}>
            I’m a junior full-stack web developer with experience in JavaScript,
            CSS, Next.js, vanilla JavaScript, React, and Tailwind. I build
            dynamic, responsive applications using APIs and Firestore, applying
            UX/UI design principles to create intuitive user interfaces.
          </p>
          <p className={`${about.content_text} ${dosis.className}`}>
            On the backend, I work with PHP, Node.js with MongoDB, and SQL,
            enabling me to deliver full-stack solutions and collaborate
            effectively with teams. I’ve contributed to projects in web
            development, branding, and market research, which helped me develop
            strong communication and leadership skills. I’m eager to keep
            learning and contribute to the success of every project I join.
          </p>
        </div>

        <div className={about.wrapper}>
          {/* Education Icon */}
          <div className={about.education_container}>
            <img
              src="images/element-education.png"
              alt="education"
              className={about.content_education_icon}
            />
          </div>
          <PiGraduationCapLight className={about.content_education_icon_2} />

          {/* Experience Icon */}
          <div className={about.experience_container}>
            <img
              src="images/element-experience.png"
              alt="experience"
              className={about.content_experience_icon}
            />
          </div>
          <PiSuitcaseSimpleThin className={about.content_experience_icon_2} />

          {/* Education Boxes */}
          <EducationBox
            date="October 2024 - May 2025"
            degree="Bootcamp Full-Stack Jr"
            place="Kodigo Academy"
            className={about.education_box_1}
          />

          <EducationBox
            date="2018–2020"
            degree="Bachelor's Degree in Graphic Design"
            place="Don Bosco University"
            className={about.education_box_2}
          />

          <EducationBox
            date="2017–2018"
            degree="Technical Degree in Graphic Design"
            place="Don Bosco University"
            className={about.education_box_3}
          />

          <EducationBox
            date="2014–2016"
            degree="Technical High School Diploma"
            place="Ricaldone Technical Institute"
            className={about.education_box_4}
          />

          <ExperienceBox
            className={about.experience_box_1}
            place="Kodigo"
            position="Full-Stack Jr"
            mode="Remote – El Salvador"
            date="Oct 2024 – May 2025"
            work="Built a SPA with React and React Hook Form for efficient data handling. Developed a medical appointment interface with Firestore integration. Created reusable components with HTML, CSS, and JS via Frontend Mentor, and built a booking platform using API endpoints for a smooth user experience."
          />
          <ExperienceBox
            className={about.experience_box_2}
            place="Amazonas EcoTravel"
            position="Web Developer"
            mode="Remote — Syracuse, United States"
            date="Jul 2024 – Jan 2025"
            work="Built and maintained a website using WordPress, Elementor, and additional tools, ensuring an optimized, user-friendly design.
Managed site users and content efficiently, maintaining data security and structured access across the site."
          />
          <ExperienceBox
            className={about.experience_box_3}
            place="Moda Week International(MWINTL)"
            position="Remote — New York, United States"
            mode="Remote — New York, United States"
            date="Jan 2022 – Dec 2024"
            work="Edited color palettes, photo compositions, and created corporate branding materials for fashion shows and events. Designed promotional assets and edited videos for social media and YouTube using Adobe Premiere and After Effects.
Developed a complete website and visual assets using WIX and Adobe tools. Managed paid ad campaigns on Meta Business Suite to enhance reach and visibility."
          />
          <ExperienceBox
            className={about.experience_box_4}
            place="Expedition George of the Jungle"
            position="Content Creator & Web Developer"
            mode="Hybrid — Leticia, Amazonas, Colombia"
            date="Jan 2022 – Jan 2025"
            work="Redesigned brand identity, created merchandise, maps, and media from tourism activities in the Amazon using Adobe tools. Edited photos and videos, aligning visual content with the agency’s brand.
Developed a full website using WIX and Adobe software, ran ad campaigns on Meta Business Suite, conducted market research in Spanish and English, monitored Google Analytics, supported ad strategies, and assisted as a translator for tourist activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

function ExperienceBox({ place, position, mode, date, work, className }) {
  return (
    <>
      <div className={className}>
        <p className={`${about.experience_place} ${dosis.className}`}>
          {place}
        </p>
        <h6 className={`${about.experience_position} ${dosis.className}`}>
          {position}
        </h6>
        <p className={`${about.experience_mode} ${dosis.className}`}>{mode}</p>
        <p className={`${about.experience_date} ${dosis.className}`}>{date}</p>
        <p className={`${about.experience_work} ${dosis.className}`}>{work}</p>
      </div>
    </>
  );
}

export default About;
