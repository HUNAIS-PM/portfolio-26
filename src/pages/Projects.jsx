import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./LogoGallery.css";

import { projects, developerCategories } from "../constants/projects";
import {
  flexDesigns,
  posterDesigns,
  poster2Designs,
  menuCard2Designs,
  logoDesigns,
  productDesigns,
  brochureDesigns,
  bannerDesigns,
  flyerDesigns,
  infographicDesigns,
  socialMediaDesigns,
  illustrationDesigns,
  designerCategories,
  categoryDescriptions,
} from "../constants/designProjects";
import DesignProjectCard from "../components/ui/DesignProjectCard";

/* ── Noise overlay (same as HeroV2) ── */
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

/* ── Dev project card ── */
const DevCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group relative flex flex-col overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(8px)",
    }}
  >
    {/* Image */}
    <div className="w-full h-56 overflow-hidden relative">
      <img
        className="w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:-translate-y-[20%]"
        src={project.img}
        alt={project.title}
      />
      {/* red shine on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[#ff014f]/0 group-hover:bg-[#ff014f]/10 transition-colors duration-300" />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 gap-3">
      <h3 className="font-lemonMilk text-sm text-white tracking-wide leading-snug">
        {project.title}
      </h3>
      <p className="font-bodyFont text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
        {project.desc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-bodyFont text-[10px] tracking-widest uppercase px-2 py-0.5 text-[#ff014f]"
            style={{ border: "1px solid rgba(255,1,79,0.25)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2 border-t border-white/[0.06]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bodyFont text-xs tracking-widest uppercase text-gray-500 hover:text-[#ff014f] transition-colors duration-200"
        >
          Live →
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bodyFont text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors duration-200"
        >
          GitHub →
        </a>
      </div>
    </div>

    {/* Corner accent */}
    <div
      className="absolute top-0 right-0 w-8 h-8"
      style={{
        background: "linear-gradient(135deg, transparent 50%, rgba(255,1,79,0.3) 50%)",
      }}
    />
  </motion.div>
);

/* ── Design image card (poster / menu / flex style) ── */
const DesignImageCard = ({ design, onClick, tall = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group relative cursor-pointer overflow-hidden"
    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    onClick={onClick}
  >
    <div className={`w-full ${tall ? "h-auto" : "h-72 md:h-80"} relative overflow-hidden bg-[#0d0d0d]`}>
      <img
        src={design.img}
        alt={design.title}
        className={`w-full ${tall ? "h-auto" : "h-full object-cover"} transition-transform duration-500 group-hover:scale-[1.04]`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <span className="font-lemonMilk text-xs text-white tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
          {design.title}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ── Logo gallery card ── */
const LogoCard = ({ design }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
    className="img-box mr-4"
  >
    <img src={design.img} alt={design.title} />
    <div className="transparent-box">
      <div className="caption">
        <p>{design.title}</p>
        <p className="opacity-low">Logo Design</p>
      </div>
    </div>
  </motion.div>
);

/* ── Section wrapper ── */
const SectionGrid = ({ title, children, cols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full pb-20"
  >
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-1 bg-white/[0.06]" />
      <h2 className="font-lemonMilk text-sm tracking-[0.3em] text-gray-600 uppercase">{title}</h2>
      <div className="h-px flex-1 bg-white/[0.06]" />
    </div>
    <div className={`w-full grid ${cols} gap-6`}>{children}</div>
    {/* CTA */}
    <div className="flex justify-center mt-12">
      <Link
        to="/hire-me"
        className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden font-bodyFont text-xs tracking-widest uppercase text-white"
        style={{ border: "1px solid rgba(255,1,79,0.4)" }}
      >
        <span className="relative z-10">Hire Me</span>
        <span className="relative z-10 text-[#ff014f] group-hover:translate-x-1 transition-transform duration-200">→</span>
        <span className="absolute inset-0 bg-[#ff014f] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      </Link>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════
   Main Projects Page
══════════════════════════════════════════════ */
const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [mode, setMode] = useState("developer");

  const currentCategories = mode === "developer" ? developerCategories : designerCategories;

  useEffect(() => {
    const cats = mode === "developer" ? developerCategories : designerCategories;
    if (!cats.includes(selectedCategory)) {
      setSelectedCategory(cats[0]);
    }
  }, [mode, selectedCategory]);

  useEffect(() => {
    if (location.state?.mode) setMode(location.state.mode);
  }, [location.state]);

  /* ── Render content based on mode + category ── */
  const renderContent = () => {
    if (mode === "developer") {
      const filtered = projects.filter((p) =>
        selectedCategory === "All"
          ? developerCategories.slice(1).includes(p.category)
          : p.category === selectedCategory
      );
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <DevCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      );
    }

    // ── Designer sections ──
    const designerMap = {
      poster: { data: posterDesigns, route: "/poster", title: "Poster Designs" },
      "menu card": { data: poster2Designs, route: "/menucard", title: "Menu Card Designs" },
      "menu card 2": { data: menuCard2Designs, route: "/menucard2", title: "Menu Card 2 Designs" },
    };

    if (designerMap[selectedCategory]) {
      const { data, route, title } = designerMap[selectedCategory];
      return (
        <AnimatePresence mode="wait">
          <SectionGrid key={selectedCategory} title={title} cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((d) => (
              <DesignImageCard key={d.id} design={d} onClick={() => navigate(route, { state: { data: "Works" } })} />
            ))}
          </SectionGrid>
        </AnimatePresence>
      );
    }

    if (selectedCategory === "logo") {
      return (
        <AnimatePresence mode="wait">
          <SectionGrid key="logo" title="Logo Designs" cols="grid-cols-1">
            <div className="gallery-image">
              {logoDesigns.map((d) => (
                <LogoCard key={d.id} design={d} />
              ))}
            </div>
          </SectionGrid>
        </AnimatePresence>
      );
    }

    if (selectedCategory === "flex") {
      return (
        <AnimatePresence mode="wait">
          <SectionGrid key="flex" title="Flex Designs" cols="grid-cols-1">
            {flexDesigns.map((d) => (
              <DesignImageCard key={d.id} design={d} onClick={() => {}} tall />
            ))}
          </SectionGrid>
        </AnimatePresence>
      );
    }

    // Grid-based design categories
    const gridMap = {
      "product design": { data: productDesigns, title: "Product Designs" },
      brochure: { data: brochureDesigns, title: "Brochure Designs" },
      banner: { data: bannerDesigns, title: "Banner Designs" },
      flyer: { data: flyerDesigns, title: "Flyer Designs" },
      infographic: { data: infographicDesigns, title: "Infographic Designs" },
      "social media": { data: socialMediaDesigns, title: "Social Media Designs" },
      illustration: { data: illustrationDesigns, title: "Illustration Designs" },
    };

    if (gridMap[selectedCategory]) {
      const { data, title } = gridMap[selectedCategory];
      return (
        <AnimatePresence mode="wait">
          <SectionGrid key={selectedCategory} title={title} cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((d) => (
              <DesignProjectCard key={d.id} design={d} />
            ))}
          </SectionGrid>
        </AnimatePresence>
      );
    }

    return null;
  };

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

      {/* ── Page content ── */}
      <div className="relative z-10 px-6 md:px-16 lg:px-32 pt-28 pb-24">

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-bodyFont text-xs tracking-[0.4em] text-[#ff014f] uppercase mb-4">
            — Portfolio
          </p>
          <h1 className="font-lemonMilk leading-tight">
            <span className="block text-[10vw] md:text-[6vw] lg:text-[5vw] text-white">My</span>
            <span
              className="block text-[10vw] md:text-[6vw] lg:text-[5vw]"
              style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
            >
              Works
            </span>
          </h1>
          <p className="font-bodyFont text-gray-500 text-sm leading-relaxed max-w-lg mt-6">
            A curated collection of projects spanning web development, branding, and graphic design — each crafted with purpose.
          </p>
        </motion.div>

        {/* ── Mode toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-start mb-10"
        >
          <div
            className="relative inline-flex"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* sliding bg */}
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
        </motion.div>

        {/* ── Category filters ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {currentCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-bodyFont text-[11px] tracking-widest uppercase px-4 py-2 transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#ff014f] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
              style={{
                border:
                  selectedCategory === cat
                    ? "1px solid #ff014f"
                    : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Category description */}
        {categoryDescriptions[selectedCategory] && (
          <motion.p
            key={selectedCategory + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-bodyFont text-xs text-gray-600 mb-10 tracking-wide"
          >
            {categoryDescriptions[selectedCategory]}
          </motion.p>
        )}

        {/* ── Divider ── */}
        <div className="h-px w-full bg-white/[0.05] mb-12" />

        {/* ── Content ── */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Projects;
