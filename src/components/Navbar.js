import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#8a00ff] font-poppins">
        Purple Feather
      </h1>
      <ul className="hidden md:flex cursor-pointer">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">Home</li>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">Services</li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">Gallery</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">About</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#8a00ff] m-4 font-poppins">
          Purple Feather
        </h1>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 border-b border-gray-600 font-poppins">Home</li>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 border-b border-gray-600 font-poppins">
            Services
          </li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 border-b border-gray-600 font-poppins">Gallery</li>
        </Link>
        <Link to="abput" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 border-b border-gray-600 font-poppins">About</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4 font-poppins">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
