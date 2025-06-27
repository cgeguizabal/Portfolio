import skills from "@/styles/components/skills.module.scss";
import { Dosis } from "next/font/google";
import { motion } from "motion/react";
import { LiaScrewdriverSolid } from "react-icons/lia";
import { SlWrench } from "react-icons/sl";
import { AiOutlineHtml5 } from "react-icons/ai";

import { GrJs, GrMysql } from "react-icons/gr";
import { SiMongoose } from "react-icons/si";

import { GoTools } from "react-icons/go";
import {
  SiCsswizardry,
  SiNetlify,
  SiFirebase,
  SiExpress,
  SiInsomnia,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCanva,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { RiNextjsLine, RiVercelLine, RiTailwindCssFill } from "react-icons/ri";

import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";

import {
  FaReact,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
  FaSass,
  FaWordpressSimple,
  FaFigma,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function SkillsAndTools() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 300,
          transition: { duration: 1, ease: "easeOut" },
        }}
        transition={{
          delay: 0,
          y: { duration: 1, ease: "easeInOut" },
          opacity: { duration: 2, ease: "easeOut" },
        }}
        className={skills.container}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: 100,
            transition: { duration: 1.2, ease: "easeOut" },
            opacity: { duration: 1.7, ease: "easeOut" },
          }}
          transition={{
            delay: 0,
            y: { duration: 1, ease: "easeInOut" },
            opacity: { duration: 1.7, ease: "easeOut" },
          }}
          className={`${skills.content} ${dosis.className}`}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            transition={{
              delay: 0,
              y: { duration: 1.2, ease: "easeInOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            className={skills.content_section}
          >
            <h3>My Skills and Tools</h3>
            <GoTools />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            transition={{
              delay: 0,
              y: { duration: 1.3, ease: "easeInOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            className={skills.content_introduction}
          >
            <h2>Bridging logic and empathy to create solutions that matter</h2>
            <p>
              Hello there again, I'm a creative and empathetic full-stack
              developer with strong problem-solving, leadership, and
              communication skills. I work with HTML, CSS/SASS, JavaScript,
              TypeScript, and PHP, using frameworks like React, Next.js, and
              Laravel. I’m experienced with MySQL, MongoDB, RESTful APIs,
              Firestore, Zustand, and design tools like Figma and Adobe Suite.
              I'm always open to expanding my knowledge and growing with new
              technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            transition={{
              delay: 0,
              y: { duration: 1.4, ease: "easeInOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            className={skills.content_softSkills}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_title}
            >
              <h3>My Soft Skills</h3>
              <LiaScrewdriverSolid />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.6, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_wrapper}
            >
              <p className={skills.content_softSkills_1}>Leadership</p>
              <p className={skills.content_softSkills_2}>
                I’ve learned to take initiative and guide teams with empathy. I
                keep communication clear and ensure everyone stays aligned and
                motivated to achieve shared goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.7, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_wrapper}
            >
              <p className={skills.content_softSkills_1}>
                Assertive Communication
              </p>
              <p className={skills.content_softSkills_2}>
                I express my ideas clearly and respectfully. Whether I’m talking
                to a client, a teammate, or a manager, I make sure my message is
                direct and constructive, and I always listen actively.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_wrapper}
            >
              <p className={skills.content_softSkills_1}>Empathy</p>
              <p className={skills.content_softSkills_2}>
                I believe understanding others is key to any successful project.
                I take time to listen to my clients and teammates, which helps
                me create more thoughtful and effective solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.9, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_wrapper}
            >
              <p className={skills.content_softSkills_1}>Creativity</p>
              <p className={skills.content_softSkills_2}>
                I enjoy finding new ways to solve problems. Whether in design,
                development, or strategy, I look for fresh approaches that add
                value and deliver something unique
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 2, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_softSkills_wrapper}
            >
              <p className={skills.content_softSkills_1}>
                Emotional Intelligence
              </p>
              <p className={skills.content_softSkills_2}>
                I stay calm under pressure and manage my emotions in a healthy
                way. I also pay close attention to how others feel, which helps
                me make better decisions and collaborate smoothly.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            transition={{
              delay: 0,
              y: { duration: 1, ease: "easeInOut" },
              opacity: { duration: 1.7, ease: "easeOut" },
            }}
            className={skills.content_techSkills}
          >
            <div className={skills.content_techSkills_title}>
              <h3>My Tech Stack</h3>
              <SlWrench />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.1, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_lan}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Programming Languages:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="Html5">
                  <AiOutlineHtml5 />
                </li>
                <li data-tooltip="CSS">
                  <SiCsswizardry />
                </li>
                <li data-tooltip="Sass">
                  <FaSass />
                </li>
                <li data-tooltip="JavaScript">
                  <GrJs />
                </li>
                <li data-tooltip="TypeScript">
                  <TbBrandTypescript />
                </li>
                <li data-tooltip="PHP">
                  <FaPhp />
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.2, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_data}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>Databases:</h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="MySQL">
                  <GrMysql />
                </li>
                <li data-tooltip="MongoDB">
                  <BiLogoMongodb />
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.3, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_frame}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Libraries & Frameworks:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="React.js">
                  <FaReact />
                </li>
                <li data-tooltip="Next.js">
                  <RiNextjsLine />
                </li>
                <li data-tooltip="Laravel">
                  <FaLaravel />
                </li>
                <li data-tooltip="Bootstrap">
                  <FaBootstrap />
                </li>
                <li data-tooltip="Tailwind CSS">
                  <RiTailwindCssFill />
                </li>
                <li data-tooltip="Motion.dev">
                  <TbBrandFramerMotion />
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.4, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_tools}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Tools & Platforms:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="Zustand">
                  <GiBearFace />
                </li>
                <li data-tooltip="Figma">
                  <FaFigma />
                </li>
                <li data-tooltip="Wordpress">
                  <FaWordpressSimple />
                </li>

                <li data-tooltip="FireStore">
                  <SiFirebase />
                </li>
                <li data-tooltip="Postman">
                  <SiPostman />
                </li>

                <li data-tooltip="Insomnia">
                  <SiInsomnia />
                </li>
                <li data-tooltip="Netlify">
                  <SiNetlify />
                </li>
                <li data-tooltip="Vercel">
                  <RiVercelLine />
                </li>
                <li data-tooltip="GitHub">
                  <SiGithub />
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_basic}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Cloud Services:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="AWS">
                  <FaAws />
                </li>
              </ul>
              <p className={skills.basis}>Basis Knowledge</p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.6, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_api}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Development and consumption of RESTful APIs:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="Node.js">
                  <FaNodeJs />
                </li>
                <li data-tooltip="Laravel">
                  <FaLaravel />
                </li>
              </ul>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.7, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_runtime}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Runtime Environment:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="Node.js">
                  <FaNodeJs />
                </li>
                <li data-tooltip="Express.js">
                  <SiExpress />
                </li>
                <li data-tooltip="Mongoose">
                  <SiMongoose />
                </li>
              </ul>
            </motion.div>
            {/* DESGIGN STACK */}
            {/* <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              transition={{
                delay: 0,
                y: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 1.7, ease: "easeOut" },
              }}
              className={skills.content_techSkills_graphic}
            >
              <div>
                {" "}
                <h2 className={skills.content_techSkills_subT}>
                  Design & Editing:
                </h2>
              </div>{" "}
              <ul className={skills.content_techSkills_list}>
                <li data-tooltip="After Effects">
                  <SiAdobeaftereffects />
                </li>
                <li data-tooltip="Audition">
                  <SiAdobeaudition />
                </li>
                <li data-tooltip="Premire Pro">
                  <SiAdobepremierepro />
                </li>

                <li data-tooltip="Lightroom">
                  <SiAdobelightroom />
                </li>

                <li data-tooltip="XD">
                  <SiAdobexd />
                </li>
                <li data-tooltip="Illustrator">
                  <SiAdobeillustrator />
                </li>
                <li data-tooltip="Photoshop">
                  <SiAdobephotoshop />
                </li>
                <li data-tooltip="Canva">
                  <SiCanva />
                </li>
              </ul>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default SkillsAndTools;
