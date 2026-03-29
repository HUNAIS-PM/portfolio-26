import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaLinkedinIn, FaBehance, FaDribbble, FaGithub,
  FaInstagram, FaYoutube, FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";

/* ────────────────────────────────────────────
   Helpers
─────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}>
      {children}
    </motion.div>
  );
};

/* ────────────────────────────────────────────
   Dark input field
─────────────────────────────────────────── */
const Field = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-2">
    <label className="font-bodyFont text-[0.65rem] tracking-[0.3em] text-gray-500 uppercase">
      {label} {required && <span className="text-[#ff014f]">*</span>}
    </label>
    {children}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-bodyFont text-[0.65rem] text-[#ff014f] tracking-wider"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const inputCls =
  "w-full bg-white/[0.03] border border-white/[0.08] text-white font-bodyFont text-sm px-4 h-12 placeholder-gray-700 " +
  "focus:outline-none focus:border-[#ff014f] focus:bg-white/[0.05] transition-all duration-300";

const selectCls =
  "w-full bg-[#0f0f0f] border border-white/[0.08] text-gray-300 font-bodyFont text-sm px-4 h-12 " +
  "focus:outline-none focus:border-[#ff014f] transition-all duration-300 cursor-pointer";

/* ────────────────────────────────────────────
   Contact info card
─────────────────────────────────────────── */
const InfoCard = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="flex items-start gap-4 group p-5 border border-white/[0.06] bg-white/[0.02] hover:border-[#ff014f]/40 hover:bg-white/[0.04] transition-all duration-400"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
  >
    <div className="w-9 h-9 flex items-center justify-center border border-[#ff014f]/30 text-[#ff014f] flex-shrink-0 group-hover:bg-[#ff014f]/10 transition-all duration-300">
      <Icon className="text-sm" />
    </div>
    <div>
      <p className="font-bodyFont text-[0.6rem] tracking-widest text-gray-600 uppercase mb-1">{label}</p>
      <p className="font-bodyFont text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{value}</p>
    </div>
  </a>
);

/* ────────────────────────────────────────────
   Social icon button
─────────────────────────────────────────── */
const SocialBtn = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
    className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-gray-600 hover:text-white hover:border-[#ff014f] transition-all duration-300 text-sm"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)" }}>
    <Icon />
  </a>
);

/* ────────────────────────────────────────────
   Success overlay
─────────────────────────────────────────── */
const SuccessBanner = ({ data, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080808]/95 backdrop-blur-sm px-8 text-center"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      <FaCheckCircle className="text-6xl text-emerald-400 mb-6 mx-auto" />
    </motion.div>
    <h3 className="font-lemonMilk text-xl text-white uppercase tracking-wide mb-3">
      Message Sent!
    </h3>
    <p className="font-bodyFont text-sm text-gray-400 leading-relaxed mb-2">
      Thank you, <span className="text-white">{data?.name}</span>! 🎉
    </p>
    <p className="font-bodyFont text-xs text-gray-600 mb-8">
      I'll review your request within 24 hours and get back to you.
    </p>
    {data?.otherService && (
      <p className="font-bodyFont text-xs text-[#ff014f] mb-6">
        Service noted: {data.otherService}
      </p>
    )}
    <button
      onClick={onClose}
      className="font-bodyFont text-xs tracking-widest uppercase px-8 py-3 border border-white/20 text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300"
    >
      Send Another →
    </button>
  </motion.div>
);

/* ────────────────────────────────────────────
   MAIN PAGE
─────────────────────────────────────────── */
const Contact = () => {
  const location = useLocation();
  const formRef = useRef(null);

  // Form state
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [services, setServices] = useState("");
  const [otherService, setOtherService] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);

  // Errors
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errServices, setErrServices] = useState("");
  const [errOtherService, setErrOtherService] = useState("");
  const [errProjectType, setErrProjectType] = useState("");
  const [errBudget, setErrBudget] = useState("");
  const [errTimeline, setErrTimeline] = useState("");

  // Success
  const [successData, setSuccessData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceOptions = [
    "Web Development", "UI / UX Design", "Website Redesign", "Landing Page",
    "E-commerce Website", "Logo Design", "Branding & Identity",
    "Posters / Social Media Design", "Motion Graphics / Video Editing", "Other (Specify)",
  ];
  const projectTypes = ["Personal", "Business", "Startup", "Agency", "Other"];
  const budgets = ["₹5,000 – ₹15,000", "₹15,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Custom / Not Sure"];
  const timelines = ["ASAP", "1–2 Weeks", "1 Month", "Flexible"];

  const handleServiceChange = (e) => {
    setServices(e.target.value);
    setErrServices("");
    if (e.target.value !== "Other (Specify)") setOtherService("");
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrClientName(""); setErrEmail(""); setErrPhone(""); setErrServices("");
    setErrOtherService(""); setErrProjectType(""); setErrBudget(""); setErrTimeline("");

    let valid = true;
    if (!clientName.trim()) { setErrClientName("Please enter your full name"); valid = false; }
    if (!email.trim()) { setErrEmail("Please enter your email"); valid = false; }
    if (!phone.trim()) { setErrPhone("Please enter your phone number"); valid = false; }
    if (!services.trim()) { setErrServices("Please select a service"); valid = false; }
    if (services === "Other (Specify)" && !otherService.trim()) { setErrOtherService("Please specify your service"); valid = false; }
    if (!projectType.trim()) { setErrProjectType("Please select a project type"); valid = false; }
    if (!budget.trim()) { setErrBudget("Please select a budget"); valid = false; }
    if (!timeline.trim()) { setErrTimeline("Please select a timeline"); valid = false; }

    if (!valid) { setLoading(false); return; }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: clientName, email, phone, company,
          service: services, other_service: otherService,
          project_type: projectType, budget, timeline, message: messages,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccessData({ name: clientName || "Friend", email, services, otherService, projectType, budget, timeline, message: messages });
      setShowSuccess(true);
      setClientName(""); setEmail(""); setPhone(""); setCompany("");
      setServices(""); setOtherService(""); setProjectType("");
      setBudget(""); setTimeline(""); setMessages("");
    } catch (err) {
      console.error("Error inserting data:", err.message);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
    <div className="w-full bg-[#080808] min-h-screen text-white">

      {/* ══════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════ */}
      <section className="relative w-full pt-40 pb-24 px-8 md:px-20 lg:px-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #ff014f, transparent)" }} />

        {/* Noise grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }} />

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#ff014f]" />
            <span className="font-bodyFont text-[0.65rem] tracking-[0.45em] text-[#ff014f] uppercase">Hire Me</span>
          </motion.div>

          {/* Headline */}
          <div style={{ perspective: "800px" }}>
            <motion.h1
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-lemonMilk text-[12vw] md:text-[7vw] lg:text-[5.5vw] leading-[1] uppercase text-white mb-2"
            >
              Let's
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="font-lemonMilk text-[12vw] md:text-[7vw] lg:text-[5.5vw] leading-[1] uppercase mb-8"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", color: "transparent" }}
            >
              Connect
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="font-bodyFont text-gray-400 text-sm md:text-base leading-relaxed max-w-lg"
          >
            Have a project in mind? Fill out the form below or reach out directly.
            I'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN GRID — Form + Sidebar
      ══════════════════════════════════════ */}
      <section className="w-full px-8 md:px-20 lg:px-32 pb-32">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* ── FORM COLUMN ── */}
          <Reveal>
            <div ref={formRef} className="relative border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}>

              {/* Success overlay */}
              <AnimatePresence>
                {showSuccess && (
                  <SuccessBanner data={successData} onClose={() => setShowSuccess(false)} />
                )}
              </AnimatePresence>

              {/* Section label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-6 bg-[#ff014f]" />
                <span className="font-lemonMilk text-xs tracking-widest text-white uppercase">Project Brief</span>
              </div>

              <form onSubmit={handlePost} className="flex flex-col gap-7">

                {/* Row 1 — Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full Name" required error={errClientName}>
                    <input type="text" placeholder="John Doe" value={clientName}
                      onChange={(e) => setClientName(e.target.value)} className={inputCls} />
                  </Field>
                  <Field label="Email Address" required error={errEmail}>
                    <input type="email" placeholder="john@example.com" value={email}
                      onChange={(e) => setEmail(e.target.value)} className={inputCls} />
                  </Field>
                </div>

                {/* Row 2 — Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Phone Number" required error={errPhone}>
                    <input type="tel" placeholder="+91 00000 00000" value={phone}
                      onChange={(e) => setPhone(e.target.value)} className={inputCls} />
                  </Field>
                  <Field label="Company / Brand">
                    <input type="text" placeholder="Optional" value={company}
                      onChange={(e) => setCompany(e.target.value)} className={inputCls} />
                  </Field>
                </div>

                {/* Service */}
                <Field label="Service Required" required error={errServices}>
                  <select value={services} onChange={handleServiceChange} className={selectCls}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>

                {/* Other service */}
                {services === "Other (Specify)" && (
                  <Field label="Please specify" error={errOtherService}>
                    <input type="text" placeholder="Describe your need" value={otherService}
                      onChange={(e) => setOtherService(e.target.value)} className={inputCls} />
                  </Field>
                )}

                {/* Row 3 — Project Type + Budget + Timeline */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <Field label="Project Type" required error={errProjectType}>
                    <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className={selectCls}>
                      <option value="">Select</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget" required error={errBudget}>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectCls}>
                      <option value="">Select</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                  <Field label="Timeline" required error={errTimeline}>
                    <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className={selectCls}>
                      <option value="">Select</option>
                      {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <Field label="Your Message">
                  <textarea placeholder="Tell me about your project, goals, or any details…"
                    value={messages} onChange={(e) => setMessages(e.target.value)}
                    rows={5}
                    className={`${inputCls} h-auto py-4 resize-none`} />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full h-14 bg-[#ff014f] text-white font-bodyFont text-sm tracking-widest uppercase overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white hover:text-[#ff014f]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 98% 100%, 0 100%)" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      >→</motion.span>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-6">

            {/* Availability badge */}
            <Reveal>
              <div className="flex items-center gap-3 px-5 py-4 border border-white/[0.06] bg-white/[0.02]">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-bodyFont text-xs tracking-widest text-gray-400 uppercase">Available for new projects</span>
              </div>
            </Reveal>

            {/* Contact info cards */}
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-3">
                <InfoCard icon={FaEnvelope} label="Email" value="skytrigontech@gmail.com"
                  href="mailto:skytrigontech@gmail.com" />
                <InfoCard icon={FaPhone} label="Phone" value="+91 96457 92148"
                  href="tel:+919645792148" />
                <InfoCard icon={FaWhatsapp} label="WhatsApp" value="Chat with me"
                  href="https://wa.me/919645792148" />
                <InfoCard icon={FaMapMarkerAlt} label="Based in" value="Manjeri, Kerala, India"
                  href="#" />
              </div>
            </Reveal>

            {/* Response time */}
            <Reveal delay={0.1}>
              <div className="border border-white/[0.06] bg-white/[0.02] p-5"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}>
                <p className="font-lemonMilk text-xs text-white uppercase tracking-wide mb-3">Response Time</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Email reply", time: "< 24h" },
                    { label: "WhatsApp", time: "< 2h" },
                    { label: "Project start", time: "Within a week" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-white/[0.04] pb-2 last:border-none last:pb-0">
                      <span className="font-bodyFont text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
                      <span className="font-lemonMilk text-xs text-[#ff014f]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={0.15}>
              <div className="border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="font-lemonMilk text-xs text-white uppercase tracking-wide mb-4">Find Me Online</p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => <SocialBtn key={s.label} {...s} />)}
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.2}>
              <div className="overflow-hidden border border-white/[0.06]"
                style={{
                  height: "180px",
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                }}>
                <iframe
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-70 hover:opacity-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62517.43775793217!2d76.08148!3d11.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642c7e52f563f%3A0x5ad9b88b3ac6b34!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manjeri, Kerala"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
