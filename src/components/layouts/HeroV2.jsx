import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────
   Animated cursor-following glow orb
───────────────────────────────────────────── */
const CursorGlow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-0 w-[400px] h-[400px] rounded-full"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,1,79,0.18) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Character-by-character text reveal
───────────────────────────────────────────── */
const SplitText = ({ text, className, delay = 0, stagger = 0.04, style = {} }) => {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text} style={style}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * stagger,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Floating availability badge
───────────────────────────────────────────── */
const AvailabilityBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
    </span>
    <span className="font-bodyFont text-xs tracking-widest text-gray-300 uppercase">
      Available for work
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Vertical stats column
───────────────────────────────────────────── */
const StatItem = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col"
  >
    <span className="font-lemonMilk text-4xl text-white">{number}</span>
    <span className="font-bodyFont text-xs text-gray-500 tracking-widest uppercase mt-1">
      {label}
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Scrolling vertical text on the side
───────────────────────────────────────────── */
const SideLabel = ({ text, side = "left" }) => (
  <div
    className={`hidden lg:flex absolute top-1/2 ${
      side === "left" ? "left-6" : "right-6"
    } -translate-y-1/2 flex-col items-center gap-3 z-10`}
  >
    <div
      className="h-16 w-px bg-gradient-to-b from-transparent via-[#ff014f] to-transparent"
      aria-hidden="true"
    />
    <span
      className="font-bodyFont text-[0.6rem] tracking-[0.4em] text-gray-500 uppercase"
      style={{ writingMode: "vertical-rl" }}
    >
      {text}
    </span>
    <div
      className="h-16 w-px bg-gradient-to-b from-transparent via-[#ff014f] to-transparent"
      aria-hidden="true"
    />
  </div>
);

/* ─────────────────────────────────────────────
   Main Hero V2
───────────────────────────────────────────── */
const HeroV2 = () => {
  const [role, setRole] = useState(0);
  const roles = ["Designer", "Developer", "Creator"];

  useEffect(() => {
    const id = setInterval(() => {
      setRole((r) => (r + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#080808] text-white overflow-hidden flex flex-col pt-28 pb-24">
      {/* ── Noise / grain overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Cursor glow ── */}
      <CursorGlow />

      {/* ── Static ambient glows ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] blur-[100px] rounded-full"
        style={{ background: "radial-gradient(circle, #ff014f, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04] blur-[80px] rounded-full"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />

      {/* ── Side labels ── */}
      <SideLabel text="Scroll to explore" side="left" />
      <SideLabel text={`Portfolio · 2026`} side="right" />

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-32 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — Text content */}
        <div className="flex flex-col gap-8">

          {/* Label */}
          <p className="font-bodyFont text-xs tracking-[0.4em] text-[#ff014f] uppercase mb-4">
            — Creator
          </p>

          {/* Name headline */}
          <div style={{ perspective: "800px" }}>
            <h1 className="font-lemonMilk leading-[1] tracking-tight">
              <SplitText
                text="Creative"
                delay={0.3}
                className="block text-[14vw] lg:text-[7vw] text-white"
              />
              <SplitText
                text="Portfolio"
                delay={0.6}
                className="block text-[14vw] lg:text-[7vw]"
                style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
              />
            </h1>
          </div>

          {/* Role switcher */}
          <div className="overflow-hidden h-8">
            <motion.p
              key={role}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-bodyFont text-sm tracking-[0.3em] text-[#ff014f] uppercase"
            >
              — {roles[role]}
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-bodyFont text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
          >
            Crafting premium digital experiences where bold design meets
            clean, performant code. Let's build something remarkable.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/works"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#ff014f] text-white font-bodyFont text-sm tracking-widest uppercase overflow-hidden"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%)" }}
            >
              <span className="relative z-10">View Work</span>
              <motion.span
                className="relative z-10 text-lg"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              to="/hire-me"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white hover:border-white/40 font-bodyFont text-sm tracking-widest uppercase transition-all duration-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 93% 100%, 0 100%)" }}
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Stats + decorative element */}
        <div className="hidden lg:flex flex-col items-end justify-center gap-16">

          {/* Big outlined number / decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
              style={{ margin: "-24px" }}
            />
            {/* Inner glowing circle */}
            <div
              className="w-56 h-56 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.03) 60%, transparent 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-center">
                <p className="font-lemonMilk text-6xl text-white leading-none">05</p>
                <p className="font-bodyFont text-[0.6rem] tracking-[0.4em] text-gray-500 uppercase mt-2">
                  Years Exp.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats row */}
          <div className="flex gap-12">
            <StatItem number="50+" label="Projects" delay={2.0} />
            <StatItem number="30+" label="Clients" delay={2.1} />
            <StatItem number="10+" label="Awards" delay={2.2} />
          </div>

          {/* Vertical accent line + label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-16 bg-[#ff014f]" />
            <span className="font-bodyFont text-xs tracking-widest text-gray-500 uppercase">
              Based in India
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] py-3 overflow-hidden"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <MarqueeStrip />
      </motion.div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Pure CSS marquee (no GSAP needed here)
───────────────────────────────────────────── */
const ITEMS = [
  "UI/UX Design", "✦", "Web Development", "✦",
  "Motion Design", "✦", "Branding", "✦",
  "UI/UX Design", "✦", "Web Development", "✦",
  "Motion Design", "✦", "Branding", "✦",
];

const MarqueeStrip = () => (
  <div className="flex overflow-hidden">
    <div
      className="flex gap-10 whitespace-nowrap"
      style={{ animation: "heroV2Marquee 20s linear infinite" }}
    >
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className={`font-bodyFont text-xs uppercase tracking-widest flex-shrink-0 ${
            item === "✦" ? "text-[#ff014f]" : "text-gray-500"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
    <style>{`
      @keyframes heroV2Marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default HeroV2;
