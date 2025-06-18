"use client";
import showcase from "@/styles/components/showcase.module.scss";
import { motion } from "motion/react";
import { Dosis } from "next/font/google";
import { PiCompassRoseThin } from "react-icons/pi";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function Showcase() {
  return (
    <motion.div
      className={showcase.container}
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
      <div className={showcase.content}>
        <div className={`${showcase.content_title} ${dosis.className}`}>
          <h3>PORTFOLIO</h3>
          <PiCompassRoseThin className={showcase.content_title_icon} />
        </div>
        <div className={showcase.content_text_container}>
          <p className={`${showcase.content_text_1} ${dosis.className}`}>
            Direction turns ideas into journeys
          </p>
          <p className={`${showcase.content_text_2} ${dosis.className}`}>
            A compass points the way to greatness
          </p>
        </div>
        <div className={showcase.content_main}>
          <div className={showcase.content_main_1}>
            <ProjectCard
              img="images/propertyPulse.png"
              type="Full-Stack web application"
              title="Property Pulse"
            />
            <ProjectCard
              img="images/clipboard.png"
              type="Tailwind responsive web application"
              title="Clipboard"
            />
            <ProjectCard
              img="images/medcare.png"
              type="Data storage with FireStorey"
              title="Medcare"
            />
            <ProjectCard
              img="images/spotify.png"
              type="Form validation and props"
              title="Spotify"
            />
          </div>
          <div className={showcase.content_main_2}>
            <ProjectCard
              img="images/loopStudio.png"
              type="Tailwind responsive web application"
              title="LoopStudio"
            />
            <ProjectCard
              img="images/cartlist.png"
              type="Global managment with zustand"
              title="Product listing"
            />
            <ProjectCard
              img="images/api.png"
              type="RESTful API"
              title="Management"
            />
            <ProjectCard
              img="images/sciQuest.png"
              type="Fetching public API"
              title="SciQuest"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ img, type, title }) {
  return (
    <>
      <div className={showcase.project_1}>
        <div className={showcase.project_img}>
          <img src={img} alt="work" className={showcase.project_img_show} />
        </div>
        <div className={`${showcase.project_texts} ${dosis.className}`}>
          <p className={showcase.project_texts_type}>{type}</p>
          <h5 className={showcase.project_texts_title}>{title}</h5>
        </div>
      </div>
    </>
  );
}

export default Showcase;
