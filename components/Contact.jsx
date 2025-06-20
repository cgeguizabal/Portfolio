import { motion } from "motion/react";

import { Dosis } from "next/font/google";
import contact from "@/styles/components/contact.module.scss";
import { GrContactInfo } from "react-icons/gr";

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
          delay: 0,
          y: { duration: 0.7, ease: "easeInOut" },
          opacity: { duration: 1.7, ease: "easeOut" },
        }}
      >
        <div className={`${contact.content} ${dosis.className}`}>
          <div className={contact.content_section}>
            <h3>Contact me</h3>
            <GrContactInfo />
          </div>
          <div className={contact.content_phrase}>
            <p>Let's work together!</p>
          </div>
          <div className={contact.content_form_container}>
            <form action="submit" className={contact.form_contact}>
              <div className={contact.form_main}>
                <div className={contact.form_main_1}>
                  <div className={contact.content_form_group}>
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className={contact.content_form_group}>
                    <label htmlFor="email">Email*</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className={contact.form_main_2}>
                  <div className={contact.content_form_group}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className={contact.content_form_group}>
                    <label htmlFor="subject">Subject*</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              <div className={contact.content_form_group}>
                <label htmlFor="message">Message*</label>
                <textarea
                  className={`${contact.content_form_message} ${dosis.className}`}
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about you project"
                />
              </div>
              <button className={contact.contact_form_button}>
                Get in touch!
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
