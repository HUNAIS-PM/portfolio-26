import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevLocation, setPrevLocation] = useState("");
  const [mode, setMode] = useState("developer");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About Me" prevLocation={prevLocation} />

      <div className="pb-16">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primeColor mb-4">
          About Me
        </h1>
        <p className="text-base text-lightText max-w-3xl mb-10">
          I build modern digital products by combining engineering precision,
          clean design systems, and problem-solving mindset.
        </p>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex h-10 bg-white border border-gray-300 shadow-sm">
            <button
              type="button"
              onClick={() => setMode("developer")}
              className={`relative z-10 flex-1 px-6 text-sm font-medium transition-colors ${
                mode === "developer"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Developer
            </button>
            <button
              type="button"
              onClick={() => setMode("designer")}
              className={`relative z-10 flex-1 px-6 text-sm font-medium transition-colors ${
                mode === "designer"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Designer
            </button>
            <div
              className={`absolute top-0 left-0 h-full bg-primeColor transition-all duration-300 ${
                mode === "developer"
                  ? "w-1/2 translate-x-0"
                  : "w-1/2 translate-x-full"
              }`}
            />
          </div>
        </div>

        {/* Content */}
        {mode === "developer" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Who I Am
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I’m <strong>Hunais P M</strong>, a Full Stack Developer with
                experience in building scalable, secure, and performance-focused
                web applications. I enjoy working across the entire stack—from
                pixel-perfect interfaces to robust backend systems.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                My approach blends modern frontend frameworks with solid backend
                architecture, ensuring products are not only functional but
                maintainable and future-ready.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I constantly explore emerging technologies, system design
                patterns, and AI-assisted workflows to improve development
                efficiency and product quality.
              </p>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                What I Do
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Build full-stack web applications using React, Django & Laravel</li>
                <li>• Design scalable REST APIs and backend architectures</li>
                <li>• Optimize performance, SEO, accessibility & security</li>
                <li>• Work with relational & NoSQL databases</li>
                <li>• Integrate AI, automation, and data-driven features</li>
                <li>• Deploy and maintain applications on cloud platforms</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Design Philosophy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I design with intention. Every layout, color, and interaction
                exists to improve clarity, usability, and user confidence.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                My focus is on building interfaces that feel intuitive and
                frictionless, where users don’t have to think—everything simply
                works.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I believe the best designs are quiet, purposeful, and timeless.
              </p>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Creative Skills
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>• UI/UX design for web & mobile products</li>
                <li>• Design systems & component-based layouts</li>
                <li>• Branding, logos & visual identity</li>
                <li>• Posters, banners & print-ready creatives</li>
                <li>• Motion graphics & video editing</li>
                <li>• Tools: Figma, Adobe XD, Photoshop, Illustrator, Blender</li>
              </ul>
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6">
            <h3 className="text-lg font-bold text-primeColor mb-2">
              5+ Years Experience
            </h3>
            <p className="text-gray-700 text-sm">
              Building and shipping real-world web and design solutions
            </p>
          </div>
          <div className="border p-6">
            <h3 className="text-lg font-bold text-primeColor mb-2">
              20+ Projects Delivered
            </h3>
            <p className="text-gray-700 text-sm">
              Freelance, academic, and professional applications
            </p>
          </div>
          <div className="border p-6">
            <h3 className="text-lg font-bold text-primeColor mb-2">
              AI & Research Driven
            </h3>
            <p className="text-gray-700 text-sm">
              Practical machine learning and research-based implementations
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4">
            Want to build something modern, scalable, and meaningful?
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primeColor text-white px-8 py-3 font-bold uppercase hover:opacity-90 transition"
          >
            Let’s Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
