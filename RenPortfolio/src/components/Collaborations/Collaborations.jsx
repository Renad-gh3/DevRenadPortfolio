import { motion } from "framer-motion";
import AI from "../../assets/icon/AICLUB.png";
import Dawai from "../../assets/icon/dawai.svg";
import Syn from "../../assets/icon/Synapse.png";
import X from "../../assets/icon/x.svg";
import linked from "../../assets/icon/linkedin.svg";

const Collaborations = () => {
  return (
    <div>
      <section
        id="Collaborations"
        className="h-80 pt-32 relative bg-gradient-to-b from-[#0c0429] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden"
      >
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
          Volunteer Collaborations Volunteer Collaborations
        </motion.div>

        <motion.h1 className="relative text-white text-[32px] sm:text-[56px] font-bold text-shadow z-10">
          Collaborations
        </motion.h1>
      </section>

      <section className="h-auto relative bg-gradient-to-t from-[#0c0429] via-[#0c0429] to-[#3f4078] py-24">
        <div className="flex flex-col items-center justify-center max-w-6xl w-full space-y-32 mx-auto">
          <div className="flex flex-col items-center w-full space-y-8">
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={Dawai}
                alt="Dawai"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.div
              className="text-white text-base sm:text-lg md:text-xl text-center max-w-xl px-4"
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
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linked}
                    alt="LinkedIn"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={X}
                    alt="X"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>
            </div>
            <div className="w-1/4 border-t-2 border-white mt-6"></div>
          </div>

          <div className="flex flex-col items-center w-full space-y-8">
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={AI}
                alt="AI Club"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.div
              className="text-white text-base sm:text-lg md:text-xl text-center max-w-xl px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Worked with AI Club on enhancing their AI-based platform,
                focusing on user experience and interface design.
              </p>
            </motion.div>
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linked}
                    alt="LinkedIn"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={X}
                    alt="X"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>
            </div>
            <div className="w-1/4 border-t-2 border-white mt-6"></div>
          </div>

          <div className="flex flex-col items-center w-full space-y-8">
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={Syn}
                alt="Synapse"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
            <motion.div
              className="text-white text-base sm:text-lg md:text-xl text-center max-w-xl px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Partnered with Synapse to design intuitive web interfaces,
                focusing on accessibility and user engagement.
              </p>
            </motion.div>
            <div className="mt-8 flex gap-6 flex-wrap justify-center">
              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linked}
                    alt="LinkedIn"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>

              <motion.div
                className="h-10 px-4 py-2 rounded-2xl text-white text-center flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={X}
                    alt="X"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </a>
              </motion.div>
            </div>
            <div className="w-1/4 border-t-2 border-white mt-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
