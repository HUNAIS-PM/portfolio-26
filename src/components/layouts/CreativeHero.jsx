import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_ITEMS = [
  "Creative Portfolio",
  "★",
  "Design & Code",
  "★",
  "Creative Portfolio",
  "★",
  "Design & Code",
  "★",
  "Creative Portfolio",
  "★",
  "Design & Code",
  "★",
];

const CreativeHero = () => {
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Infinite marquee scroll
    const marq = marqueeRef.current;
    if (!marq) return;

    const totalWidth = marq.scrollWidth / 2;
    gsap.to(marq, {
      x: -totalWidth,
      duration: 18,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background grid / noise texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #fff 60px, #fff 61px),
                            repeating-linear-gradient(90deg, transparent, transparent 60px, #fff 60px, #fff 61px)`,
        }}
      />

      {/* Red accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff014f] opacity-[0.08] blur-[120px] pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-28 pt-16">

        {/* Small label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-bodyFont text-xs md:text-sm tracking-[0.35em] text-[#ff014f] uppercase mb-6"
        >
          — Portfolio 2026
        </motion.p>

        {/* CREATIVE - huge outlined text */}
        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-lemonMilk text-[13vw] md:text-[11vw] leading-none tracking-tight uppercase"
            style={{
              WebkitTextStroke: "2px #ffffff",
              color: "transparent",
            }}
          >
            Creative
          </motion.h1>
        </div>

        {/* Divider row with PORTFOLIO filled */}
        <div className="flex items-center gap-6 md:gap-10 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="h-[3px] w-24 md:w-48 bg-[#ff014f] origin-left flex-shrink-0"
          />
          <div className="overflow-hidden">
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-lemonMilk text-[13vw] md:text-[11vw] leading-none tracking-tight uppercase text-white"
            >
              Portfolio
            </motion.h1>
          </div>
        </div>

        {/* Subtitle & CTA row */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="font-bodyFont text-sm md:text-base text-gray-400 max-w-sm leading-relaxed">
            Crafting premium digital experiences <br /> through design &amp; code.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-bodyFont text-xs tracking-[0.2em] text-gray-500 uppercase">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-[#ff014f]"
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mt-16 border-t border-b border-white/10 py-4 overflow-hidden bg-white/[0.02]"
      >
        <div ref={marqueeRef} className="flex gap-10 whitespace-nowrap w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`font-lemonMilk text-sm md:text-base uppercase tracking-widest flex-shrink-0 ${
                item === "★" ? "text-[#ff014f]" : "text-gray-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CreativeHero;
