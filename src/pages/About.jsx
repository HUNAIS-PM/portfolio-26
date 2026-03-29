import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NoiseOverlay = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

const ModeToggle = ({ mode, setMode }) => (
  <div
    className="relative inline-flex"
    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
  >
    <motion.div
      className="absolute top-0 h-full bg-[#ff014f]"
      animate={{ left: mode === "developer" ? "0%" : "50%", width: "50%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    />
    {["developer", "designer"].map((m) => (
      <button
        key={m}
        onClick={() => setMode(m)}
        className={`relative z-10 px-8 py-3 font-bodyFont text-xs tracking-widest uppercase transition-colors duration-300 ${
          mode === m ? "text-white" : "text-gray-500 hover:text-gray-300"
        }`}
      >
        {m}
      </button>
    ))}
  </div>
);

const About = () => {
  const [mode, setMode] = useState("developer");

  const devContent = {
    left: {
      title: "Who I Am",
      body: [
        `I'm Hunais P M, a Full Stack Developer with experience building scalable, secure, and performance-focused web applications. I enjoy working across the entire stack — from pixel-perfect interfaces to robust backend systems.`,
        `My approach blends modern frontend frameworks with solid backend architecture, ensuring products are not only functional but maintainable and future-ready.`,
        `I constantly explore emerging technologies, system design patterns, and AI-assisted workflows to improve development efficiency and product quality.`,
      ],
    },
    right: {
      title: "What I Do",
      items: [
        "Build full-stack web applications using React, Django & Laravel",
        "Design scalable REST APIs and backend architectures",
        "Optimize performance, SEO, accessibility & security",
        "Work with relational & NoSQL databases",
        "Integrate AI, automation, and data-driven features",
        "Deploy and maintain applications on cloud platforms",
      ],
    },
  };

  const designContent = {
    left: {
      title: "Design Philosophy",
      body: [
        `I design with intention. Every layout, color, and interaction exists to improve clarity, usability, and user confidence.`,
        `My focus is on building interfaces that feel intuitive and frictionless, where users don't have to think — everything simply works.`,
        `I believe the best designs are quiet, purposeful, and timeless.`,
      ],
    },
    right: {
      title: "Creative Skills",
      items: [
        "UI/UX design for web & mobile products",
        "Design systems & component-based layouts",
        "Branding, logos & visual identity",
        "Posters, banners & print-ready creatives",
        "Motion graphics & video editing",
        "Tools: Figma, Adobe XD, Photoshop, Illustrator, Blender",
      ],
    },
  };

  const content = mode === "developer" ? devContent : designContent;

  const highlights = [
    { num: "5+", label: "Years Experience", desc: "Building and shipping real-world web and design solutions" },
    { num: "50+", label: "Projects Delivered", desc: "Freelance, academic, and professional applications" },
    { num: "30+", label: "Happy Clients", desc: "Across India and international markets" },
  ];

  return (
    <div
      className="relative min-h-screen w-full text-white overflow-x-hidden"
      style={{ background: "#080808" }}
    >
      <NoiseOverlay />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05] blur-[120px] rounded-full"
        style={{ background: "radial-gradient(circle, #ff014f, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-0 w-[400px] h-[400px] opacity-[0.04] blur-[80px] rounded-full"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-32 pt-28 pb-24">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-bodyFont text-xs tracking-[0.4em] text-[#ff014f] uppercase mb-4">
            — The Person
          </p>
          <h1 className="font-lemonMilk leading-tight">
            <span className="block text-[10vw] md:text-[6vw] lg:text-[5vw] text-white">About</span>
            <span
              className="block text-[10vw] md:text-[6vw] lg:text-[5vw]"
              style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
            >
              Me
            </span>
          </h1>
          <p className="font-bodyFont text-gray-500 text-sm leading-relaxed max-w-lg mt-6">
            I build modern digital products by combining engineering precision, clean design systems, and a problem-solving mindset.
          </p>
        </motion.div>

        {/* Mode toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start mb-14"
        >
          <ModeToggle mode={mode} setMode={setMode} />
        </motion.div>

        <div className="h-px w-full bg-white/[0.05] mb-14" />

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
          >
            {/* Left */}
            <div>
              <h2 className="font-lemonMilk text-base tracking-wide text-white mb-6">
                {content.left.title}
              </h2>
              <div className="space-y-4">
                {content.left.body.map((p, i) => (
                  <p key={i} className="font-bodyFont text-gray-400 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <h2 className="font-lemonMilk text-base tracking-wide text-white mb-6">
                {content.right.title}
              </h2>
              <ul className="space-y-3">
                {content.right.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-bodyFont text-sm text-gray-400">
                    <span className="text-[#ff014f] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5, duration: 0.6 }}
              className="p-6 relative"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
            >
              <p className="font-lemonMilk text-4xl text-white mb-1">{h.num}</p>
              <p className="font-bodyFont text-xs tracking-widest text-[#ff014f] uppercase mb-3">{h.label}</p>
              <p className="font-bodyFont text-xs text-gray-500 leading-relaxed">{h.desc}</p>
              {/* corner accent */}
              <div
                className="absolute top-0 right-0 w-6 h-6"
                style={{ background: "linear-gradient(135deg, transparent 50%, rgba(255,1,79,0.3) 50%)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <p className="font-bodyFont text-gray-500 text-sm">
            Want to build something modern, scalable, and meaningful?
          </p>
          <Link
            to="/hire-me"
            className="group relative inline-flex items-center gap-3 px-10 py-4 overflow-hidden font-bodyFont text-xs tracking-widest uppercase text-white"
            style={{ border: "1px solid rgba(255,1,79,0.4)" }}
          >
            <span className="relative z-10">Let's Work Together</span>
            <span className="relative z-10 text-[#ff014f] group-hover:translate-x-1 transition-transform duration-200">→</span>
            <span className="absolute inset-0 bg-[#ff014f] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
