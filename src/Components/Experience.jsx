import React from "react";
import GeekyantsLogo from "../Assets/Geekyants.png";
import { companyDetails } from "../utils/constants";

const Experience = () => {


  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-grad2 to-grad1 w-full h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-screen h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray p-2 inline">
            Experience
          </p>
          <p className="py-6">My work experience till now.</p>
        </div>
        <div className="w-full grid grid-cols-1 gap-8 text-center py-8 sm:px-0">
          <div className="shadow-md shadow-gray py-2 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center justify-center">
              <img

                className="h-[80px] w-[80px] rounded-full"
                src={GeekyantsLogo}
                alt="Geekyants"
              />
              <div className="px-10 sm:py-3 flex flex-col justify-center">
                <p className="font-bold sm:py-3 text-xl">
                 {companyDetails.company_name} - {companyDetails.designation}
                </p>
                <p className="font-bold sm:py-3 text-xl">{companyDetails.duration}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="my-3 justify-center font-semibold text-btngrd1 flex flex-wrap items-center">
                Tech Stack - {companyDetails.skills.map((skill)=>{
                  return <span className=" px-2 py-1 rounded-lg border ml-2 mt-1">
                    {skill}
                  </span>
                })}
              </p>
              <p className="my-3 justify-center font-semibold underline underline-offset-8">Roles and Responsibility</p>
              <p className="mb-5 px-2">- Designing and Building the user interface of the web application. <br/>
                - Create modular React components<br/>
                - Working with typescript <br/>
                - Working on Performance tuning Technique. <br/>
                - State management using Redux and Toolkit<br/>
                - Accessibility, testing, and performance optimization  <br/>
                - Client-side routing with Next.js, SSR <br/>
                <span className="w-[80px]">- Collaborate with designers and backend developers, participate in code reviews,<br/> and document code and architectural decisions for the team's benefit</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
