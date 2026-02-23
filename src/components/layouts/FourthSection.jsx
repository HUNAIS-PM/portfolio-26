import React from 'react';
import './ThirdSection.css'; // Assuming FourthSection can use the same CSS

const FourthSection = () => {
  return (
    <section className="text-white w-full bg-slate-950 ">
      <>
        <div className="sm:sticky sm:top-0  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img
              src={process.env.PUBLIC_URL + '/img/leaf/autumn-3680684_1920.jpg'}
              alt="Autumn leaf"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-2  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img
              src={process.env.PUBLIC_URL + '/img/leaf/autumn-5709408_1920.jpg'}
              alt="Autumn leaf"
              className="transition-all duration-300 h-full w-full align-bottom object-cover [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-4  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img
              src={process.env.PUBLIC_URL + '/img/leaf/autumn-leaves-1740841_1920.jpg'}
              alt="Autumn leaves"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-6  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img
              src={process.env.PUBLIC_URL + '/img/leaf/maple-6678635_1920.jpg'}
              alt="Maple leaf"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-8  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img
              src={process.env.PUBLIC_URL + '/img/leaf/maple-leaves-2789234_1920.jpg'}
              alt="Maple leaves"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
      </>
    </section>
  );
};

export default FourthSection;