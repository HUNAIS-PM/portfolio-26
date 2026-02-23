import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import "./Skills.css";


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

const Skills = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [mode, setMode] = useState("developer");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4 bg-white">
      <Breadcrumbs title="Skills" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="text-3xl font-bold text-black mb-4">My Skills</h1>
        <p className="text-base text-black mb-8">
          A comprehensive overview of my technical skills and expertise in various areas of software development.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex h-10 bg-white border border-gray-300 rounded-none shadow-sm">
            <button
              type="button"
              onClick={() => setMode("developer")}
              className={`relative z-10 flex-1 py-2 px-4 text-sm font-medium text-center transition-colors duration-200 focus:outline-none focus:z-20 ${
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
              className={`relative z-10 flex-1 py-2 px-4 text-sm font-medium text-center transition-colors duration-200 focus:outline-none focus:z-20 ${
                mode === "designer"
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Designer
            </button>
            <div
              className={`absolute top-0 left-0 h-full bg-primeColor rounded-none transition-all duration-300 ease-in-out ${
                mode === "developer" ? "w-1/2 translate-x-0" : "w-1/2 translate-x-full"
              }`}
            />
          </div>
        </div>
        <div className="flow-chart flex flex-col items-center space-y-8">
{ mode === "developer" ? (
  <>
    <div className="category animate-fade-in">
      <h2 className="text-2xl font-semibold text-black">Frontend</h2>
    </div>
    <div className="arrow-down"></div>
    <div className="sub-skills flex flex-row justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={htmlIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="HTML" />
        <h3 className="text-base text-black">HTML</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={cssIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="CSS" />
        <h3 className="text-base text-black">CSS</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={tailwindIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Tailwind" />
        <h3 className="text-base text-black">Tailwind</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={jsIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="JavaScript" />
        <h3 className="text-base text-black">JavaScript</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={typescriptIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="TypeScript" />
        <h3 className="text-base text-black">TypeScript</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={reactIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="React" />
        <h3 className="text-base text-black">React</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={nextjsIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Next.js" />
        <h3 className="text-base text-black">Next.js</h3>
      </div>
    </div>
    <div className="arrow-down"></div>
    <div className="category animate-fade-in">
      <h2 className="text-2xl font-semibold text-black">Backend</h2>
    </div>
    <div className="arrow-down"></div>
    <div className="sub-skills flex flex-row justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={cIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="C" />
        <h3 className="text-base text-black">C</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={javaIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Java" />
        <h3 className="text-base text-black">Java</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={pythonIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Python" />
        <h3 className="text-base text-black">Python</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={djangoIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Django" />
        <h3 className="text-base text-black">Django</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={nodejsIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Node.js" />
        <h3 className="text-base text-black">Node.js</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={expressIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Express.js" />
        <h3 className="text-base text-black">Express.js</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={phpIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="PHP" />
        <h3 className="text-base text-black">PHP</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={laravelIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Laravel" />
        <h3 className="text-base text-black">Laravel</h3>
      </div>
    </div>
    <div className="arrow-down"></div>
    <div className="category animate-fade-in">
      <h2 className="text-2xl font-semibold text-black">Databases</h2>
    </div>
    <div className="arrow-down"></div>
    <div className="sub-skills flex flex-wrap justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={mysqlIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="MySQL" />
        <h3 className="text-base text-black">MySQL</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={mongodbIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="MongoDB" />
        <h3 className="text-base text-black">MongoDB</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={postgresqlIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="PostgreSQL" />
        <h3 className="text-base text-black">PostgreSQL</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={sqliteIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="SQLite" />
        <h3 className="text-base text-black">SQLite</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={firebaseIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Firebase" />
        <h3 className="text-base text-black">Firebase</h3>
      </div>
    </div>
    <div className="arrow-down"></div>
    <div className="category animate-fade-in">
      <h2 className="text-2xl font-semibold text-black">Version Control</h2>
    </div>
    <div className="arrow-down"></div>
    <div className="sub-skills flex flex-row justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={gitIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Git" />
        <h3 className="text-base text-black">Git</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={githubIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="GitHub" />
        <h3 className="text-base text-black">GitHub</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={gitlabIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="GitLab" />
        <h3 className="text-base text-black">GitLab</h3>
      </div>
    </div>
    <div className="arrow-down"></div>
    <div className="category animate-fade-in">
      <h2 className="text-2xl font-semibold text-black">Cloud & DevOps</h2>
    </div>
    <div className="arrow-down"></div>
    <div className="sub-skills flex flex-wrap justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={awsIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="AWS" />
        <h3 className="text-base text-black">AWS</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={dockerIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Docker" />
        <h3 className="text-base text-black">Docker</h3>
      </div>
    </div>

  </>
) : (
  <>
    <div className="sub-skills flex flex-wrap justify-center gap-4">
      <div className="skill animate-slide-in-left">
        <img src={afterEffectsIcon} className="w-10 h-10 mb-2 block mx-auto object-contain" alt="After Effects" />
        <h3 className="text-base text-black">After Effects</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={premiereProIcon} className="w-10 h-10 mb-2 block mx-auto object-contain" alt="Premiere Pro" />
        <h3 className="text-base text-black">Premiere Pro</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={davinciIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="DaVinci Resolve" />
        <h3 className="text-base text-black">DaVinci Resolve</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={filmoraIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Filmora" />
        <h3 className="text-base text-black">Filmora</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={blenderIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Blender" />
        <h3 className="text-base text-black">Blender</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={flstudioIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="FL Studio" />
        <h3 className="text-base text-black">FL Studio</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={obsstudioIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="OBS Studio" />
        <h3 className="text-base text-black">OBS Studio</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={officeIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Microsoft Office" />
        <h3 className="text-base text-black">Microsoft Office</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={photoshopIcon} className="w-10 h-10 mb-2 block mx-auto object-contain" alt="Photoshop" />
        <h3 className="text-base text-black">Photoshop</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={illustratorIcon} className="w-10 h-10 mb-2 block mx-auto object-contain" alt="Illustrator" />
        <h3 className="text-base text-black">Illustrator</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={indesignIcon} className="w-10 h-10 mb-2 block mx-auto object-contain" alt="InDesign" />
        <h3 className="text-base text-black">InDesign</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={gimpIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="GIMP" />
        <h3 className="text-base text-black">GIMP</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={inkscapeIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Inkscape" />
        <h3 className="text-base text-black">Inkscape</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={coreldrawIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="CorelDRAW" />
        <h3 className="text-base text-black">CorelDRAW</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={canvaIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Canva" />
        <h3 className="text-base text-black">Canva</h3>
      </div>
      <div className="skill animate-fade-in">
        <img src={figmaIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Figma" />
        <h3 className="text-base text-black">Figma</h3>
      </div>
      <div className="skill animate-slide-in-right">
        <img src={adobeSuiteIcon} className="w-12 h-12 mb-2 block mx-auto object-contain" alt="Adobe XD" />
        <h3 className="text-base text-black">Adobe XD</h3>
      </div>
    </div>
    </>
  ) }
        </div>
      </div>
    </div>
  );
};

export default Skills;
