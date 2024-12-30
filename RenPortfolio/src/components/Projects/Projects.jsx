import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import pro from "../../assets/icon/project.png";
import openarrow from "../../assets/icon/openarrow.svg";

const Project = () => {
  // Parallax function to create a vertical movement effect
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  // Image component to represent individual project cards
  function Image({ id }) {
    const ref = useRef(null); // Reference for tracking scroll progress
    const { scrollYProgress } = useScroll({ target: ref }); // Get scroll progress for the specific element
    const y = useParallax(scrollYProgress, 300); // Parallax effect for vertical translation

    const [isHovered, setIsHovered] = useState(false); // State to handle hover effect

    return (
      <section className="bg-[#0c0429] h-screen flex items-center justify-center relative scroll-snap-align-center perspective-[500px]">
        <div className="flex items-center justify-between w-full max-w-7xl px-5">
          {/* Project image container */}
          <div
            ref={ref}
            className="w-full sm:w-[300px] h-[400px] max-h-[90vh] relative bg-white overflow-hidden rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={pro}
              alt="Project Image"
              className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-all duration-500 ${
                isHovered ? "scale-105 shadow-lg shadow-blue-500" : ""
              }`} // Hover effect for scaling and shadow
            />
          </div>

          {/* Project description */}
          <div className="text-white pl-5 w-full sm:w-1/2">
            <motion.h2
              className="text-[32px] sm:text-[56px] font-bold -tracking-[3px] leading-[1.2] text-shadow"
              style={{ y }} // Parallax effect for the title
            >
              {`#00${id}`} {/* Dynamic project ID */}
            </motion.h2>
            <p className="mt-4 text-lg sm:text-xl">
              This project showcases a web application built using React and
              styled with Tailwind CSS. The project focuses on user interaction
              and modern web design.
            </p>

            {/* Tech stack badges */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                React
              </div>
              <div className="h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                Tailwind
              </div>
              <div className="mb-6 h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                JavaScript
              </div>
            </div>

            {/* Link to GitHub */}
            <a
              href="https://github.com/your-project"
              target="_blank"
              className="w-auto sm:w-32 px-4 py-2 bg-orange-700 rounded-2xl text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500"
            >
              <span>GitHub</span>
              <img
                src={openarrow}
                alt="Open Arrow"
                className="w-4 h-4 stroke-white"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Scroll animation progress for the fixed progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* Section with a gradient background and moving text */}
      <section className="pt-32 h-80 relative bg-gradient-to-t from-[#0a0825] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden">
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
          My Projects My Projects My Projects My Projects
        </motion.div>

        {/* Foreground title */}
        <motion.h1
          className="relative text-white text-[32px] sm:text-[56px] font-bold text-shadow z-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 50]), // Move slightly up on scroll
          }}
        >
          My Projects
        </motion.h1>
      </section>

      {/* Project cards */}
      {[1, 2, 3, 4, 5].map((image, index) => (
        <Image key={image} id={image} />
      ))}

      {/* Fixed progress bar */}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white bottom-[100px]"
        style={{
          scaleX,
          opacity: useTransform(scrollYProgress, [0.95, 1], [1, 0]), // Fade out as scroll reaches the end
        }}
      />
    </div>
  );
};

export default Project;
