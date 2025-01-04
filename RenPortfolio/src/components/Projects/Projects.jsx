import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import vitafit from "../../assets/icon/vitafit.png";
import pro from "../../assets/icon/project.png";
import skinwhisper from "../../assets/icon/skinwhisper.png";
import openarrow from "../../assets/icon/openarrow.svg";
import AI from "../../assets/icon/AI.png";
import syn from "../../assets/icon/syn.png";

const Project = () => {
  // Function to determine badge color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-lime-600"; // Green for completed
      case "In Progress":
        return "bg-orange-500"; // Orange for in progress
      case "Coming Soon":
        return "bg-gray-500"; // Gray for coming soon
      default:
        return "bg-blue-500"; // Default color
    }
  };

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  function Image({
    id,
    imageSrc,
    description,
    techStack,
    link,
    buttonLabel,
    status,
  }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section
        id="Projects"
        className="bg-[#0c0429] h-screen flex items-center justify-center relative scroll-snap-align-center perspective-[500px]"
      >
        <div className="flex items-center justify-center w-full max-w-7xl px-5">
          <div
            ref={ref}
            className="relative w-full sm:w-[350px] md:w-[450px] h-[350px] sm:h-[450px] max-h-[90vh] bg-white overflow-hidden rounded-xl"
          >
            <img
              src={imageSrc}
              alt={`Project ${id}`}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
            />

            {/* Status Badge */}
            <div
              className={`absolute top-5 right-0 ${getStatusColor(
                status
              )} text-white text-xs sm:text-sm px-4 py-1 rounded-l-full shadow-md z-10`}
            >
              {status}
            </div>
          </div>

          <motion.div className="text-white pl-5 w-full sm:w-1/2" style={{ y }}>
            <motion.h2 className="text-[24px] sm:text-[32px] md:text-[56px] font-bold -tracking-[3px] leading-[1.2] text-shadow">
              {`#00${id}`}
            </motion.h2>
            <p className="mt-4 text-sm sm:text-lg md:text-xl">{description}</p>

            <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-4 flex-wrap">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="h-8 sm:h-10 px-3 sm:px-4 py-2 sm:py-2 rounded-2xl text-white text-center bg-[#4D93FF80] text-xs sm:text-sm flex items-center justify-center"
                >
                  {tech}
                </div>
              ))}
            </div>

            <a
              href={status === "Coming Soon" ? "#" : link}
              target={status === "Coming Soon" ? "_self" : "_blank"}
              className={`w-auto h-7 sm:w-32 px-3 py-1 rounded-2xl text-white flex items-center justify-center gap-2 transition-all duration-300 text-xs sm:text-sm mt-4 ${
                status === "Coming Soon"
                  ? "bg-gray-500 cursor-not-allowed opacity-50"
                  : "bg-orange-700 hover:shadow-lg hover:shadow-orange-500"
              }`}
              onClick={(e) => {
                if (status === "Coming Soon") e.preventDefault();
              }}
            >
              <span>{buttonLabel}</span>
              <img
                src={openarrow}
                alt="Open Arrow"
                className="w-4 h-4 stroke-white"
              />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const projects = [
    {
      id: 1,
      imageSrc: skinwhisper,
      description:
        "An e-commerce platform offering seamless shopping experiences.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://github.com/skinwhisper",
      buttonLabel: "GitHub",
      status: "In Progress",
    },
    {
      id: 2,
      imageSrc: vitafit,
      description:
        "A fitness tracking application built with React and Tailwind CSS.",
      techStack: [],
      link: "https://github.com/vitafit",
      buttonLabel: "Figma",
      status: "Completed",
    },
    {
      id: 3,
      imageSrc: pro,
      description: "A project management tool designed for team collaboration.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://www.figma.com/pro-management",
      buttonLabel: "Figma",
      status: "Completed",
    },
    {
      id: 4,
      imageSrc: AI,
      description: "A project management tool designed for team collaboration.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://www.figma.com/pro-management",
      buttonLabel: "Website",
      status: "Coming Soon",
    },
    {
      id: 5,
      imageSrc: syn,
      description: "A project management tool designed for team collaboration.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://www.figma.com/pro-management",
      buttonLabel: "Website",
      status: "Coming Soon",
    },
  ];

  return (
    <div>
      <section className="pt-16 sm:pt-32 h-60 sm:h-80 relative bg-gradient-to-t from-[#0a0825] via-[#0c0429] to-[#3f4078] flex justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-start text-center text-white text-[48px] sm:text-[64px] md:text-[128px] font-bold opacity-10 whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          My Projects My Projects My Projects My Projects
        </motion.div>

        <motion.h1
          className="relative text-white text-[24px] sm:text-[32px] md:text-[56px] font-bold text-shadow z-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
        >
          My Projects
        </motion.h1>
      </section>

      {projects.map((project) => (
        <Image
          key={project.id}
          id={project.id}
          imageSrc={project.imageSrc}
          description={project.description}
          techStack={project.techStack}
          link={project.link}
          buttonLabel={project.buttonLabel}
          status={project.status}
        />
      ))}

      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white bottom-[100px]"
        style={{
          scaleX,
          opacity: useTransform(scrollYProgress, [0.95, 1], [1, 0]),
        }}
      />
    </div>
  );
};

export default Project;
