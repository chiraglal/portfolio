import React from "react";
const Footer = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 flex-col flex justify-center items-center w-full py-[50px]">
      <h1 className="flex flex-col border-b-4 border-pink-600 text-3xl font-bold">
        Connect With Me!
      </h1>
      <div className="flex flex-row p-4 text-lg my-4 space-x-6 font-semibold">
        <p className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/chirag-lal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          LinkedIn
        </p>
        <p className="flex flex-col items-center">
          <a
            href="https://github.com/chiraglal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          Github
        </p>
        <p className="flex flex-col items-center">
          <a
            href="mailto:chiraglal15@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          Mail
        </p>
        <p className="flex flex-col items-center">
          <a
            href="https://drive.google.com/file/d/1UW8i3OUd5BNU2N8oq5-MpxYYO_BNGgMl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-file-arrow-down"></i>
          </a>
          Resume
        </p>
      </div>
    </div>
  );
};

export default Footer;
