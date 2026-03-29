import React, { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects, developerCategories } from "../../constants/projects";
import LogoDesignCard from "../ui/LogoDesignCard";
import DesignProjectCard from "../ui/DesignProjectCard";
import {
  posterDesigns, logoDesigns, productDesigns, brochureDesigns, bannerDesigns,
  flyerDesigns, infographicDesigns, socialMediaDesigns, illustrationDesigns,
  designerCategories,
} from "../../constants/designProjects";

/* ─────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const EyebrowLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-[#ff014f]" />
    <span className="font-bodyFont text-[0.65rem] tracking-[0.45em] text-[#ff014f] uppercase">
      {text}
    </span>
  </div>
);

const SectionDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full flex items-center gap-4">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-white/[0.06] origin-left"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="text-[#ff014f] text-xs"
      >
        ✦
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-white/[0.06] origin-right"
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION 1 · Developer Projects
───────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] transition-all duration-500 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)" }}
    >
      {/* Image */}
      <div className="w-full h-52 overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={project.img}
          alt={project.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-lemonMilk text-sm text-white uppercase tracking-wide mb-2">
          {project.title}
        </h3>
        <p className="font-bodyFont text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(project.tech || []).slice(0, 3).map((t) => (
            <span key={t} className="font-bodyFont text-[0.6rem] tracking-wider text-[#ff014f] border border-[#ff014f]/30 px-2 py-0.5 uppercase">
              {t}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-5">
          <a href={project.demo} target="_blank" rel="noreferrer"
            className="font-bodyFont text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 uppercase flex items-center gap-1">
            Live <span>↗</span>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="font-bodyFont text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 uppercase flex items-center gap-1">
            GitHub <span>↗</span>
          </a>
        </div>
      </div>
      {/* Hover bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff014f] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

const DeveloperSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All")
      return projects.filter((p) => developerCategories.includes(p.category)).slice(0, 3);
    return projects.filter((p) => p.category === selectedCategory).slice(0, 3);
  }, [selectedCategory]);

  return (
    <section className="w-full px-8 md:px-20 lg:px-32 py-24 bg-[#080808]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <Reveal><EyebrowLabel text="Development" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
              Dev Projects
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <button onClick={() => navigate("/works", { state: { mode: "developer" } })}
            className="font-bodyFont text-xs tracking-widest text-gray-500 hover:text-[#ff014f] uppercase transition-colors duration-300 flex items-center gap-2">
            View all <span>→</span>
          </button>
        </Reveal>
      </div>

      {/* Category pills */}
      <Reveal delay={0.1} className="flex flex-wrap gap-3 mb-12">
        {developerCategories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            className={`font-bodyFont text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
              selectedCategory === cat
                ? "border-[#ff014f] text-[#ff014f] bg-[#ff014f]/10"
                : "border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300"
            }`}>
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 2 · Featured Work (replaces WorkOneSection)
───────────────────────────────────────────── */
const FeaturedWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full px-8 md:px-20 lg:px-32 py-24 bg-[#080808] border-t border-white/[0.06]">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <Reveal><EyebrowLabel text="Featured" /></Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-lemonMilk text-3xl md:text-5xl text-white uppercase leading-tight mb-6"
          >
            Modern<br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.7)", color: "transparent" }}>
              E-commerce
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-bodyFont text-sm text-gray-400 leading-relaxed mb-6"
          >
            A full-featured e-commerce platform — product catalog, secure auth, streamlined
            checkout, and responsive design across every device.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-bodyFont text-[0.65rem] tracking-widest text-[#ff014f] uppercase mb-8"
          >
            React · Next.js · Tailwind CSS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="flex gap-4"
          >
            <a href="#" target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-[#ff014f] text-white font-bodyFont text-xs tracking-widest uppercase overflow-hidden relative"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%)" }}>
              <span className="relative z-10">Live Demo ↗</span>
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-3 border border-white/[0.05]" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }} />
          <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}>
            <img
              loading="lazy"
              src="img/nature/pexels-pixabay-35196.webp"
              alt="E-commerce project"
              className="w-full h-80 object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-[#ff014f]" />
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 3 · Design Portfolio
───────────────────────────────────────────── */
const DesignSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("logo");

  const currentDesignProjects = useMemo(() => {
    switch (selectedCategory) {
      case "logo": return logoDesigns;
      case "product design": return productDesigns.slice(0, 3);
      case "brochure": return brochureDesigns.slice(0, 3);
      case "banner": return bannerDesigns.slice(0, 3);
      case "flyer": return flyerDesigns.slice(0, 3);
      case "infographic": return infographicDesigns.slice(0, 3);
      case "social media": return socialMediaDesigns.slice(0, 3);
      case "illustration": return illustrationDesigns.slice(0, 3);
      case "poster": return posterDesigns.slice(0, 4);
      default: return [];
    }
  }, [selectedCategory]);

  return (
    <section className="w-full px-8 md:px-20 lg:px-32 py-24 bg-[#080808] border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <Reveal><EyebrowLabel text="Design" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
              Design Portfolio
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <button onClick={() => navigate("/works", { state: { mode: "designer" } })}
            className="font-bodyFont text-xs tracking-widest text-gray-500 hover:text-[#ff014f] uppercase transition-colors duration-300 flex items-center gap-2">
            View all <span>→</span>
          </button>
        </Reveal>
      </div>

      {/* Category pills */}
      <Reveal delay={0.1} className="flex flex-wrap gap-3 mb-12">
        {designerCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`font-bodyFont text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 capitalize ${
              selectedCategory === cat
                ? "border-[#ff014f] text-[#ff014f] bg-[#ff014f]/10"
                : "border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Projects grid */}
      {selectedCategory === "logo" ? (
        <div className="gallery-image">
          {currentDesignProjects.map((design) => (
            <LogoDesignCard key={design.id} design={design} />
          ))}
        </div>
      ) : selectedCategory === "poster" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentDesignProjects.map((design, i) => (
            <Reveal key={design.id} delay={i * 0.08}>
              <div className="group relative border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 overflow-hidden">
                <div className="h-[420px] overflow-hidden">
                  <img loading="lazy" src={design.img} alt={design.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4 border-t border-white/[0.06]">
                  <h3 className="font-lemonMilk text-xs text-white uppercase tracking-wide">{design.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDesignProjects.map((design) => (
            <DesignProjectCard key={design.id} design={design} />
          ))}
        </div>
      )}
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 4 · Photo Gallery Strip (replaces SecondSection)
───────────────────────────────────────────── */
const photoStack = [
  { src: "/img/nature/grasses-7304572_1920.webp", alt: "Grasses in nature", label: "Nature" },
  { src: "/img/nature/jingle-bells-9924928_1920.webp", alt: "Jingle bells", label: "Seasons" },
  { src: "/img/nature/pexels-ankit-rainloure-1425442-29876830.webp", alt: "Trees in fog", label: "Landscape" },
  { src: "/img/birds/bird-7396278_1920.webp", alt: "Bird", label: "Wildlife" },
  { src: "/img/birds/blue-tit-6908151_1920.webp", alt: "Blue tit", label: "Birds" },
  { src: "/img/leaf/maple-6678635_1920.webp", alt: "Maple leaf", label: "Detail" },
];

const WorktwoSection = () => {
  const scrollRef = useRef(null);
  return (
    <section className="w-full bg-[#050505] border-t border-white/[0.06] py-24 overflow-hidden">
      <div className="px-8 md:px-20 lg:px-32 mb-12 flex items-end justify-between">
        <div>
          <Reveal><EyebrowLabel text="Photography" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
              Through the lens
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="font-bodyFont text-xs text-gray-600 tracking-widest uppercase hidden md:block">
            Drag to explore →
          </p>
        </Reveal>
      </div>

      {/* Horizontal drag-scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-6 px-8 md:px-20 lg:px-32 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          el.isDown = true;
          el.startX = e.pageX - el.offsetLeft;
          el.scrollLeftStart = el.scrollLeft;
        }}
        onMouseLeave={(e) => { scrollRef.current.isDown = false; }}
        onMouseUp={(e) => { scrollRef.current.isDown = false; }}
        onMouseMove={(e) => {
          const el = scrollRef.current;
          if (!el.isDown) return;
          e.preventDefault();
          const x = e.pageX - el.offsetLeft;
          const walk = (x - el.startX) * 2;
          el.scrollLeft = el.scrollLeftStart - walk;
        }}
      >
        {photoStack.map((photo, i) => (
          <Reveal key={i} delay={i * 0.06} className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
            <div
              className="relative overflow-hidden group"
              style={{
                width: "320px",
                height: "420px",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-lemonMilk text-xs text-white uppercase tracking-widest">
                  {photo.label}
                </span>
              </div>
              {/* Index number */}
              <div className="absolute top-4 right-4">
                <span className="font-lemonMilk text-xs text-white/30 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Exports (keeping original component names for MiddleContent to import)
───────────────────────────────────────────── */
export { DeveloperSection as Developersection };
export { FeaturedWork as WorkOneSection };
export { DesignSection as SecondSection };
export { WorktwoSection };

export default function MiddleContent() {
  return (
    <div className="bg-[#080808]">
      <DeveloperSection />
      <div className="px-8 md:px-20 lg:px-32"><SectionDivider /></div>
      <FeaturedWork />
      <div className="px-8 md:px-20 lg:px-32"><SectionDivider /></div>
      <DesignSection />
      <WorktwoSection />
    </div>
  );
}
