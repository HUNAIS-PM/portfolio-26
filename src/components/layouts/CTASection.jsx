import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Title from "../ui/Title"; // Assuming a Title component exists and is used for consistency

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex items-center border-b-[1px] border-b-black bg-primeColor text-white">
      <div className="container mx-auto text-center">
        <Title title="Let’s Build Something That Stands Out" des="I help businesses and individuals turn ideas into high-quality web, design, and AI solutions that perform and scale." />
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={() => navigate('/hire-me')}
            className="hero-cta-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.5 }}
          >
            Start a Project
          </motion.button>
          <motion.button
            onClick={() => navigate('/works', { state: { mode: 'developer' } })}
            className="hero-cta-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.6 }}
          >
            See My Work
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
