"use client";
import showcase from "@/styles/components/showcase.module.scss";
import { motion } from "motion/react";
import { Dosis } from "next/font/google";
import { PiCompassRoseThin } from "react-icons/pi";
import Lightbox from "./Lightbox";
import useShowCaseStore from "@/store/projectStore";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function Showcase() {
  const {
    propertyPulse,
    loopStudio,
    clipBoard,
    cartList,
    medcare,
    restFulApi,
    spotify,
    sciQuest,
    showPropertyPulse,
    showLoopStudio,
    showClipBoard,
    showCartList,
    showMedcare,
    showRestFulApi,
    showSpotify,
    showSciQuest,
  } = useShowCaseStore();
  return (
    <>
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
              {/* Property Pulse */}
              <ProjectCard
                img="images/propertyPulse.png"
                type="Full-Stack web application"
                title="Property Pulse"
                onClick={showPropertyPulse}
              />
              {/* CLIPBOARD */}
              <ProjectCard
                img="images/clipboard.png"
                type="Tailwind responsive web application"
                title="Clipboard"
                onClick={showClipBoard}
              />
              {/* MEDCARE */}
              <ProjectCard
                img="images/medcare.png"
                type="Data storage with FireStorey"
                title="Medcare"
                onClick={showMedcare}
              />
              {/* SPOTIFY */}
              <ProjectCard
                img="images/spotify.png"
                type="Form validation and props"
                title="Spotify"
                onClick={showSpotify}
              />
            </div>
            <div className={showcase.content_main_2}>
              {/* LOOPSTUDIO */}
              <ProjectCard
                img="images/loopStudio.png"
                type="Tailwind responsive web application"
                title="LoopStudio"
                onClick={showLoopStudio}
              />
              {/* CARTLIST */}
              <ProjectCard
                img="images/cartlist.png"
                type="Global managment with zustand"
                title="Product listing"
                onClick={showCartList}
              />
              {/* API */}
              <ProjectCard
                img="images/api.png"
                type="RESTful API"
                title="Management"
                onClick={showRestFulApi}
              />
              {/* SIQUEST */}
              <ProjectCard
                img="images/sciQuest.png"
                type="Fetching public API"
                title="SciQuest"
                onClick={showSciQuest}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {propertyPulse && (
        <Lightbox
          title="Property Pulse"
          project="Full-Stack web application for reting properties"
          tech="Next.js-Tailwind-NextAuth.js-MongoDB..."
          preview="https://property-pulse-omega-wheat.vercel.app/"
          repository="https://github.com/cgeguizabal/PropertyPulse"
          features={[
            "User Authentication via Google using NextAuth.",
            "Create / Update / Delete Properties.",
            "View Property Listings with high-resolution photo galleries.",
            "Responsive Maps with accurate location display.",
            "Create a Profile before posting or messaging",
            "Secure Messaging System",
            "Send / receive messages",
            "Unread message notifications",
            "Notification System",
            "Loading States with React Spinners",
            "Social Sharing with React Share",
          ]}
          img="images/lightPropertpulse.png"
        >
          Property Pulse is a modern full-stack web application for renting
          properties. Built with Next.js, React, and Tailwind CSS, it offers a
          responsive, feature-rich experience for users to browse, add, and
          manage properties. It supports secure authentication via Google,
          real-time messaging, and profile-based property interactions.
        </Lightbox>
      )}
      {loopStudio && (
        <Lightbox
          title="Loop Studio"
          project="Tailwind CSS responsive web site"
          tech="React-Tailwind CSS"
          preview="https://loop-studios-cgeo.vercel.app/"
          repository="https://github.com/cgeguizabal/LoopStudios"
          features={[
            "Responsive grid gallery displaying creative projects.",

            "Fixed header navigation with mobile toggle menu.",
            "Footer with social media icons.",
          ]}
          img="images/lightLoopstudios.png"
        >
          This project is a responsive website replicating the Loopstudios
          landing page challenge from Frontend Mentor.
        </Lightbox>
      )}
      {clipBoard && (
        <Lightbox
          title="Clipboard"
          project="Tailwind CSS responsive web site"
          tech="React-Tailwind CSS"
          preview="https://celebrated-raindrop-e3a486.netlify.app/"
          repository="https://github.com/cgeguizabal/Clipboard"
          features={[
            "Mobile first design.",

            "Fixed header navigation with mobile toggle menu.",
            "Footer with social media icons.",
          ]}
          img="images/lightClipboard.png"
        >
          This project is a responsive website replicating the Loopstudios
          landing page challenge from Frontend Mentor.
        </Lightbox>
      )}
      {cartList && (
        <Lightbox
          title="Product listing"
          project="Zustand management for products listing"
          tech="React- Sass(SCSS)-Zustand"
          preview="https://stirring-jalebi-91b956.netlify.app/"
          repository="https://github.com/cgeguizabal/Product-list"
          features={[
            "Data persistence via localStorage.",
            "Responsive design with an 11-column grid system.",
            "Clean component structure.",
            "Zustand used for global state management.",
          ]}
          img="images/lightCartlist.png"
        >
          A responsive product listing interface built with React, Sass, and
          Zustand for global state management. The layout is structured using a
          custom 11-column CSS grid.
        </Lightbox>
      )}
      {medcare && (
        <Lightbox
          title="Medcare"
          project="Data storage with fireStore"
          tech="React-CSS-SweetAlert 2-Firestore..."
          preview="https://medcarecgeo.netlify.app/"
          repository="https://github.com/cgeguizabal/Medcare"
          features={[
            "View available doctors and appointment slots.",
            "Book and manage appointments with an intuitive UI",
            "Search for doctors by specialty.",
            "Responsive design for desktop and mobile.",
            "Clean and modern UI with smooth user experience",
            "Data storage and real-time updates powered by Firestore",
          ]}
          img="images/lightMedcare.png"
        >
          A simple and clean medical appointment booking web app built with
          React.js and Firestore. Designed to help users easily manage and
          schedule their medical appointments.
        </Lightbox>
      )}
      {restFulApi && (
        <Lightbox
          title="RESTful API"
          project="Student Management API"
          tech="MySQL-Laravel Passport(OAuth2)"
          preview="https://github.com/cgeguizabal/students_api"
          repository="https://github.com/cgeguizabal/students_api"
          features={[
            "User authentication with Laravel Passport.",
            "Full CRUD for students.",
            "Protected API routes using auth:api middleware.",
          ]}
          img="images/lightApi.png"
        >
          This RESTful API is designed for managing student data in a secure and
          scalable way. Built with Laravel and powered by Laravel Passport for
          OAuth2 authentication, the API enables full CRUD functionality while
          ensuring protected access through middleware.
        </Lightbox>
      )}
      {spotify && (
        <Lightbox
          title="Spotify"
          project="Full-Stack web application for reting properties"
          tech="React-CSS"
          preview="https://spotifyactivity.netlify.app/"
          repository="https://github.com/cgeguizabal/ActivitySpotify"
          features={[
            "Dynamic Data Rendering.",
            "Responsive Design: Adapts layout for various screen size.",
            "Theming: Implements a color palette with CSS variables for easy customization",
          ]}
          img="images/lightSpotify.png"
        >
          React web application that applies props fundamentals and user form
          verification to deliver dynamic and responsive user interfaces.
        </Lightbox>
      )}
      {sciQuest && (
        <Lightbox
          title="SciQuest"
          project="Fetching API"
          tech="React-CSS-Axios"
          preview="https://keen-biscochitos-c139f8.netlify.app/"
          repository="https://github.com/cgeguizabal/SciQuest"
          features={[
            "Scientists List: Displays a table with scientists’ basic information.",
            "Responsive Design: Mobile-friendly and adapts to small screens.",
            "Scientist Publications: Allows users to view each scientist’s publications by clicking a button next to each entry.",
          ]}
          img="images/lightSciQuest.png"
        >
          This project is a web page built using Vite + React, leveraging the
          Axios library to consume a public API. The platform is designed for
          scientists, allowing them to view information about other scientists
          and explore their publications. When visiting the page, users can:{" "}
          <br />
          <span>
            *View a list of scientists with basic information (name, email,
            username).
          </span>
          <span>*Click a button to view each scientist’s publications. </span>{" "}
          <br /> This project is ideal for practicing API consumption, managing
          state in React, and building responsive user interfaces.
        </Lightbox>
      )}
    </>
  );
}

function ProjectCard({ img, type, title, onClick }) {
  return (
    <>
      <div className={showcase.project_1} onClick={onClick}>
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
