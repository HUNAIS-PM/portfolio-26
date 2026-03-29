import React from "react";
import Title from "../ui/Title";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="w-full h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center">
          <Title title="About Me" des="Who I Am" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-1">
          <div className="w-full md:w-1/2">
            <img width="1200" height="809"               className="w-full h-full object-cover"
              src="/img/leaf/maple-6678635_1920.webp"
              alt="About Me"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
            <h2 className="text-2xl md:text-3xl text-black font-thin capitalize mb-4">Crafting Digital Experiences</h2>
            <p className="text-sm md:text-base font-bodyFont leading-6 mb-6">
              Hello! I'm a passionate developer with a love for creating beautiful
              and functional web applications. I have experience in a variety of
              technologies including React, Node.js, and more. I am always
              eager to learn new things and take on new challenges.
            </p>
            <Link to="/hire-me">
              <button className="hero-cta-button">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
