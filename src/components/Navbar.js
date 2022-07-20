import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full fixed flex justify-between items-center px-4 bg-[#0a192f] h-[80px] text-gray-300">
      <div>
        <img src={Logo} style={{ width: "50px" }} className="rounded-full" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline hover:underline-offset-4">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:underline hover:underline-offset-4">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:underline hover:underline-offset-4">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:underline hover:underline-offset-4">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:underline hover:underline-offset-4">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/chirag-lal-141a0b19b/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/chiraglal"
              rel="noreferrer"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="chiraglal15@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5656f9]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://drive.google.com/file/d/1G6JRpNTVZzW5NpWVrx1iYLSdMgiEaoq6/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
