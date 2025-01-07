import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "../../index.css";

const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [errors, setErrors] = useState({
    user_name: "",
    user_Email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { user_name: "", user_Email: "", message: "" };

    if (!form.current.user_name.value) {
      newErrors.user_name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.current.user_Email.value) {
      newErrors.user_Email = "Email is required";
    } else if (!emailPattern.test(form.current.user_Email.value)) {
      newErrors.user_Email = "Please enter a valid email address";
    }

    if (!form.current.message.value) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_fmhz2se",
        "template_j3kgfyg",
        form.current,
        "B7RRdT-dbCc7J7Agi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="relative">
      {/* Background without glowing dots */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#000000] via-[#0c0429] to-[#3f4078] overflow-hidden"></div>

      {/* Section for the title */}
      <section className="h-80 pt-32 relative bg-gradient-to-b from-[#0c0429] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-start text-center text-white text-[64px] sm:text-[128px] font-bold opacity-10 whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          Contact me Contact me Contact me Contact me
        </motion.div>
        <motion.h1 className="relative text-white text-[32px] sm:text-[56px] font-bold text-shadow z-10">
          Contact me
        </motion.h1>
      </section>

      {/* Section for the contact form */}
      <section className="py-16 px-8 bg-gradient-to-t from-[#0c0429] via-[#0c0429] to-[#3f4078] flex justify-center items-center">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                className="w-full p-3 border border-purple-300 rounded-md text-white placeholder-gray-500 bg-transparent ring-2 ring-purple-200"
              />
              {errors.user_name && (
                <p className="text-white text-xs mt-1">{errors.user_name}</p>
              )}
            </div>

            <div>
              <input
                type="Email"
                id="Email"
                name="user_Email"
                placeholder="Your Email"
                className="w-full p-3 border border-purple-300 rounded-md text-white placeholder-gray-500 bg-transparent ring-2 ring-purple-200"
              />
              {errors.user_Email && (
                <p className="text-white text-xs mt-1">{errors.user_Email}</p>
              )}
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                className="w-full p-3 border border-purple-300 rounded-md text-white placeholder-gray-500 bg-transparent ring-2 ring-purple-200"
              ></textarea>
              {errors.message && (
                <p className="text-white text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button className="w-full py-2 px-4 bg-violet-900 text-white font-semibold rounded-md shadow-md transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-lg hover:shadow-violet-600">
              Send
            </motion.button>
          </form>
        </div>
      </section>

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-700 text-white p-3 rounded-md shadow-lg flex items-center">
          <span>Email sent successfully!</span>
          <button
            className="ml-3 text-lg font-bold"
            onClick={() => setShowNotification(false)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
