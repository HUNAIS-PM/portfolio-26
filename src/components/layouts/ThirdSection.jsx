import React from 'react';
import './ThirdSection.css'; // Keeping the CSS import as no instruction to remove it was given

const ThirdSection = () => {
  return (
    <section className="text-white w-full bg-slate-950 ">
      <>
        <div className="sm:sticky sm:top-0  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="800"               src={'/img/birds/bird-7396278_1920.webp'}
              alt="Bird"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-2  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="798"               src={'/img/birds/blue-tit-6908151_1920.webp'}
              alt="Blue tit bird"
              className="transition-all duration-300 h-full w-full align-bottom object-cover [box-shadow:0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-4  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="800"               src={'/img/birds/blue-tit-7965696_1920.webp'}
              alt="Blue tit bird looking left"
              className="transition-all duration-300 h-full w-full align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-6  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="801"               src={'/img/leaf/autumn-3680684_1920.webp'}
              alt="Autumn leaf"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-8  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="791"               src={'/img/leaf/autumn-5709408_1920.webp'}
              alt="Autumn leaf"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
        <div className="sm:sticky sm:top-12  w-full ">
          <figure className="w-full h-screen flex items-center justify-center ">
            <img width="1200" height="809"               src={'/img/leaf/maple-6678635_1920.webp'}
              alt="Maple leaf"
              className="transition-all duration-300 h-full w-full  align-bottom object-cover "
            />
          </figure>
        </div>
      </>
    </section>
  );
};

export default ThirdSection;
