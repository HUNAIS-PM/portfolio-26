
import React from "react";
import Title from "../ui/Title";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SkillSection = () => {
  const navigate = useNavigate();
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Figma",
    "Adobe XD",
  ];

  return (
    <section id="skills" className="w-full h-screen flex items-center border-b-[1px] border-b-black">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center">
          <Title title="My Skills" des="What I Know" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-200 rounded-full text-base font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full max-w-2xl mx-auto mt-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button
              onClick={() => navigate('/skills')}
              className="hero-cta-button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1.5 }}
            >
              View All Skills
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
