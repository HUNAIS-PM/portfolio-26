import React from 'react';

const DesignProjectCard = ({ design }) => {
  return (
    <div key={design.id} className="w-full relative group mr-4">
      <div className="max-w-80 h-96 relative overflow-y-hidden">
        <img src={design.img} alt={design.title} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{design.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DesignProjectCard;
