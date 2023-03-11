"use client";

import React from "react";

const Language = () => {
  return (
    <div className="pl-7">
      {" "}
      <h2 className="md:text-4xl text-xl text-white py-7 uppercase">
        Languages
      </h2>
      <div className="gap-4 flex flex-col text-white">
        <div className="flex items-center gap-3 justify-center  w-[300px] rounded-[40px] p-4">
          <h2>Punjabi</h2>
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
        </div>

        <div className="flex items-center gap-3 justify-center  w-[300px] rounded-[40px] p-4">
          <h2 className="mr-4">Urdu</h2>
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-transparent border h-[20px] rounded-full" />
        </div>

        <div className="flex items-center gap-3 justify-center  w-[300px] rounded-[40px] p-4">
          <h2>English</h2>
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-white h-[20px] rounded-full" />
          <div className="w-[20px] bg-transparent border h-[20px] rounded-full" />
          <div className="w-[20px] bg-transparent border h-[20px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Language;
