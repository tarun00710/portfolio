import React from "react";

import { techList } from "../utils/constants";

const Technologies = () => {
 

  return (
    <div
      name="Technologies"
      className="bg-gradient-to-b from-grad2 to-grad1 w-full h-full pt-12 md:pt-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techList.map(({ id, child, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray hover:scale-105 duration-500 py-2 rounded-lg"
            >
              {child}
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
