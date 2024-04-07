import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.png";
import Material from "../assets/material.png";
import Python from "../assets/python.png";
import SQL from "../assets/sql.png";
import Java from "../assets/java.png";
const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline text-center">
            Skills
          </p>
          <p className="py-4 font-mono">
            These are the technologies i have worked with
          </p>
        </div>
        <div>
          <div className="font-mono w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={HTML} alt="HTML Icon" className="w-20 mx-auto" />
              <p>HTML</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={CSS} alt="HTML Icon" className="w-20 mx-auto" />
              <p>CSS</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={JavaScript} alt="HTML Icon" className="w-20 mx-auto" />
              <p>JavaScript</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={ReactImg} alt="HTML Icon" className="w-20 mx-auto" />
              <p>React JS</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={GitHub} alt="HTML Icon" className="w-20 mx-auto" />
              <p>Github</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={Tailwind} alt="HTML Icon" className="w-20 mx-auto" />
              <p>Tailwind</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={Material} alt="HTML Icon" className="w-20 mx-auto" />
              <p>Material UI</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={Java} alt="HTML Icon" className="w-20 mx-auto" />
              <p>Java</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={Python} alt="HTML Icon" className="w-20 mx-auto" />
              <p>Python</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 shadow-[#040c16]">
              <img src={SQL} alt="HTML Icon" className="w-20 mx-auto" />
              <p>SQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
