import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navBarList } from "../../../constants/index";

/* ─────────────────────────────────────────────
   Nav links — all except "Hire Me"
───────────────────────────────────────────── */
const mainLinks = navBarList.filter((n) => n.title !== "Hire Me");
const hireMe = navBarList.find((n) => n.title === "Hire Me");

/* ─────────────────────────────────────────────
   Header
───────────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* Close mobile on route change */
  useEffect(() => setMobileOpen(false), [location]);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════ DESKTOP NAV ══════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="w-full px-6 md:px-16 lg:px-32 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-[#ff014f] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <span className="relative font-lemonMilk text-xs text-[#ff014f]">S</span>
            </div>
            <span className="font-lemonMilk text-sm tracking-widest text-white uppercase">
              Skytrigon
            </span>
          </Link>

          {/* Desktop links */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center gap-1"
          >
            {mainLinks.map(({ _id, title, link }) => (
              <NavLink
                key={_id}
                to={link}
                className={({ isActive }) =>
                  `relative font-bodyFont text-xs tracking-[0.2em] uppercase px-4 py-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {title}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff014f]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </motion.ul>

          {/* Hire Me CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to={hireMe?.link || "/hire-me"}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-[#ff014f] text-white font-bodyFont text-xs tracking-widest uppercase hover:bg-white hover:text-[#ff014f] transition-all duration-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%)" }}
            >
              Hire Me
            </Link>

            {/* Hamburger */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-[5px] p-2 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-white group-hover:bg-[#ff014f] transition-colors duration-300"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-px bg-white group-hover:bg-[#ff014f] transition-colors duration-300"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-px bg-white group-hover:bg-[#ff014f] transition-colors duration-300"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ══════════════════════ MOBILE DRAWER ══════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-sm z-50 bg-[#0a0a0a] border-l border-white/[0.06] flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/[0.06]">
                <span className="font-lemonMilk text-sm tracking-widest text-white uppercase">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-6 py-8 flex-1">
                {[...mainLinks, hireMe].filter(Boolean).map(({ _id, title, link }, i) => (
                  <motion.div
                    key={_id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 font-bodyFont text-sm tracking-widest uppercase py-4 border-b border-white/[0.04] transition-colors duration-300 ${
                          title === "Hire Me"
                            ? "text-[#ff014f]"
                            : isActive
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      <span className="font-lemonMilk text-[0.6rem] text-gray-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {title}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t border-white/[0.06]">
                <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-600 uppercase">
                  Skytrigon · Portfolio 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ══════════════════════ MOBILE BOTTOM NAV ══════════════════════ */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0a0a0a] border-t border-white/[0.06]"
        style={{ backdropFilter: "blur(14px)", background: "rgba(10,10,10,0.92)" }}>
        <div className="flex items-center justify-around h-16 px-4">
          {[
            { to: "/", label: "Home", icon: "⌂" },
            { to: "/works", label: "Works", icon: "◈" },
            { to: "/about", label: "About", icon: "◉" },
            { to: "/hire-me", label: "Hire Me", icon: "✦" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition-colors duration-300 ${
                  isActive ? "text-[#ff014f]" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="font-bodyFont text-[0.55rem] tracking-[0.2em] uppercase">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
