"use client";

import React from "react";

const Hobbies = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 bg-[#614385]  md:w-[300px] w-[200px] rounded-[40px] p-4">
        <h3 className="md:text-xl text-[14px] text-white uppercase font-bold">
          Hobbies
        </h3>
      </div>
      <div className="flex md:flex-row flex-col justify-evenly mt-4 text-gray-400 font-normal text-2xl">
        <h2>Reading</h2>
        <h2>Martial Arts (Black Belt)</h2>
        <h2>Music</h2>
        <h2>Cricket</h2>
      </div>
    </div>
  );
};

export default Hobbies;
