import { motion } from "framer-motion";
import lamp from "../../assets/icon/lamp.png";

const Hero = () => {
  return (
    <div className="py-24 h-screen relative bg-gradient-to-b from-[#000000] via-[#0c0429] to-[#3f4078]">
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-6xl font-bold text-center text-white">
          <h1 className="text-indigo-400">Hi, I am</h1>
          <h1 className="text-sky-200">Renad Alghamdi</h1>
        </div>

        <div className="w-1/3 mx-auto mt-10 border-t-2 border-white"></div>

        <div className="text-center mt-6 text-xl text-white">
          <p>
            I am a passionate software engineer with a focus on web design and
            UX/UI, dedicated to creating innovative and user-centered solutions.
          </p>
        </div>

        {/* Image with motion */}
        <motion.div className="absolute left-[-40px] top-[-90px]" drag>
          <img
            src={lamp}
            height="90"
            width="90"
            alt="lamp icon"
            className=""
            draggable="false"
          />
        </motion.div>

        {/* CV download button */}
        <div className="text-center mt-8">
          <a
            href="/"
            download
            className="bg-transparent text-white py-3 px-6 border-2 border-white rounded-md hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Browse My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
