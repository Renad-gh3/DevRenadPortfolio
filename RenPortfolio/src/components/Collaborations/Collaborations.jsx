import { motion } from "framer-motion";
import AI from "../../assets/icon/AICLUB.png";
import Dawai from "../../assets/icon/dawai.svg";
import Syn from "../../assets/icon/Synapse.png";
import X from "../../assets/icon/x.svg";
import linked from "../../assets/icon/linkedin.svg";

const Collaborations = () => {
  return (
    <div>
      {/* First section for the title and moving text */}
      <section className="h-80 pt-32 relative bg-gradient-to-b from-[#0c0429] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden">
        {/* Moving background text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start text-center text-white text-[64px] sm:text-[128px] font-bold opacity-10 whitespace-nowrap"
          initial={{ x: "100%" }} // Start position outside the right edge
          animate={{ x: "-100%" }} // End position outside the left edge
          transition={{
            repeat: Infinity, // Infinite looping
            duration: 10, // Duration for the complete cycle
            ease: "linear", // Smooth and constant movement
          }}
        >
          Volunteer Collaborations Volunteer Collaborations
        </motion.div>

        {/* Foreground title */}
        <motion.h1 className="relative text-white text-[32px] sm:text-[56px] font-bold text-shadow z-10">
          Collaborations
        </motion.h1>
      </section>

      {/* New section for the collaborations content */}
      <section className="h-auto relative bg-gradient-to-t from-[#0c0429] via-[#0c0429] to-[#3f4078] py-24">
        <div className="flex flex-col items-center justify-center max-w-6xl w-full space-y-32 mx-auto">
          {/* Dawai (First item) */}
          <div className="flex flex-col items-center w-full space-y-8">
            {/* Logo with scroll motion */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }} // Start position off-screen (hidden)
              whileInView={{ opacity: 1, y: 0 }} // End position at normal state
              viewport={{ once: true }} // Trigger only once when it enters the viewport
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={Dawai}
                alt="Dawai"
                className="w-40 h-40 sm:w-32 sm:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }} // Increase size when hover
              />
            </motion.div>
            {/* Description */}
            <motion.div
              className="text-white text-lg sm:text-xl text-center max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Collaborated with Dawai to improve their healthcare app,
                creating a seamless and user-friendly experience for patients
                and doctors.
              </p>
            </motion.div>
            {/* Tags Section */}
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linked} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="X" className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            {/* Divider Line */}
            <div className="w-1/4 border-t-2 border-white mt-6"></div>
          </div>

          {/* AI Club (Middle item) */}
          <div className="flex flex-col items-center w-full space-y-8">
            {/* Logo with scroll motion */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }} // Start position off-screen (hidden)
              whileInView={{ opacity: 1, y: 0 }} // End position at normal state
              viewport={{ once: true }} // Trigger only once when it enters the viewport
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={AI}
                alt="AI Club"
                className="w-40 h-40 sm:w-32 sm:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }} // Increase size when hover
              />
            </motion.div>
            {/* Description */}
            <motion.div
              className="text-white text-lg sm:text-xl text-center max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Worked with AI Club on enhancing their AI-based platform,
                focusing on user experience and interface design.
              </p>
            </motion.div>
            {/* Tags Section */}
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linked} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="X" className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            {/* Divider Line */}
            <div className="w-1/4 border-t-2 border-white mt-6"></div>
          </div>

          {/* Synapse (Last item) */}
          <div className="flex flex-col items-center w-full space-y-8">
            {/* Logo with scroll motion */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }} // Start position off-screen (hidden)
              whileInView={{ opacity: 1, y: 0 }} // End position at normal state
              viewport={{ once: true }} // Trigger only once when it enters the viewport
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={Syn}
                alt="Synapse"
                className="w-40 h-40 sm:w-32 sm:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }} // Increase size when hover
              />
            </motion.div>
            {/* Description */}
            <motion.div
              className="text-white text-lg sm:text-xl text-center max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Partnered with Synapse to design intuitive web interfaces,
                focusing on accessibility and user engagement.
              </p>
            </motion.div>
            {/* Tags Section */}
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linked} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="X" className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            {/* Divider Line */}
            <div className="w-1/4 border-t-2 border-white mt-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
