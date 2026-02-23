import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Title from "../ui/Title"; // New import
import { projects, developerCategories } from "../../constants/projects";

const Developersection = () => { // Renamed component
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects.filter(p => developerCategories.includes(p.category)).slice(0, 3);
    }
    return projects.filter(p => p.category === selectedCategory).slice(0, 3);
  }, [selectedCategory]);

  return (
    <motion.div
      id="developer-section"
      className="relative w-full flex-col items-center justify-center bg-gray-100 text-gray-900 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center z-10 p-8 md:p-16">
        <div className="flex justify-center items-center text-center">
          <Title title="Development Portfolio" des="An overview of professional development projects." />
        </div>

        <div className="flex flex-wrap justify-center gap-2 my-8">
          {developerCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-none ${selectedCategory === category ? 'bg-primeColor text-white' : 'bg-gray-200 text-gray-700'} hover:bg-primeColor hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {filteredProjects.map(project => (
            <div key={project.id} className="w-full bg-white shadow-lg rounded-none overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-full h-80 border-b-2 border-primeColor overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src={project.img}
                  alt={project.title}
                />
              </div>
            </a>
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

        <div className="flex justify-center items-center w-full max-w-2xl mx-auto mt-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button
              onClick={() => navigate('/works', { state: { mode: 'developer' } })}
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

export default Developersection;