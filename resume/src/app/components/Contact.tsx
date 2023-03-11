"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsGlobe2 } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col gap-3 items-center text-white">
        <div className="flex items-center gap-3 bg-[#fff6f62d] w-[300px] rounded-[40px] p-4">
          <AiOutlineMail />
          <Link href="mailto:hassanmunir363@gmail.com">
            hassanmnir363@gmail.com
          </Link>
        </div>

        <div className="flex items-center gap-3 bg-[#fff6f62d] w-[300px] rounded-[40px] p-4">
          <BsTelephone />
          <Link href="tel:+92 3456760792">+92 3456760792</Link>
        </div>

        <div className="flex items-center gap-3 bg-[#fff6f62d] w-[300px] rounded-[40px] p-4">
          <BsGlobe2 />
          <Link href="https://hassanalidev.netlify.app/">Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
