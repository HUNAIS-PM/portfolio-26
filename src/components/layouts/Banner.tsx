import React from "react";
import profileImg from "../../../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="rounded-full bg-red-30 w-36 h-36 bg-black">
        <img
          className="rounded-full border border-blue-600 w-full h-full object-cover p-2"
          src={profileImg}
          alt="ProfileImg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center gap-2 w-4/5">
        <h1 className="text-4xl md:text-5xl font-bold text-white">John Doe</h1>
        <h2 className="text-lg md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-rose-200 to-purple-200">
          Full Stack Developer
        </h2>
        <p className="text-sm md:text-base tracking-wide text-slate-100 text-center md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem maxime minus officia dicta suscipit aliquam iusto
          veniam voluptate quis, blanditiis, saepe fugit eius omnis voluptatem
          laboriosam voluptas, ipsam ab temporibus.
        </p>
      </div>
    </div>
  );
};

export default Banner;
