
import React from "react";
import Title from "../ui/Title";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceSection = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="w-full h-screen flex items-center border-b-[1px] border-b-black">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center">
          <Title title="My Services" des="What I Do" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mt-10">
          <div className="w-full p-6 flex flex-col gap-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-base font-bodyFont leading-6">
              I create stunning and responsive websites using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="w-full p-6 flex flex-col gap-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-base font-bodyFont leading-6">
              I design user-friendly and intuitive interfaces that provide a great user experience. I use tools like Figma and Adobe XD.
            </p>
          </div>
          <div className="w-full p-6 flex flex-col gap-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Backend Development</h3>
            <p className="text-base font-bodyFont leading-6">
              I build robust and scalable backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-2xl mx-auto mt-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.button
              onClick={() => navigate('/services')}
              className="hero-cta-button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1.5 }}
            >
              View All Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
