import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="h-5 w-5 text-slate-300 transition-all duration-300 hover:text-blue-300"
      viewBox="0 0 122.879 103.609"
    >
      <path d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438L10.368,41.438z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="h-5 w-5 text-slate-300 transition-all duration-300 hover:text-blue-300"
      viewBox="0 0 122.878 122.88"
    >
      <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
    </svg>
  );

  let Links = [
    { name: "Home", link: "/hero" },
    { name: "section2", link: "/" },
    { name: "section3", link: "/" },
    { name: "section4", link: "/" },
    { name: "section5", link: "/" },
  ];

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll Down
      setShowNavbar(false);
    } else {
      // Scroll Up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.5 }}
      className="shadow-md w-full fixed top-0 left-0 z-50"
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-slate-300">
          DevRenad
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 bg-black bg-opacity-90" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 group">
              <a
                href={link.link}
                className="relative text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-400 to-blue-300  duration-500 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-blue-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
