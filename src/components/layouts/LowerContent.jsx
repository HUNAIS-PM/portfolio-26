import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────
   Shared helpers (duplicated for lazy-loading isolation)
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}>
      {children}
    </motion.div>
  );
};

const EyebrowLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-8 bg-[#ff014f]" />
    <span className="font-bodyFont text-[0.65rem] tracking-[0.45em] text-[#ff014f] uppercase">{text}</span>
  </div>
);

const SectionDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full flex items-center gap-4">
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-white/[0.06] origin-left" />
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }} className="text-[#ff014f] text-xs">✦</motion.span>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-white/[0.06] origin-right" />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION A · Featured Project #2 (replaces WorktwoSection)
   (now shown in this chunk as a "case study" row)
───────────────────────────────────────────── */
const CaseStudyRow = ({ flip, title, subtitle, desc, tech, img, href }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const textCol = (
    <div className={flip ? "lg:pl-16" : "lg:pr-16"}>
      <Reveal><EyebrowLabel text="Case Study" /></Reveal>
      <motion.h2
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight mb-4">
        {title}
        <br />
        <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", color: "transparent" }}>
          {subtitle}
        </span>
      </motion.h2>
      <Reveal delay={0.2}>
        <p className="font-bodyFont text-sm text-gray-400 leading-relaxed mb-4">{desc}</p>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="font-bodyFont text-[0.65rem] tracking-widest text-[#ff014f] uppercase mb-8">{tech}</p>
      </Reveal>
      <Reveal delay={0.3}>
        <a href={href} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 bg-[#ff014f] text-white font-bodyFont text-xs tracking-widest uppercase"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%)" }}>
          View Project ↗
        </a>
      </Reveal>
    </div>
  );

  const imgCol = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative">
      <div className="absolute -inset-3 border border-white/[0.05]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }} />
      <div className="overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}>
        <img loading="lazy" src={img} alt={title}
          className="w-full h-72 object-cover transition-all duration-700" />
      </div>
      <div className={`absolute -bottom-2 ${flip ? "-right-2" : "-left-2"} w-10 h-10 border-b-2 ${flip ? "border-r-2" : "border-l-2"} border-[#ff014f]`} />
    </motion.div>
  );

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center py-20 border-b border-white/[0.06]">
      {flip ? <>{imgCol}{textCol}</> : <>{textCol}{imgCol}</>}
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION B · Number count strip (replaces ThirdSection + FourthSection)
───────────────────────────────────────────── */
const CounterItem = ({ value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-col items-center py-12 border-r border-white/[0.06] last:border-r-0 flex-1">
      <span className="font-lemonMilk text-6xl md:text-8xl text-white leading-none">{value}</span>
      <span className="font-bodyFont text-[0.6rem] tracking-[0.45em] text-gray-500 uppercase mt-3">{label}</span>
    </motion.div>
  );
};

const WorkThreeSection = () => (
  <section className="w-full bg-[#080808]">
    <div className="px-8 md:px-20 lg:px-32 pt-20 pb-6">
      <Reveal><EyebrowLabel text="Case Studies" /></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
          Selected Work
        </h2>
      </Reveal>
    </div>
    <div className="px-8 md:px-20 lg:px-32">
      <CaseStudyRow
        flip={false}
        title="Educational"
        subtitle="Platform"
        desc="A full-stack web application for streamlining administration — student profiles, course catalogs, faculty records — with secure access controls and responsive design."
        tech="React · Django · PostgreSQL · HTML · CSS"
        img="img/nature/grasses-7304572_1920.webp"
        href="#"
      />
      <CaseStudyRow
        flip={true}
        title="E-commerce"
        subtitle="Dashboard"
        desc="A sophisticated shopping platform with dynamic product search, user reviews, robust inventory management, and seamless payment gateway integration."
        tech="Next.js · Tailwind CSS · Stripe · Node.js"
        img="img/nature/pexels-pixabay-35196.webp"
        href="#"
      />
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION C · Stats marquee
───────────────────────────────────────────── */
const ThirdSection = () => (
  <section className="w-full bg-[#050505] border-t border-white/[0.06]">
    {/* Number wall */}
    <div className="flex border-b border-white/[0.06]">
      <CounterItem value="05+" label="Years of experience" delay={0} />
      <CounterItem value="50+" label="Projects completed" delay={0.1} />
      <CounterItem value="30+" label="Happy clients" delay={0.2} />
      <CounterItem value="10+" label="Awards received" delay={0.3} />
    </div>

    {/* Full-width photo with overlay text */}
    <div className="relative h-[60vh] overflow-hidden">
      <img
        loading="lazy"
        src="/img/nature/pexels-ankit-rainloure-1425442-29876830.webp"
        alt="Landscape"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Reveal>
          <p
            className="font-lemonMilk text-center leading-tight uppercase"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.1)",
              color: "transparent",
            }}
          >
            Design · Code
            <br />
            Craft · Create
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION D · FourthSection (testimonial / quote strip)
───────────────────────────────────────────── */
const testimonials = [
  { quote: "Exceptional attention to detail and incredibly fast delivery. The result exceeded our expectations.", author: "Sarah K.", role: "CEO, TechStart" },
  { quote: "A rare combination of strong design sense and technical depth. Our platform looks and performs beautifully.", author: "James M.", role: "Product Lead, Designly" },
  { quote: "Brilliant work. Every micro-interaction feels intentional. Will definitely hire again.", author: "Priya R.", role: "Marketing Director, Nova" },
];

const FourthSection = () => (
  <section className="w-full bg-[#080808] border-t border-white/[0.06] px-8 md:px-20 lg:px-32 py-24">
    <div className="mb-14">
      <Reveal><EyebrowLabel text="Testimonials" /></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
          Client Words
        </h2>
      </Reveal>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-60px" });
        return (
          <motion.div
            key={i} ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            className="border border-white/[0.06] bg-white/[0.02] p-8 relative"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}>
            <span className="font-lemonMilk text-4xl text-[#ff014f] leading-none block mb-4">"</span>
            <p className="font-bodyFont text-sm text-gray-400 leading-relaxed mb-6">{t.quote}</p>
            <div>
              <p className="font-lemonMilk text-xs text-white uppercase tracking-wide">{t.author}</p>
              <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-600 uppercase mt-1">{t.role}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Default export
───────────────────────────────────────────── */
export default function LowerContent() {
  return (
    <div className="bg-[#080808]">
      <WorkThreeSection />
      <div className="px-8 md:px-20 lg:px-32"><SectionDivider /></div>
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
