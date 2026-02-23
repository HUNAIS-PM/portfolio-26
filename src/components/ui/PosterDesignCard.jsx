import React from 'react';

const PosterDesignCard = ({ design }) => {
  return (
    <div key={design.id} className="w-full relative group mr-4">
      <div className="max-w-[300px] h-[500px] relative overflow-y-hidden mx-auto">
        <img src={design.img} alt={design.title} className="w-full h-full object-contain" />
      </div>
      <div className="max-w-[300px] py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4 mx-auto">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{design.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default PosterDesignCard;
