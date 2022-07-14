import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-2 pt-4 flex justify-center flex-col h-full">
        <p className="text-pink-600">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] my-2">
          Chirag Lal
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am Enthusiastic about Front End Web Development.
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          I'm Chirag, a third-year student at Guru Nanak Institute of
          Technology, passionate about programming and technology.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
