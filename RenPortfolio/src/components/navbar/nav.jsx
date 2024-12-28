import React, { useState } from "react";
import MenuSVG from "../../assets/icon/menuIcon.svg";
import CloseSVG from "../../assets/icon/closeIcon.svg";

const Nav = () => {
  let Links = [
    { name: "section1", link: "/" },
    { name: "section2", link: "/" },
    { name: "section3", link: "/" },
    { name: "section4", link: "/" },
    { name: "section5", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          DevRenad
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <img src={CloseSVG} className="h-5 w-5" alt="Close Menu" />
          ) : (
            <img src={MenuSVG} className="h-5 w-5" alt="Open Menu" />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
