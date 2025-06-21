"use client";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Dosis } from "next/font/google";
import contact from "@/styles/components/contact.module.scss";
import { GrContactInfo } from "react-icons/gr";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    const formData = new FormData(e.currentTarget);
    // Collect form data into an object
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    if (!validateEmail(data.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network response was not ok");

      const result = await res.json();
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        formRef.current.reset();
        // Show modal or overlay here (see next section)
      } else {
        throw new Error(result.error || "Server error");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Failed to send. Please try again.",
      });
    }
  };

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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={contact.form_contact}
            >
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
              <div className={contact.status}>
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className={contact.contact_form_button}
                >
                  {status.type === "loading" ? "Sending..." : "Get in touch!"}
                </button>
                {status.message && (
                  <p className={contact.status_message}>{status.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
