import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────
   Shared helpers
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
        transition={{ duration: 1.4 }} className="h-px flex-1 bg-white/[0.06] origin-left" />
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }} className="text-[#ff014f] text-xs">✦</motion.span>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4 }} className="h-px flex-1 bg-white/[0.06] origin-right" />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION A · Design section (replaces Designsection + ServiceSection)
   Already fully rebuilt in MiddleContent — here we replace with a 
   "Process" section to avoid duplication.
───────────────────────────────────────────── */
const processSteps = [
  { num: "01", title: "Discover", desc: "Deep-dive research into your goals, users, and competitive landscape to define a clear direction." },
  { num: "02", title: "Design", desc: "Wireframes, design systems, and high-fidelity prototypes built for real world usability." },
  { num: "03", title: "Develop", desc: "Clean, performant, accessible code — shipped with CI/CD best practices and full test coverage." },
  { num: "04", title: "Deliver", desc: "Handoff, deployment, analytics setup, and post-launch support to ensure lasting success." },
];

const ProcessSection = () => (
  <section className="w-full bg-[#080808] border-t border-white/[0.06] px-8 md:px-20 lg:px-32 py-24">
    <div className="mb-14">
      <Reveal><EyebrowLabel text="Process" /></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
          How I Work
        </h2>
      </Reveal>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
      {processSteps.map((step, i) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "-60px" });
        return (
          <motion.div key={step.num} ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="group bg-[#080808] p-8 flex flex-col gap-4 hover:bg-white/[0.03] transition-all duration-500">
            <span className="font-lemonMilk text-xs text-gray-700 tracking-widest">{step.num}</span>
            <div className="h-px w-8 bg-[#ff014f] group-hover:w-16 transition-all duration-500" />
            <h3 className="font-lemonMilk text-base text-white uppercase tracking-wide mt-2">{step.title}</h3>
            <p className="font-bodyFont text-xs text-gray-500 leading-relaxed">{step.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION B · Skills (replaces SkillSection)
───────────────────────────────────────────── */
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 83 },
      { name: "Adobe Illustrator", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "After Effects", level: 68 },
    ],
  },
];

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-bodyFont text-xs text-gray-300 tracking-wider">{name}</span>
        <span className="font-lemonMilk text-xs text-gray-600">{level}%</span>
      </div>
      <div className="h-px w-full bg-white/[0.06] relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
          className="absolute inset-y-0 left-0 bg-[#ff014f] origin-left"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const NewSkillSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#080808] border-t border-white/[0.06] px-8 md:px-20 lg:px-32 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <Reveal><EyebrowLabel text="Skills" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-lemonMilk text-3xl md:text-4xl text-white uppercase leading-tight">
              My Toolkit
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <button onClick={() => navigate("/skills")}
            className="font-bodyFont text-xs tracking-widest text-gray-500 hover:text-[#ff014f] uppercase transition-colors duration-300 flex items-center gap-2">
            Full skills list <span>→</span>
          </button>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.1}>
            <div>
              <p className="font-lemonMilk text-xs text-gray-600 tracking-widest uppercase mb-6">
                {group.category}
              </p>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.08 + gi * 0.05} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION C · CTA (replaces CTASection)
───────────────────────────────────────────── */
const NewCTASection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-[#050505] border-t border-white/[0.06] py-32 px-8 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,1,79,0.07) 0%, transparent 68%)", filter: "blur(40px)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-[#ff014f]" />
          <span className="font-bodyFont text-[0.65rem] tracking-[0.45em] text-[#ff014f] uppercase">Let's Collaborate</span>
          <span className="h-px w-8 bg-[#ff014f]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-lemonMilk text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
          Let's Build Something
          <br />
          <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)", color: "transparent" }}>
            That Stands Out
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-bodyFont text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-lg mx-auto">
          I help businesses turn ideas into high-quality digital products that perform, scale, and leave a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4">
          <button onClick={() => navigate("/hire-me")}
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#ff014f] text-white font-bodyFont text-sm tracking-widest uppercase overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 96% 100%, 0 100%)" }}>
            <span className="relative z-10">Start a Project</span>
            <motion.span className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
          </button>
          <button onClick={() => navigate("/works", { state: { mode: "developer" } })}
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white font-bodyFont text-sm tracking-widest uppercase transition-all duration-300"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 96% 100%, 0 100%)" }}>
            See My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Default export
───────────────────────────────────────────── */
export default function BottomContent() {
  return (
    <div className="bg-[#080808]">
      <ProcessSection />
      <div className="px-8 md:px-20 lg:px-32"><SectionDivider /></div>
      <NewSkillSection />
      <NewCTASection />
    </div>
  );
}
