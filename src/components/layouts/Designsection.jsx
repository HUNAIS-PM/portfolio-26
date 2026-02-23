import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Title from "../ui/Title";
import LogoDesignCard from "../ui/LogoDesignCard";
import DesignProjectCard from "../ui/DesignProjectCard";
import {
  posterDesigns, logoDesigns, productDesigns, brochureDesigns, bannerDesigns, flyerDesigns,
  infographicDesigns, socialMediaDesigns, illustrationDesigns, designerCategories
} from "../../constants/designProjects";

const Designsection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("logo");

  const currentDesignProjects = useMemo(() => {
    switch (selectedCategory) {
      case "logo":
        return logoDesigns;
      case "product design":
        return productDesigns.slice(0,3);
      case "brochure":
        return brochureDesigns.slice(0,3);
      case "banner":
        return bannerDesigns.slice(0,3);
      case "flyer":
        return flyerDesigns.slice(0,3);
      case "infographic":
        return infographicDesigns.slice(0,3);
      case "social media":
        return socialMediaDesigns.slice(0,3);
      case "illustration":
        return illustrationDesigns.slice(0,3);
      case "poster":
        return posterDesigns.slice(0,4);
      default:
        return [];
    }
  }, [selectedCategory]);

  return (
    <motion.div
      className="relative w-full flex-col items-center justify-center bg-[#f9f9f9] text-gray-900 px-[10%] py-20 pb-40 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center z-10 p-8 md:p-16">
        <div className="flex justify-center items-center text-center">
          <Title title="Design Portfolio" des="An overview of professional design projects." />
        </div>

        <div className="flex flex-wrap justify-center gap-2 my-8">
          {designerCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-none ${selectedCategory === category ? 'bg-primeColor text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primeColor hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedCategory === "logo" ? (
          <div className="w-full pb-20">
            <p className="text-center text-3xl tracking-wide p-10 text-black">Logo Designs</p>
            <div className="gallery-image">
              {currentDesignProjects.map(design => (
                <LogoDesignCard key={design.id} design={design} />
              ))}
            </div>
          </div>
        ) : selectedCategory === "poster" ? (
          <div className="w-full pb-20">
            <h2 className="text-center text-3xl tracking-wide p-10 text-black">Poster Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {currentDesignProjects.map(design => (
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
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentDesignProjects.map(design => (
              <DesignProjectCard key={design.id} design={design} />
            ))}
          </div>
        )}

        <div className="flex justify-center items-center w-full max-w-2xl mx-auto mt-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button
              onClick={() => navigate('/works', { state: { mode: 'designer' } })}
              className="hero-cta-button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1.5 }}
            >
              See More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Designsection;
