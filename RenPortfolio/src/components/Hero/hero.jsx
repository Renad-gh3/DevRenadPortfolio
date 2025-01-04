import { motion } from "framer-motion";
import lamp from "../../assets/icon/lamp.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="py-24 h-screen relative bg-gradient-to-b from-[#000000] via-[#0c0429] to-[#3f4078]"
    >
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Text with animation - Moves from bottom to top and fades in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom with opacity 0
          animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
          transition={{ duration: 1.5 }} // Duration of the animation
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-white"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-indigo-400 hero-glow">
            Hi, I am
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-sky-200 hero-glow">
            Renad Alghamdi
          </h1>
        </motion.div>

        {/* Border line with animation - Starts small and scales to full size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start with smaller size and opacity 0
          animate={{ opacity: 1, scale: 1 }} // Scale to full size and full opacity
          transition={{ duration: 1.5, delay: 0.5 }} // Delay for a smooth transition
          className="w-1/3 sm:w-1/2 md:w-1/3 mx-auto mt-10 border-t-2 border-white"
        ></motion.div>

        {/* Description text with animation - Moves from bottom to top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Start from bottom with opacity 0
          animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
          transition={{ duration: 1.5, delay: 1 }} // Delay for smooth transition
          className="text-center mt-6 text-lg sm:text-xl md:text-2xl text-white"
        >
          <p>
            A passionate software engineer focused on front-end development and
            innovative UI design. I work hard to create unique projects, and who
            knows one day, I might start my own software company ! 😉
          </p>
        </motion.div>

        {/* Lamp image with motion - Draggable and moves from left to right */}
        <motion.div
          className="absolute left-[-40px] top-[-90px]"
          drag
          initial={{ opacity: 0, x: -50 }} // Start from the left with opacity 0
          animate={{ opacity: 1, x: 0 }} // Move to its normal position
          transition={{ duration: 1.5, delay: 1 }} // Delay for a smooth transition
        >
          <img
            src={lamp}
            height="70"
            width="70"
            alt="lamp icon"
            className="sm:w-14 sm:h-16 md:w-20 md:h-24 lg:w-24 lg:h-28"
            draggable="false"
          />
        </motion.div>

        {/* CV download button with hover effect and initial animation */}
        <div className="text-center mt-8">
          <motion.a
            href="https://www.linkedin.com/in/renad-alghamdi-621767249"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white py-2 px-6 sm:py-3 sm:px-8 md:py-3 md:px-10 border-2 border-white rounded-md hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move from bottom
            animate={{ opacity: 1, y: 0 }} // Move to its normal position with full opacity
            transition={{ duration: 1.5, delay: 1.5 }} // Smooth transition with delay
          >
            Let’s Connect on LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
