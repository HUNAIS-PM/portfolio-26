import React from 'react';

const LogoDesignCard = ({ design }) => {
  return (
    <div key={design.id} className="img-box mr-4">
      <img src={design.img} alt={design.title} />
      <div className="transparent-box">
        <div className="caption">
          <p>{design.title}</p>
          <p className="opacity-low">Logo Design</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignCard;
