import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import pro from "../../assets/icon/project.png";
import openarrow from "../../assets/icon/openarrow.svg"; // Import the openarrow SVG

const Project = () => {
  // Parallax function
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  // Image component
  function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const [isHovered, setIsHovered] = useState(false);

    return (
      <section className="bg-[#0c0429] h-screen flex items-center justify-center relative scroll-snap-align-center perspective-[500px]">
        <div className="flex items-center justify-between w-full max-w-7xl px-5">
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
              }`}
            />
          </div>

          <div className="text-white pl-5 w-full sm:w-1/2">
            <motion.h2
              className="text-[32px] sm:text-[56px] font-bold -tracking-[3px] leading-[1.2] text-shadow"
              style={{ y }}
            >
              {`#00${id}`}
            </motion.h2>
            <p className="mt-4 text-lg sm:text-xl">
              This project showcases a web application built using React and
              styled with Tailwind CSS. The project focuses on user interaction
              and modern web design.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <div className=" h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                React
              </div>
              <div className="h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                Tailwind
              </div>
              <div className="mb-6 h-10 px-4 py-2 rounded-2xl text-white text-center bg-[#4D93FF80]">
                JavaScript
              </div>
            </div>

            <a
              href="https://github.com/your-project"
              target="_blank"
              className="w-auto sm:w-32 px-4 py-2 bg-orange-700 rounded-2xl text-white flex items-center justify-center gap-2"
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

  // Scroll animation progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* Add wavy effect for section */}
      <section className="bg-[#0c0429] h-screen flex justify-center items-center relative scroll-snap-align-center perspective-[500px] clip-path-wave">
        <motion.h1
          className="absolute text-white text-[32px] sm:text-[56px] font-bold top-5 text-shadow"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
        >
          My Projects
        </motion.h1>
      </section>

      {/* Adjusted layout for projects */}
      {[1, 2, 3, 4, 5].map((image, index) => (
        <Image key={image} id={image} />
      ))}

      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white bottom-[100px]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default Project;
