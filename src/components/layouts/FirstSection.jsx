import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   Reusable scroll-triggered fade-up wrapper
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Section label (small eyebrow text)
───────────────────────────────────────────── */
const EyebrowLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-[#ff014f]" />
    <span className="font-bodyFont text-[0.65rem] tracking-[0.45em] text-[#ff014f] uppercase">
      {text}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   Service / what-I-do card
───────────────────────────────────────────── */
const services = [
  {
    number: "01",
    title: "UI / UX Design",
    desc: "Wireframes, prototypes & polished interfaces built around real user behaviour.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Fast, accessible and SEO-ready websites using React, Next.js and modern tooling.",
    icon: "⬡",
  },
  {
    number: "03",
    title: "Branding & Identity",
    desc: "Logos, colour systems and brand guidelines that leave a lasting impression.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Motion Design",
    desc: "Micro-interactions and animated sequences that make interfaces feel alive.",
    icon: "◎",
  },
];

const ServiceCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 * index,
      }}
      className="group relative border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 p-8 cursor-default"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-lemonMilk text-xs text-gray-600 tracking-widest">
          {item.number}
        </span>
        <span className="text-xl text-[#ff014f] group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-lemonMilk text-sm md:text-base text-white mb-3 uppercase tracking-wide">
        {item.title}
      </h3>

      {/* Description */}
      <p className="font-bodyFont text-xs md:text-sm text-gray-500 leading-relaxed">
        {item.desc}
      </p>

      {/* Hover bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff014f] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Horizontal divider with animated line
───────────────────────────────────────────── */
const AnimatedDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full flex items-center gap-4 my-0">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-white/[0.06] origin-left"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
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
   Stat item for the identity strip
───────────────────────────────────────────── */
const IdentityStat = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="font-lemonMilk text-3xl md:text-4xl text-white">{value}</span>
    <span className="font-bodyFont text-[0.6rem] tracking-[0.35em] text-gray-500 uppercase mt-1">
      {label}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   Main component — replaces old FirstSection
───────────────────────────────────────────── */
const FirstSection = () => {
  return (
    <div className="bg-[#080808] text-white w-full">
      {/* ══════════════════════════════════════
          1. IDENTITY STRIP — photo + intro
      ══════════════════════════════════════ */}
      <section className="w-full px-8 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — about text */}
          <div>
            <Reveal>
              <EyebrowLabel text="Who I Am" />
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-lemonMilk text-[8vw] lg:text-[4vw] leading-tight uppercase mb-6"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)", color: "transparent" }}
              >
                Designer
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-lemonMilk text-[8vw] lg:text-[4vw] leading-tight uppercase text-white mb-8">
                &amp; Developer
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-bodyFont text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-10">
                I'm a creative professional who blends sharp design thinking with
                clean, scalable engineering. My work lives at the intersection of
                aesthetics and functionality — every pixel intentional, every
                interaction considered.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-8 mb-10">
                <IdentityStat value="05+" label="Years exp." />
                <IdentityStat value="50+" label="Projects" />
                <IdentityStat value="30+" label="Happy clients" />
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-4">
                <Link to="/hire-me">
                  <button
                    className="group relative inline-flex items-center gap-2 px-7 py-3 bg-[#ff014f] text-white font-bodyFont text-xs tracking-widest uppercase overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%)",
                    }}
                  >
                    <span className="relative z-10">Hire Me</span>
                    <span className="relative z-10">→</span>
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white font-bodyFont text-xs tracking-widest uppercase transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — profile photo card */}
          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative frame */}
              <div
                className="absolute -inset-4 border border-white/[0.06]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                }}
              />
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                  width: "300px",
                  height: "380px",
                }}
              >
                <img
                  src="/img/photo2.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating name tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-6 bottom-10 bg-[#0f0f0f] border border-white/10 px-5 py-3 backdrop-blur-sm"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)",
                }}
              >
                <p className="font-lemonMilk text-xs text-white tracking-widest uppercase">
                  Creative
                </p>
                <p className="font-bodyFont text-[0.6rem] text-gray-500 tracking-widest uppercase mt-0.5">
                  Portfolio · 2026
                </p>
              </motion.div>

              {/* Red accent corner */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[#ff014f]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          Animated divider
      ══════════════════════════════════════ */}
      <div className="px-8 md:px-20 lg:px-32">
        <AnimatedDivider />
      </div>

      {/* ══════════════════════════════════════
          2. WHAT I DO — services grid
      ══════════════════════════════════════ */}
      <section className="w-full px-8 md:px-20 lg:px-32 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <EyebrowLabel text="Services" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
                What I Do
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link to="/works">
              <span className="font-bodyFont text-xs tracking-widest text-gray-500 hover:text-[#ff014f] uppercase transition-colors duration-300 flex items-center gap-2">
                View all work <span>→</span>
              </span>
            </Link>
          </Reveal>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <ServiceCard key={svc.number} item={svc} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. TOOL STRIP — logos / tech stack
      ══════════════════════════════════════ */}
      <section className="w-full border-t border-white/[0.06] py-10 px-8 md:px-20 lg:px-32">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <span className="font-bodyFont text-[0.6rem] tracking-[0.4em] text-gray-600 uppercase flex-shrink-0">
              Tools &amp; Stack
            </span>
            {[
              "React",
              "Next.js",
              "Figma",
              "GSAP",
              "Framer Motion",
              "Tailwind CSS",
              "Node.js",
              "Illustrator",
            ].map((tool) => (
              <span
                key={tool}
                className="font-bodyFont text-xs text-gray-500 hover:text-white transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default FirstSection;
