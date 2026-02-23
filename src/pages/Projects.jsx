import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import DesignProjectCard from "../components/ui/DesignProjectCard";

import './LogoGallery.css';

import { projects, developerCategories } from "../constants/projects";
import { posterDesigns, poster2Designs, menuCard2Designs, logoDesigns, productDesigns, brochureDesigns, bannerDesigns, flyerDesigns, infographicDesigns, socialMediaDesigns, illustrationDesigns, designerCategories, categoryDescriptions } from "../constants/designProjects";

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevLocation, setPrevLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [mode, setMode] = useState("developer"); // 'developer' or 'designer'
  const currentCategories = mode === "developer" ? developerCategories : designerCategories;

  useEffect(() => {
    if (location.state?.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  useEffect(() => {
    const cats = mode === "developer" ? developerCategories : designerCategories;
    if (!cats.includes(selectedCategory)) {
      setSelectedCategory(cats[0]);
    }
  }, [mode, selectedCategory]);

  useEffect(() => {
    if (location.state?.mode) {
      setMode(location.state.mode);
    }
  }, [location.state]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Projects" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="text-3xl font-bold text-primeColor mb-4">My Projects</h1>
        <p className="text-base text-lightText mb-8">
          Showcasing some of my recent work and projects that highlight my skills in web development, design, and more.
        </p>
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative inline-flex h-10 bg-white border border-gray-300 rounded-none shadow-sm">
              <button
                type="button"
                onClick={() => setMode("developer")}
                className={`relative z-10 flex-1 py-2 px-4 text-sm font-medium text-center transition-colors duration-200 focus:outline-none focus:z-20 ${mode === "developer"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Developer
              </button>
              <button
                type="button"
                onClick={() => setMode("designer")}
                className={`relative z-10 flex-1 py-2 px-4 text-sm font-medium text-center transition-colors duration-200 focus:outline-none focus:z-20 ${mode === "designer"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Designer
              </button>
              <div
                className={`absolute top-0 left-0 h-full bg-primeColor rounded-none transition-all duration-300 ease-in-out ${mode === "developer" ? "w-1/2 translate-x-0" : "w-1/2 translate-x-full"
                  }`}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-none ${selectedCategory === category ? 'bg-primeColor text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primeColor hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-base text-lightText mt-4">{categoryDescriptions[selectedCategory]}</p>
        </div>
        {mode === "designer" && selectedCategory === "poster" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Poster Designs</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
              {posterDesigns.map((design) => (
                <div
                  key={design.id}
                  className="w-full relative group cursor-pointer"
                  onClick={() => navigate("/poster", { state: { data: "Works" } })}
                >
                  <div className="w-full h-96 relative overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">{design.title}</span>
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                    <div className="flex items-center justify-between font-titleFont">
                      <h2 className="text-lg text-primeColor font-bold">{design.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "menu card" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Menu Card Designs</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
              {poster2Designs.map((design) => (
                <div
                  key={design.id}
                  className="w-full relative group cursor-pointer"
                  onClick={() => navigate("/menucard", { state: { data: "Works" } })}
                >
                  <div className="w-full h-96 relative overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">{design.title}</span>
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                    <div className="flex items-center justify-between font-titleFont">
                      <h2 className="text-lg text-primeColor font-bold">{design.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "menu card 2" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Menu Card 2 Designs</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
              {menuCard2Designs.map((design) => (
                <div
                  key={design.id}
                  className="w-full relative group cursor-pointer"
                  onClick={() => navigate("/menucard2", { state: { data: "Works" } })}
                >
                  <div className="w-full h-96 relative overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">{design.title}</span>
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                    <div className="flex items-center justify-between font-titleFont">
                      <h2 className="text-lg text-primeColor font-bold">{design.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "logo" ? (
          <div className="w-full pb-20">
            <p className="heading">Logo Designs</p>
            <div className="gallery-image">
              {logoDesigns.map(design => (
                <div key={design.id} className="img-box mr-4">
                  <img src={design.img} alt={design.title} />
                  <div className="transparent-box">
                    <div className="caption">
                      <p>{design.title}</p>
                      <p className="opacity-low">Logo Design</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "product design" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Product Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "brochure" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Brochure Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brochureDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "banner" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Banner Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bannerDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "flyer" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Flyer Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flyerDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>

        ) : mode === "designer" && selectedCategory === "infographic" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Infographic Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infographicDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "social media" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Social Media Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialMediaDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : mode === "designer" && selectedCategory === "illustration" ? (
          <div className="w-full pb-20">
            <h2 className="text-3xl font-bold text-primeColor mb-4 text-center">Illustration Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {illustrationDesigns.map(design => (
                <DesignProjectCard key={design.id} design={design} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button type="button" className="text-white uppercase font-bold"> Hire me. </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => selectedCategory === "All" ? developerCategories.slice(1).includes(project.category) : project.category === selectedCategory)
              .map(project => (
                <div key={project.id} className="w-full bg-white shadow-lg rounded-none overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 mr-4">
                  <div className="w-full h-80 border-b-2 border-primeColor overflow-hidden relative group">
                    <img
                      className="transform object-cover object-top translate-y-0 group-hover:-translate-y-[20%] transition-transform duration-[3s] w-full h-full"
                      src={project.img}
                      alt={project.title}
                    />
                    <p className="absolute bottom-0 left-0 hidden group-hover:inline-block font-semibold bg-red-700 w-full text-center py-1 duration-200 text-white">
                      {project.title}
                    </p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="bg-primeColor text-white px-2 py-1 rounded-none text-xs">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.demo} className="text-primeColor hover:underline">Live Demo</a>
                      <a href={project.github} className="text-primeColor hover:underline">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
