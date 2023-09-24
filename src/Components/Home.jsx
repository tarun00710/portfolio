import React from "react";
import ProfilePic from "../Assets/Profile.png";
import Resume from "../Assets/tarun_resume_sep.pdf";
import { BiRightArrow, BiDownload } from "react-icons/bi";
import { profileBasicInfo } from "../utils/constants";

const Home = () => {
  return (
    <div
      name="Home"
      className=" w-full bg-gradient-to-b from-grad1 via-head to-grad2 py-10"
    >
      <div className="flex justify-center mx-auto items-center p-4">
        <div className="flex flex-col">
          <p className="text-gray font-bold py-4 max-w-md">
            Welcome to my Portfolio.<br/> I'm <span className="text-4xl text-head2  tracking-wide">{profileBasicInfo.name}</span>
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
             {profileBasicInfo.designation}
          </h2>
          <p className="text-gray py-4 max-w-md">
            {profileBasicInfo.profile_description}
          </p>
          <div className="flex flex-row justify-center sm:justify-start">
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-btngrd1 to-btngrd2 font-semibold">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrow className="mx-1" />
              </span>
            </button>
            <a href={Resume} target="_blank" rel="noreferrer" download={true}>
              <button className=" group text-white w-fit px-6 py-3 my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-btngrd3 to-btngrd4 font-semibold">
                Resume
                <span className="group-hover:scale-105 duration-300">
                  <BiDownload className="mx-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className=" md:mt-0 mt-16 mb-4">
          <img
            src={ProfilePic}
            alt="my Profile pic"
            className="rounded-full max-w-80 max-h-80  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
