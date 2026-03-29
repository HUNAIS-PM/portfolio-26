import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import PNG icons
import htmlIcon from '../assets/icons/icons8-html-512.png';
import cssIcon from '../assets/icons/icons8-css-512.png';
import tailwindIcon from '../assets/icons/icons8-tailwind-css-512.png';
import jsIcon from '../assets/icons/icons8-javascript-512.png';
import typescriptIcon from '../assets/icons/icons8-javascript-512.png';
import reactIcon from '../assets/icons/icons8-react-native-512.png';
import nextjsIcon from '../assets/icons/nextjs-icon.png';
import cIcon from '../assets/icons/icons8-c-512.png';
import javaIcon from '../assets/icons/icons8-java-512.png';
import pythonIcon from '../assets/icons/icons8-python-512.png';
import djangoIcon from '../assets/icons/django-icon.png';
import nodejsIcon from '../assets/icons/node-js-icon.png';
import expressIcon from '../assets/icons/icons8-express-js-512.png';
import phpIcon from '../assets/icons/php-programming-language-icon.png';
import laravelIcon from '../assets/icons/laravel-icon.png';
import mysqlIcon from '../assets/icons/mysql-icon.png';
import mongodbIcon from '../assets/icons/mongodb-icon.png';
import postgresqlIcon from '../assets/icons/postgresql-icon.png';
import firebaseIcon from '../assets/icons/supabase-icon.png';
import sqliteIcon from '../assets/icons/mysql-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import gitlabIcon from '../assets/icons/github-icon.png';
import awsIcon from '../assets/icons/aws-icon.png';
import dockerIcon from '../assets/icons/docker-icon.png';
import photoshopIcon from '../assets/icons/adobe-photoshop-icon.png';
import illustratorIcon from '../assets/icons/illustrator_5968472.png';
import indesignIcon from '../assets/icons/indesign_5968482.png';
import adobeSuiteIcon from '../assets/icons/ADOBE XD.png';
import afterEffectsIcon from '../assets/icons/adobe-after-effects-icon.png';
import premiereProIcon from '../assets/icons/adobe-premiere-pro-icon.png';
import davinciIcon from '../assets/icons/icons8-davinci-resolve-512.png';
import filmoraIcon from '../assets/icons/icons8-filmora-512.png';
import blenderIcon from '../assets/icons/icons8-blender-512.png';
import officeIcon from '../assets/icons/icons8-microsoft-office-512.png';
import gimpIcon from '../assets/icons/icons8-gimp-512.png';
import inkscapeIcon from '../assets/icons/icons8-inkscape-512.png';
import coreldrawIcon from '../assets/icons/icons8-coreldraw-512.png';
import canvaIcon from '../assets/icons/icons8-canva-512.png';
import flstudioIcon from '../assets/icons/icons8-fl-studio-512.png';
import obsstudioIcon from '../assets/icons/icons8-obs-studio-512.png';
import figmaIcon from '../assets/icons/figma_5968705.png';

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

const SkillItem = ({ icon, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col items-center gap-2 p-4 cursor-default"
    style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
    whileHover={{ borderColor: "rgba(255,1,79,0.25)", background: "rgba(255,1,79,0.04)" }}
  >
    <img
      src={icon}
      alt={label}
      className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
    />
    <span className="font-bodyFont text-[10px] tracking-widest text-gray-500 group-hover:text-gray-300 uppercase transition-colors duration-300 text-center">
      {label}
    </span>
  </motion.div>
);

const SectionLabel = ({ title, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-4 col-span-full mt-8 mb-2"
  >
    <span className="font-bodyFont text-[10px] tracking-[0.4em] text-[#ff014f] uppercase">{title}</span>
    <div className="flex-1 h-px bg-white/[0.06]" />
  </motion.div>
);

const devSkillGroups = [
  {
    label: "Frontend",
    skills: [
      { icon: htmlIcon, label: "HTML" },
      { icon: cssIcon, label: "CSS" },
      { icon: tailwindIcon, label: "Tailwind" },
      { icon: jsIcon, label: "JavaScript" },
      { icon: typescriptIcon, label: "TypeScript" },
      { icon: reactIcon, label: "React" },
      { icon: nextjsIcon, label: "Next.js" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: cIcon, label: "C" },
      { icon: javaIcon, label: "Java" },
      { icon: pythonIcon, label: "Python" },
      { icon: djangoIcon, label: "Django" },
      { icon: nodejsIcon, label: "Node.js" },
      { icon: expressIcon, label: "Express.js" },
      { icon: phpIcon, label: "PHP" },
      { icon: laravelIcon, label: "Laravel" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { icon: mysqlIcon, label: "MySQL" },
      { icon: mongodbIcon, label: "MongoDB" },
      { icon: postgresqlIcon, label: "PostgreSQL" },
      { icon: sqliteIcon, label: "SQLite" },
      { icon: firebaseIcon, label: "Firebase" },
    ],
  },
  {
    label: "Version Control",
    skills: [
      { icon: gitIcon, label: "Git" },
      { icon: githubIcon, label: "GitHub" },
      { icon: gitlabIcon, label: "GitLab" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: awsIcon, label: "AWS" },
      { icon: dockerIcon, label: "Docker" },
    ],
  },
];

const designSkillGroups = [
  {
    label: "Adobe Suite",
    skills: [
      { icon: photoshopIcon, label: "Photoshop" },
      { icon: illustratorIcon, label: "Illustrator" },
      { icon: indesignIcon, label: "InDesign" },
      { icon: afterEffectsIcon, label: "After Effects" },
      { icon: premiereProIcon, label: "Premiere Pro" },
      { icon: adobeSuiteIcon, label: "Adobe XD" },
    ],
  },
  {
    label: "UI & Design Tools",
    skills: [
      { icon: figmaIcon, label: "Figma" },
      { icon: gimpIcon, label: "GIMP" },
      { icon: inkscapeIcon, label: "Inkscape" },
      { icon: coreldrawIcon, label: "CorelDRAW" },
      { icon: canvaIcon, label: "Canva" },
    ],
  },
  {
    label: "Video & 3D",
    skills: [
      { icon: davinciIcon, label: "DaVinci Resolve" },
      { icon: filmoraIcon, label: "Filmora" },
      { icon: blenderIcon, label: "Blender" },
      { icon: flstudioIcon, label: "FL Studio" },
      { icon: obsstudioIcon, label: "OBS Studio" },
      { icon: officeIcon, label: "Microsoft Office" },
    ],
  },
];

const Skills = () => {
  const [mode, setMode] = useState("developer");
  const groups = mode === "developer" ? devSkillGroups : designSkillGroups;

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
            — Expertise
          </p>
          <h1 className="font-lemonMilk leading-tight">
            <span className="block text-[10vw] md:text-[6vw] lg:text-[5vw] text-white">My</span>
            <span
              className="block text-[10vw] md:text-[6vw] lg:text-[5vw]"
              style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
            >
              Skills
            </span>
          </h1>
          <p className="font-bodyFont text-gray-500 text-sm leading-relaxed max-w-lg mt-6">
            A comprehensive overview of my technical skills and expertise across software development and creative design.
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

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {groups.map((group, gi) => (
              <div key={group.label}>
                {/* Group label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-bodyFont text-[10px] tracking-[0.4em] text-[#ff014f] uppercase">{group.label}</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                {/* Skills */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {group.skills.map((skill, si) => (
                    <SkillItem
                      key={skill.label}
                      icon={skill.icon}
                      label={skill.label}
                      delay={gi * 0.05 + si * 0.04}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
