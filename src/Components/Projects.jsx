import React, { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { projects } from "../utils/constants";

const Projects = () => {
  const [toast, setToast] = useState(false);

  const toastHandler = () => {
    setToast(true);
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
  };
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-grad1 to-grad2 w-full h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Projects
          </p>
          <p className="py-6">These are the Some Projects that I have made.</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {projects.map(({ title, child, description, liveLink, codeLink }) => (
            <div className="shadow-md py-2 rounded-lg flex flex-col">
              <div>
                {child}
                <p className="font-bold text-2xl">{title}</p>
                <p className="my-4 mx-3 text-gray">{description}</p>
              </div>
              <div className="mt-auto flex">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white w-1/2 px-5 py-3 my-2 mx-3 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd1 to-btngrd2 font-semibold"
                >
                  <button>Live</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white w-1/2 px-6 py-3 my-2 mx-3 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd3 to-btngrd4 font-semibold"
                  href={codeLink}
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}

          <div className="shadow-md shadow-gray py-2 rounded-lg">
            <div>
              <AiFillProject className="w-20 h-20 mx-auto" />
              <p className="font-bold text-2xl">Complex React Projects</p>
              <p className="my-4 mx-3">
                Here will be some complex projects made with use of NextJs
                (SSR),Apollo client , webhook , react-hook form validations ,
                storybook , optimization technique , lazy loading for images ,
                infinite scroll , pagination, etc.
              </p>
            </div>
            <div className="flex">
              <button
                onClick={() => toastHandler()}
                className=" text-white w-full px-6 py-3 my-2 mx-4 hover:scale-105 duration-200 flex items-center justify-center rounded-md bg-gradient-to-r from-btngrd1 via-btngrd3 to-btngrd4 font-semibold"
              >
               {toast ? 'Coming soon...' :  'Visit'}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
