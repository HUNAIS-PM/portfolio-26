"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplashCursor } from '@appletosolutions/reactbits'; // Import SplashCursor

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const line1 = "Creative";
  const line2 = "Portfolio";
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    // Scroll-triggered animation for lines
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tlScroll
      // Lines parallax
      .to(line1Ref.current, { y: -50 }, 0)
      .to(line2Ref.current, { y: -30 }, 0)
      .to(line3Ref.current, { y: -30 }, 0);

  }, []);

  const [active, setActive] = useState(false);

  return (
    <motion.div
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SplashCursor
            SIM_RESOLUTION={256}
            DYE_RESOLUTION={2048}
            DENSITY_DISSIPATION={3}
            VELOCITY_DISSIPATION={1.5}
            PRESSURE={0.4}
            CURL={0}
            SPLAT_RADIUS={0.25}
            SPLAT_FORCE={8000}
            COLOR_UPDATE_SPEED={23}
          />
        </div>
      )}
      {/* Background Lines */}
      <motion.div
        ref={line1Ref}
        className="absolute top-1/2 left-1/2 w-px h-3/4 bg-black transform -translate-y-1/2 -translate-x-1/2 rotate-45"
      />
      <motion.div
        ref={line2Ref}
        className="absolute top-[45%] left-1/2 w-px h-3/4 bg-black transform -translate-y-1/2 -translate-x-1/2 -rotate-45"
      />
      <motion.div
        ref={line3Ref}
        className="absolute top-[55%] left-1/2 w-px h-3/4 bg-black transform -translate-y-1/2 -translate-x-1/2 -rotate-45"
      />

      <div className="text-center z-10 p-8 md:p-16 relative">
        {/* The text content with character-by-character animation */}
        <motion.div
          className="relative z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="fluid-text font-bold overflow-hidden"
            variants={container}
          >
            {line1.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="fluid-text font-bold overflow-hidden"
            variants={container}
          >
            {line2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
