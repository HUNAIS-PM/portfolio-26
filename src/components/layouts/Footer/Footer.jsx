import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FaLinkedinIn, FaBehance, FaDribbble, FaGithub,
  FaInstagram, FaYoutube, FaFacebook,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   Social link item
───────────────────────────────────────────── */
const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-gray-500 hover:text-white hover:border-[#ff014f] transition-all duration-300 text-sm"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)" }}
  >
    <Icon />
  </a>
);

/* ─────────────────────────────────────────────
   Column title
───────────────────────────────────────────── */
const ColTitle = ({ text }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="h-px w-5 bg-[#ff014f]" />
    <span className="font-lemonMilk text-xs tracking-[0.3em] text-white uppercase">{text}</span>
  </div>
);

/* ─────────────────────────────────────────────
   Animated divider
───────────────────────────────────────────── */
const FooterDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full flex items-center gap-4 my-0">
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4 }} className="h-px flex-1 bg-white/[0.06] origin-left" />
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }} className="text-[#ff014f] text-xs flex-shrink-0">✦</motion.span>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4 }} className="h-px flex-1 bg-white/[0.06] origin-right" />
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────── */
const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Hire Me", path: "/hire-me" },
  ];

  const contactItems = [
    { icon: FaPhone, text: "+91 96457 92148", href: "tel:+919645792148" },
    { icon: FaEnvelope, text: "skytrigontech@gmail.com", href: "mailto:skytrigontech@gmail.com" },
    { icon: FaWhatsapp, text: "WhatsApp", href: "https://wa.me/919645792148" },
    { icon: FaMapMarkerAlt, text: "Manjeri, Kerala, India", href: "#" },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/hunaispm", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://www.behance.net/skytrigon", icon: FaBehance, label: "Behance" },
    { href: "https://dribbble.com/Skytrigon", icon: FaDribbble, label: "Dribbble" },
    { href: "https://github.com", icon: FaGithub, label: "GitHub" },
    { href: "https://www.instagram.com/skytrigondesign/", icon: FaInstagram, label: "Instagram" },
    { href: "https://youtube.com/@skytrigon", icon: FaYoutube, label: "YouTube" },
    { href: "https://facebook.com/skytrigon", icon: FaFacebook, label: "Facebook" },
  ];

  return (
    <footer className="w-full bg-[#050505]">
      {/* ── Top marquee ── */}
      <div className="border-t border-white/[0.06] py-5 overflow-hidden"
        style={{ background: "rgba(255,255,255,0.015)" }}>
        <div className="flex whitespace-nowrap"
          style={{ animation: "footerMarquee 22s linear infinite" }}>
          {Array(4).fill(["Design", "✦", "Development", "✦", "Branding", "✦", "Motion", "✦"]).flat().map((t, i) => (
            <span key={i}
              className={`font-bodyFont text-xs tracking-widest uppercase flex-shrink-0 mx-5 ${
                t === "✦" ? "text-[#ff014f]" : "text-gray-700"
              }`}>{t}</span>
          ))}
        </div>
        <style>{`@keyframes footerMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ── Main grid ── */}
      <div ref={ref} className="px-8 md:px-20 lg:px-32 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Brand col ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 border border-[#ff014f] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
                <span className="relative font-lemonMilk text-xs text-[#ff014f]">S</span>
              </div>
              <span className="font-lemonMilk text-sm tracking-widest text-white uppercase">Skytrigon</span>
            </Link>

            <p className="font-bodyFont text-xs text-gray-500 leading-relaxed mb-8">
              A creative studio at the intersection of bold design and clean engineering.
              Crafting digital experiences that leave a lasting impression.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => <SocialLink key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* ── Quick Links col ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <ColTitle text="Quick Links" />
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-bodyFont text-xs tracking-wider text-gray-500 hover:text-white hover:pl-2 transition-all duration-300 uppercase flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 group-hover:w-4 bg-[#ff014f] transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact col ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            <ColTitle text="Contact" />
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 font-bodyFont text-xs text-gray-500 hover:text-white transition-colors duration-300 group"
                  >
                    <Icon className="mt-0.5 flex-shrink-0 text-[#ff014f] group-hover:scale-110 transition-transform duration-300" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/hire-me"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#ff014f] text-white font-bodyFont text-xs tracking-widest uppercase hover:bg-white hover:text-[#ff014f] transition-all duration-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%)" }}
            >
              Start a Project →
            </Link>
          </motion.div>

          {/* ── Map col ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          >
            <ColTitle text="Location" />
            <div
              className="overflow-hidden relative"
              style={{
                height: "200px",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <iframe
                className="absolute inset-0 w-full h-full border-0 transition-all duration-700"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62517.43775793217!2d76.08148!3d11.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642c7e52f563f%3A0x5ad9b88b3ac6b34!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location — Manjeri, Kerala"
              />
              {/* Map overlay label */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2"
                style={{ background: "linear-gradient(to top, rgba(5,5,5,0.9), transparent)" }}>
                <p className="font-lemonMilk text-[0.55rem] tracking-widest text-white uppercase">
                  Manjeri · Kerala · India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-16 mb-8">
          <FooterDivider />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-600 uppercase">
            © {new Date().getFullYear()} Skytrigon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <span key={t}
                className="font-bodyFont text-[0.6rem] tracking-widest text-gray-700 hover:text-gray-400 uppercase cursor-pointer transition-colors duration-300">
                {t}
              </span>
            ))}
          </div>
          <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-700 uppercase">
            Made with{" "}
            <span className="text-[#ff014f]">♥</span>
            {" "}in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
