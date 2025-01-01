import { motion } from "framer-motion";
import linked from "../../assets/icon/linkedin.svg"; // Ensure the correct path for the LinkedIn icon

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0c0429] py-6 w-full px-6" // Add horizontal padding (px-6)
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
        {/* Text on the left side */}
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} DevRenad. All rights reserved.
        </p>

        {/* Long horizontal line in the center */}
        <div className="flex-1 border-t-2 border-gray-500 mx-4"></div>

        {/* LinkedIn icon on the right */}
        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }} // Zoom in effect on hover
          className="transition-all duration-300"
        >
          <img src={linked} alt="LinkedIn" className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
