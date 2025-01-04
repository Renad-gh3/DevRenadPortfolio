import { motion } from "framer-motion";
import css from "../../assets/icon/css.png";
import html from "../../assets/icon/html.png";
import js from "../../assets/icon/js.png";
import tail from "../../assets/icon/tailwind.png";
import java from "../../assets/icon/java.png";
import react from "../../assets/icon/react.png";
import github from "../../assets/icon/github.png";
import mongo from "../../assets/icon/mongoDB.png";
import figma from "../../assets/icon/figma.png";
import C from "../../assets/icon/c.png";

const Skills = () => {
  // Skill data array with the icons and their descriptions
  const skillIcons = [
    { src: html, alt: "HTML", width: 80, height: 80 },
    { src: css, alt: "CSS", width: 80, height: 80 },
    { src: js, alt: "JavaScript", width: 80, height: 80 },
    { src: tail, alt: "TailwindCSS", width: 80, height: 80 },
    { src: java, alt: "Java", width: 80, height: 80 },
    { src: react, alt: "React", width: 80, height: 80 },
    { src: github, alt: "GitHub", width: 80, height: 80 },
    { src: mongo, alt: "MongoDB", width: 70, height: 50 },
    { src: figma, alt: "Figma", width: 80, height: 50 },
    { src: C, alt: "C Language", width: 80, height: 80 },
  ];

  return (
    <div>
      {/* Title Section */}
      <section
        id="Skills"
        className="h-80 pt-32 relative bg-gradient-to-b from-[#0c0429] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden"
      >
        {/* Logo animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start text-center text-white text-[48px] sm:text-[64px] md:text-[128px] font-bold opacity-10 whitespace-nowrap"
          initial={{ x: "100%" }} // Start position outside the right edge
          animate={{ x: "-100%" }} // End position outside the left edge
          transition={{
            repeat: Infinity, // Infinite looping
            duration: 10, // Duration for the complete cycle
            ease: "linear", // Smooth and constant movement
          }}
        >
          programming skill programming skill
        </motion.div>

        {/* Section title */}
        <motion.h1 className="relative text-white text-[32px] sm:text-[56px] font-bold text-shadow z-10">
          Skills
        </motion.h1>
      </section>

      {/* Skills Section */}
      <section className="h-auto relative bg-gradient-to-t from-[#0c0429] via-[#0c0429] to-[#3f4078] py-24 flex justify-center">
        <div className="flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6">
            {skillIcons.slice(0, 4).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={skill.width * 0.8} // Reduced size for smaller screens
                height={skill.height * 0.8} // Reduced size for smaller screens
                className="rounded-lg shadow-md"
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 1.2 }}
                whileHover={{
                  scale: 1.2, // Scale the icon up when hovered

                  transition: { duration: 0.1 }, // Smooth transition for hover effect
                }}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6">
            {skillIcons.slice(4, 7).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={skill.width * 0.8} // Reduced size for smaller screens
                height={skill.height * 0.8} // Reduced size for smaller screens
                className="rounded-lg shadow-md"
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: (index + 4) * 0.2, duration: 1.2 }}
                whileHover={{
                  scale: 1.2, // Scale the icon up when hovered

                  transition: { duration: 0.1 }, // Smooth transition for hover effect
                }}
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6">
            {skillIcons.slice(7, 9).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={skill.width * 0.8} // Reduced size for smaller screens
                height={skill.height * 0.8} // Reduced size for smaller screens
                className="rounded-lg shadow-md"
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: (index + 7) * 0.2, duration: 1.2 }}
                whileHover={{
                  scale: 1.2, // Scale the icon up when hovered

                  transition: { duration: 0.1 }, // Smooth transition for hover effect
                }}
              />
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex justify-center gap-4 sm:gap-6">
            {skillIcons.slice(9, 10).map((skill, index) => (
              <motion.img
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={skill.width * 0.8} // Reduced size for smaller screens
                height={skill.height * 0.8} // Reduced size for smaller screens
                className="rounded-lg shadow-md"
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: (index + 9) * 0.2, duration: 1.2 }}
                whileHover={{
                  scale: 1.2, // Scale the icon up when hovered

                  transition: { duration: 0.1 }, // Smooth transition for hover effect
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
