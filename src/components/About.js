import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl sm:text-right font-bold ">
            <p>Hi. I'm Chirag, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            I am a detail-oriented person, always curious about things and enjoy
            learning. Actively looking for opportunities to use my skills for
            solving real-world problems. I am a highly motivated individual and
            I've acquired skill in Front-end web Development. Currently I am in
            search of obtaining a responsible career opportunity to utilize my
            skills, while making a significant contribution to the success of
            any organization.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
