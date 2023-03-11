"use client";

import React from "react";

const Education = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center gap-3 bg-[#614385]  md:w-[300px] w-[200px] rounded-[40px] p-4">
        <h3 className="md:text-xl text-[14px] text-white uppercase font-bold">
          Education
        </h3>
      </div>
      <div className="flex justify-between items-center  my-4">
        <div className="md:text-[16px] text-[12px]">
          <h2>BS (Information Technology)</h2>
          <h4 className="font-bold">University of Gujjrat</h4>
        </div>
        <div>
          <span className="font-bold md:text-[16px] text-[12px]">
            Sep 2018 - Oct 2022
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center  my-4">
        <div className="md:text-[16px] text-[12px]">
          <h2>CNC (Cloud Native Computing)</h2>
          <h4 className="font-bold">PIAIC</h4>
        </div>
        <div>
          <span className="font-bold md:text-[16px] text-[12px]">
            April 2020 - Dec 2022
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center  my-4">
        <div className="md:text-[16px] text-[12px]">
          <h2>Matric && Intermediate</h2>
          <h4 className="font-bold">Gujranwala Board</h4>
        </div>
        <div>
          <span className="font-bold md:text-[16px] text-[12px]">
            March 2013 - June 2017
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
