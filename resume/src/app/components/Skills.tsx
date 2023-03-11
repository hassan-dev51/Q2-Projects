"use client";

import Image from "next/image";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ImagesArray from "./Images";

const Skills = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 bg-[#614385]  md:w-[300px] w-[200px] rounded-[40px] p-4">
        <h3 className="md:text-xl text-[14px] text-white uppercase font-bold">
          Skills
        </h3>
      </div>
      <div>
        <div className="m-auto mt-7 max-w-3xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {ImagesArray.map((image) => (
            <div className="w-[80px]" key={image.id}>
              <Image src={image.image} alt="html" width={50} height={50} />
              <CircularProgressbar
                value={image.percentage}
                strokeWidth={9}
                className="-translate-y-16 -translate-x-2"
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#614385",
                  trailColor: "transparent",
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
