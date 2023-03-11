"use client";
import React from "react";

import Image from "next/image";
import resume from "./resume.png";
const About = () => {
  return (
    <div className="relative">
      <div className="w-[180px] h-[180px]  bg-white border-[3px] border-white rounded-[50%] flex justify-center items-center overflow-hidden m-auto translate-y-[90px] ">
        <Image
          src={resume}
          alt="image"
          width={150}
          style={{ height: "auto" }}
        />
      </div>
      <div
        className={`bg-[#fff6f62d] border-[2px] border-white rounded-[22px] p-2 flex flex-col pl-[40px] pt-[100px] text-white`}
      >
        <h2 className="md:text-[24px] text-[16px] my-6 uppercase">About Me</h2>
        <p>
          I am a Full Stack Developer with 1+ years of experience in developing
          web applications and websites. I have expertise in HTML, CSS,
          JavaScript, React js, Next js Express, Node.js, and AWS cloud.
        </p>
      </div>
    </div>
  );
};

export default About;
