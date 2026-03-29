import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#030303] border-t border-white/[0.04] py-4">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-700 uppercase flex items-center gap-1">
          <AiOutlineCopyright className="text-xs" />
          2026 Skytrigon · All Rights Reserved
        </p>
        <a href="https://skytrigon.com/" target="_blank" rel="noreferrer"
          className="font-bodyFont text-[0.6rem] tracking-widest text-gray-700 hover:text-[#ff014f] uppercase transition-colors duration-300">
          Powered by Skytrigon.com
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
