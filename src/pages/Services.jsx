import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

const devServices = [
  { id: 1, icon: "💻", title: "Web Development", desc: "Custom websites and web applications built with modern technologies like React, Node.js, and more.", pricing: { basic: "$500", standard: "$1500", premium: "$3000" } },
  { id: 2, icon: "🎨", title: "UI/UX Design", desc: "User-centered design solutions that create intuitive and engaging user experiences.", pricing: { basic: "$300", standard: "$800", premium: "$2000" } },
  { id: 3, icon: "📱", title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android devices.", pricing: { basic: "$1000", standard: "$3000", premium: "$6000" } },
  { id: 4, icon: "🔧", title: "Consulting", desc: "Technical consulting and code reviews to improve your project's performance and maintainability.", pricing: { basic: "$100/hr", standard: "$150/hr", premium: "$200/hr" } },
  { id: 5, icon: "📊", title: "Data Analysis", desc: "Data visualization and analysis services to help you make informed business decisions.", pricing: { basic: "$200", standard: "$500", premium: "$1000" } },
  { id: 6, icon: "🚀", title: "SEO Optimization", desc: "Improve your website's visibility and ranking in search engine results.", pricing: { basic: "$150", standard: "$400", premium: "$800" } },
  { id: 7, icon: "🔄", title: "Website Redesign", desc: "Modernize your existing website with a fresh look and improved functionality.", pricing: { basic: "$700", standard: "$2000", premium: "$4000" } },
  { id: 8, icon: "📄", title: "Landing Page Development", desc: "High-converting landing pages designed to capture leads and drive conversions.", pricing: { basic: "$300", standard: "$900", premium: "$1800" } },
  { id: 9, icon: "🛒", title: "E-commerce Website", desc: "Build robust online stores with secure payment gateways and seamless shopping experiences.", pricing: { basic: "$1200", standard: "$4000", premium: "$8000" } },
];

const designServices = [
  { id: 10, icon: "🎨", title: "Logo Design & Brand Identity", desc: "Professional logos and brand identity creation including color schemes and guidelines.", pricing: { basic: "$200", standard: "$500", premium: "$1000" } },
  { id: 11, icon: "📄", title: "Poster & Flyer Design", desc: "Custom posters, flyers, and promotional materials for events and marketing.", pricing: { basic: "$150", standard: "$400", premium: "$800" } },
  { id: 12, icon: "📱", title: "Social Media Creatives", desc: "Engaging posts, ads, and thumbnails optimized for platforms like Instagram and YouTube.", pricing: { basic: "$100", standard: "$300", premium: "$600" } },
  { id: 13, icon: "🖼️", title: "Banner & Advertisement Design", desc: "Digital banners and ad creatives for websites, social media, and campaigns.", pricing: { basic: "$150", standard: "$400", premium: "$800" } },
  { id: 14, icon: "🖨️", title: "Print Design", desc: "Brochures, and packaging with print-ready specifications.", pricing: { basic: "$200", standard: "$500", premium: "$1000" } },
  { id: 15, icon: "🎬", title: "Motion Graphics & Animations", desc: "Animated videos, logo animations, intros/outros, kinetic typography, and basic 3D motion.", pricing: { basic: "$500", standard: "$1500", premium: "$3000" } },
  { id: 16, icon: "✂️", title: "Video Editing", desc: "Professional editing for YouTube videos, Reels, ads, with transitions and visual effects.", pricing: { basic: "$300", standard: "$800", premium: "$1500" } },
  { id: 17, icon: "💻", title: "UI Design (Web & Mobile)", desc: "User interface design for web and mobile apps, including responsive layouts.", pricing: { basic: "$400", standard: "$1000", premium: "$2000" } },
  { id: 18, icon: "🤖", title: "AI-Powered Creative Services", desc: "AI tools for image generation, video enhancement, background removal, and upscaling.", pricing: { basic: "$100", standard: "$300", premium: "$600" } },
];

const ServiceCard = ({ service, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group relative p-6 cursor-pointer flex flex-col gap-4"
    style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.07)",
    }}
    onClick={() => onClick(service)}
    whileHover={{ borderColor: "rgba(255,1,79,0.3)" }}
  >
    <div className="text-3xl">{service.icon}</div>
    <h3 className="font-lemonMilk text-xs text-white tracking-wide leading-snug">{service.title}</h3>
    <p className="font-bodyFont text-xs text-gray-500 leading-relaxed flex-1">{service.desc}</p>
    <button className="font-bodyFont text-[10px] tracking-widest uppercase text-[#ff014f] flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
      Learn More <span>→</span>
    </button>
    {/* corner accent */}
    <div
      className="absolute top-0 right-0 w-6 h-6"
      style={{ background: "linear-gradient(135deg, transparent 50%, rgba(255,1,79,0.25) 50%)" }}
    />
  </motion.div>
);

const Modal = ({ service, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 font-bodyFont text-xs text-gray-500 hover:text-white tracking-widest uppercase transition-colors"
      >
        × Close
      </button>

      <div className="text-4xl mb-4">{service.icon}</div>
      <h2 className="font-lemonMilk text-sm text-white tracking-wide mb-3">{service.title}</h2>
      <p className="font-bodyFont text-xs text-gray-400 leading-relaxed mb-8">{service.desc}</p>

      {/* Pricing */}
      <h3 className="font-bodyFont text-xs tracking-widest uppercase text-gray-600 mb-4">Pricing Plans</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Basic", price: service.pricing.basic, accent: false },
          { label: "Standard", price: service.pricing.standard, accent: true },
          { label: "Premium", price: service.pricing.premium, accent: false },
        ].map(({ label, price, accent }) => (
          <div
            key={label}
            className="p-4 text-center"
            style={{
              background: accent ? "rgba(255,1,79,0.1)" : "rgba(255,255,255,0.02)",
              border: accent ? "1px solid rgba(255,1,79,0.4)" : "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="font-bodyFont text-[10px] tracking-widest uppercase text-gray-500 mb-2">{label}</p>
            <p className="font-lemonMilk text-lg text-white">{price}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
          to="/hire-me"
          className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden font-bodyFont text-xs tracking-widest uppercase text-white"
          style={{ border: "1px solid rgba(255,1,79,0.4)" }}
        >
          <span className="relative z-10">Get a Quote</span>
          <span className="absolute inset-0 bg-[#ff014f] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </Link>
        <button
          onClick={onClose}
          className="px-6 py-3 font-bodyFont text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const Services = () => {
  const [mode, setMode] = useState("developer");
  const [selectedService, setSelectedService] = useState(null);

  const services = mode === "developer" ? devServices : designServices;

  return (
    <div
      className="relative min-h-screen w-full text-white overflow-x-hidden"
      style={{ background: "#080808" }}
    >
      <NoiseOverlay />

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
            — What I Offer
          </p>
          <h1 className="font-lemonMilk leading-tight">
            <span className="block text-[10vw] md:text-[6vw] lg:text-[5vw] text-white">My</span>
            <span
              className="block text-[10vw] md:text-[6vw] lg:text-[5vw]"
              style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
            >
              Services
            </span>
          </h1>
          <p className="font-bodyFont text-gray-500 text-sm leading-relaxed max-w-lg mt-6">
            A range of professional services to help bring your ideas to life and achieve your goals.
          </p>
        </motion.div>

        {/* Mode toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start mb-12"
        >
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
        </motion.div>

        <div className="h-px w-full bg-white/[0.05] mb-12" />

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} onClick={setSelectedService} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <Modal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
