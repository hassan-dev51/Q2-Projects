"use client";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Language from "./Language";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="flex gap-2 md:flex-row flex-col">
      <section className="bg-[#FFFEFE24] rounded-[22px] md:w-[414px] w-full p-2">
        <div className="pt-20 pl-7 h-[120px]">
          <h1 className="md:text-5xl sm:text-3xl text-xl text-white font-bold">
            Hassan Ali
          </h1>
          <p className="md:text-xl text-[14px] text-white font-normal">
            Full Stack Developer
          </p>
        </div>
        <About />
        <Contact />
        <Language />
      </section>
      <section className="bg-[#FFFCFC] rounded-[22px] p-6 flex-1">
        {" "}
        <Education />
        <Experience />
        <Skills />
        <Hobbies />
      </section>
    </div>
  );
};

export default Hero;
