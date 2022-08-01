import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full bg-[#0a192f] text-gray-300 pt-4">
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
              <p>
                Hi. I'm Chirag, nice to meet you. Please take a look around.
              </p>
            </div>
            <div className="text-lg">
              I am a highly motivated individual and I've acquired skill in
              Front-end web Development. Currently I am in search of obtaining a
              responsible career opportunity to utilize my skills, while making
              a significant contribution to the success of any organization.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a192f] text-gray-300 md:flex-col pt-20 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[1000px] w-full grid-cols-2">
            <div className="lg:text-center sm:text-center md:text-center pb-8 pl-4">
              <p className="text-2xl font-bold inline border-b-2 border-pink-600">
                Education
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pb-20 pl-4">
            <div className="text-xl sm:text-right">
              <p>
                <p className="font-bold">
                  Guru Nanak Institute of Technology, Kolkata, West Bengal
                </p>
                <p className="p-2">
                  Bachelor of Technology - BTech, Electronics and Communication
                  Engineering
                </p>
                <p className="p-2">(Nov 2020 - Jul 2024)</p>
              </p>
            </div>
            <div className="text-lg">
              <p className="font-bold">
                Indira Gandhi Memorial Senior Secondary School, Kolkata, West
                Bengal
              </p>
              <p className="p-2">
                Senior Secondary, Mathematics and Computer Science
              </p>
              <p className="p-2">(April 2006 - May 2020)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
