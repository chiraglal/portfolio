import React from "react";
import Weatherapp from "../assets/weatherapp.png";
import Loginpage from "../assets/loginpage.png";
import Notes from "../assets/notes.png";
import Quotes from "../assets/quotes.png";
import Todos from "../assets/todos.png";
import FoodWebsite from "../assets/foodwebsite.png";
const Work = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div className="pb-8 sm:text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-4">Check out some of my Projects</p>
        </div>
        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://weatherapp-reactjs-owapi.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/Weather-App-React-JS"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Loginpage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://login-page-reactjs.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 mt-4 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/react-login-page"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Notes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  HTML CSS JS App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://notetakingappjs.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/NotesApp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Quotes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://advice-quote-generator-app.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/Web-Dev-Projects/tree/main/random-quote-generator"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todos})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold text-white tracking-wider p-auto">
                  Todos Made with Bootstrap
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://todos-bootstrap.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/Web-Dev-Projects/tree/main/Todo%20App"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FoodWebsite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-div"
          >
            <div>
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold text-white tracking-wider p-auto">
                  React + Tailwind App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://react-tailwind-food-website.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/chiraglal/react-tailwind-food-website"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
