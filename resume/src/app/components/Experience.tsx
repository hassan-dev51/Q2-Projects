"use client";

import React from "react";

const Experience = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center gap-3 bg-[#614385]  md:w-[300px] w-[200px] rounded-[40px] p-4">
        <h3 className="md:text-xl text-[14px] text-white uppercase font-bold">
          Experience
        </h3>
      </div>
      <div className="mt-6">
        <div className="flex flex-col gap-2 md:text-xl text-[12px]">
          <h2 className="font-extrabold ">Artisan Innovation Technologies</h2>
          <h3 className="text-[#614385] font-bold ">React JS Developer</h3>
          <p>
            I did internship at this well repute software house for three months
            as <strong>React JS</strong> developer
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:text-xl text-[12px]">
          <h2 className="font-extrabold">Final Year Project</h2>
          <h3 className="text-[#614385] font-bold ">Digital Voting App</h3>
          <p>I build a MERN stack application in my bachelors degree</p>
        </div>

        <div className="flex flex-col gap-2 mt-4 md:text-xl text-[12px]">
          <h2 className="font-extrabold">Bootcamp Project</h2>
          <p>
            I build a many projects using <strong>React Js</strong> and{" "}
            <strong>Next Js</strong> those are displayed in my portfolio website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
