import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-scroll"; // لاستخدام التمرير التلقائي
import vitafit from "../../assets/icon/vitafit.png";
import pro from "../../assets/icon/pro.jpg";
import skinwhisper from "../../assets/icon/skinwhisper.png";
import openarrow from "../../assets/icon/openarrow.svg";
import AI from "../../assets/icon/AI.png";
import syn from "../../assets/icon/syn.png";
import X from "../../assets/icon/x.svg";

const Project = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-lime-600";
      case "In Progress":
        return "bg-orange-500";
      case "Coming Soon":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
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
    extraLink,
  }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section
        id={`project-${id}`}
        className="relative h-[70vh] flex bg-[#0c0429] items-center justify-center "
      >
        <motion.div
          ref={ref}
          className="flex items-center justify-center w-full max-w-7xl px-5"
          style={{ y }}
        >
          <motion.div className="relative w-full sm:w-[350px] md:w-[450px] h-[350px] sm:h-[450px] max-h-[90vh] bg-white overflow-hidden rounded-xl">
            <img
              src={imageSrc}
              alt={`Project ${id}`}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
            />
            <div
              className={`absolute top-5 right-0 ${getStatusColor(
                status
              )} text-white text-xs sm:text-sm px-4 py-1 rounded-l-full shadow-md z-10`}
            >
              {status}
            </div>
          </motion.div>

          <motion.div className="text-white pl-5 w-full sm:w-1/2">
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

            {status === "Completed" && extraLink && (
              <a
                href={extraLink}
                target="_blank"
                className="w-auto h-7 sm:w-32 px-3 py-1 rounded-2xl text-white flex items-center justify-center gap-2 transition-all duration-300 text-xs sm:text-sm mt-4 bg-[#404040] hover:shadow-lg hover:shadow-[#7e7e7e]"
              >
                <img src={X} alt="X Icon" className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </motion.div>
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
        "Skin Whisper is a full-stack platform that offers personalized skincare routines, product recommendations, and a seamless shopping experience based on skin type and concerns.",
      techStack: ["React.js", "CSS", "MongoDB"],
      link: "https://github.com/Renad-gh3/SkinWisper",
      buttonLabel: "GitHub",
      status: "In Progress",
    },
    {
      id: 2,
      imageSrc: vitafit,
      description:
        "VitaFit is an all-in-one health app that helps users schedule gyms, order healthy meals, arrange transportation, access health advice, and provides daycare services for mothers.",
      techStack: [],
      link: "https://www.figma.com/design/wnASKB85fc4RUHV6cNjDUo/VitaFit?node-id=0-1&t=JnRNcRexyn3EvNf6-1",
      buttonLabel: "Figma",
      status: "Completed",
    },
    {
      id: 3,
      imageSrc: pro,
      description:
        "Basira Al-Maliya is an API for the visually impaired, providing voice navigation, AI text reading, and security features like voice recognition and AI-driven fraud detection for secure financial management.",
      techStack: [],
      link: "https://www.figma.com/design/09uLj4y8MNae3oEqXTw7pp/Basira-Maliyah-(Portfolio)?node-id=0-1&t=caSiWpM6HccQTxZM-1",
      buttonLabel: "Figma",
      status: "Completed",
      extraLink: "https://x.com/BasiraMaliya", // New link for X
    },
    {
      id: 4,
      imageSrc: AI,
      description:
        "AI Club at Jeddah University is a platform showcasing the club’s vision, structure, and goals. It highlights AI workshops, activities, and events aimed at enhancing students' skills and engagement in the AI field.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "/",
      buttonLabel: "Website",
      status: "Coming Soon",
    },
    {
      id: 5,
      imageSrc: syn,
      description:
        "Synapse is a non-profit organization under SDAIA. Their website showcases events, educational resources, courses, and initiatives that benefit the community and promote engagement.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://www.figma.com/pro-management",
      buttonLabel: "Website",
      status: "Coming Soon",
    },
  ];

  return (
    <div style={{ scrollBehavior: "smooth" }} className="bg-red-500">
      {" "}
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
          extraLink={project.extraLink}
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
