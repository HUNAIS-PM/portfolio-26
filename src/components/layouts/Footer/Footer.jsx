import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaBehance,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterListTitle from "./FooterListTitle";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F3] py-24">
      <div
        className="
          max-w-container mx-auto
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
        "
      >
        {/* ================= BRAND ================= */}
        <div className="text-center">
          <h3 className="font-titleFont text-xl font-semibold mb-6">
            SKYTRIGON
          </h3>
          <p className="text-base font-bodyFont text-black mb-6 max-w-sm">
            Skytrigon is a leading innovator in web development and design,
            dedicated to crafting exceptional digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex justify-between max-w-[240px]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] text-lg hover:scale-110 duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0057FF] text-lg hover:scale-110 duration-300"
            >
              <FaBehance />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EA4C89] text-lg hover:scale-110 duration-300"
            >
              <FaDribbble />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#181717] text-lg hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] text-lg hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] text-lg hover:scale-110 duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] text-lg hover:scale-110 duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="text-center">
          <FooterListTitle title="Quick Links" />
          <ul className="flex flex-col gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "Works", path: "/works" },
              { name: "Services", path: "/services" },
              { name: "Skills", path: "/skills" },
              { name: "About", path: "/about" },
              { name: "Resume", path: "/resume" },
              { name: "Hire Me", path: "/hire-me" },
            ].map((item) => (
              <li
                key={item.name}
                className="font-titleFont text-base text-black hover:text-red-500 hover:underline underline-offset-4 cursor-pointer duration-300"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="text-center">
          <FooterListTitle title="Hire Me" />
          <ul className="flex flex-col gap-3 text-black">
            <li className="flex justify-center items-center gap-2 hover:text-red-500 duration-300">
              <FaPhone /> +91 96457 92148
            </li>
            <li className="flex justify-center items-center gap-2 hover:text-red-500 duration-300">
              <FaEnvelope /> skytrigontech@gmail.com
            </li>
            <li className="flex justify-center items-center gap-2 hover:text-red-500 duration-300">
              <FaMapMarkerAlt /> Manjeri, Malappuram, Kerala, India
            </li>
            <li className="flex justify-center items-center gap-2 hover:text-red-500 duration-300">
              <FaWhatsapp /> +91 96457 92148
            </li>
          </ul>
        </div>

        {/* ================= MAP ================= */}
        <div className="text-center">
          <FooterListTitle title="Location" />
          <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-md">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7289416664!2d-0.24167992925528218!3d51.52855824151744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
