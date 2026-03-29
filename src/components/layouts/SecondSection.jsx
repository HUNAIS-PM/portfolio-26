import React from 'react';
import './SecondSection.css'; // Keeping the CSS import as no instruction to remove it was given

const SecondSection = () => {
  return (
    <section className="text-white w-full bg-slate-950 ">
      <>
        <div className="sm:sticky sm:top-0  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="1800"               src={'/img/nature/grasses-7304572_1920.webp'}
              alt="Grasses in nature"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-2  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="1846"               src={'/img/nature/jingle-bells-9924928_1920.webp'}
              alt="Jingle bells decoration"
              className="transition-all duration-300 h-full w-full align-bottom object-cover [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-4  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="1800"               src={'/img/nature/pexels-ankit-rainloure-1425442-29876830.webp'}
              alt="Trees in foggy weather"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-6  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="1500"               src={'/img/nature/pexels-chiaroscuro-154214185-10601420.webp'}
              alt="Abstract nature scene"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-8  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="1800"               src={'/img/nature/pexels-farisi-2158123179-35290807.webp'}
              alt="Person walking in nature"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-12  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="745"               src={'/img/nature/pexels-pixabay-35196.webp'}
              alt="Dew drops on leaf"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
      </>
    </section>
  );
};

export default SecondSection;
