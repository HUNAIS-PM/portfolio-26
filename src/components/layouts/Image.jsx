import React from "react";

const Image = ({ imgSrc, className }) => {
  return <img loading="lazy" decoding="async" className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
