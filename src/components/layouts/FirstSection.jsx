import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import "./FirstSection.css";
import gsap from "gsap"; // Re-import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Re-import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const FirstSection = () => {
  const roleTextRef = useRef(null);  // Reference for the animating role text
  const roleTypeRef = useRef(null); // Reference for the role type text (Developer/Designer)

  const developerRoles = useMemo(() => ["Web", "Frontend", "Backend", "Full Stack", "React", "AI / ML"], []);
  const designerRoles = useMemo(() => ["Graphic", "UI/UX", "Motion", "Web", "Creative", "Multimedia", "Visual"], []);
  const allRoles = useRef([...developerRoles, ...designerRoles]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Added repeatDelay for better readability between roles

    allRoles.current.forEach((role) => {
      tl.to(roleTextRef.current, {
        opacity: 0,
        y: 20, // Slide down and fade out
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          roleTextRef.current.textContent = role;
          if (developerRoles.includes(role)) {
            roleTypeRef.current.textContent = "Developer";
          } else {
            roleTypeRef.current.textContent = "Designer";
          }
        },
      })
        .fromTo(roleTextRef.current, {
          opacity: 0,
          y: -20, // Slide up and fade in
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
    });

    return () => tl.kill();
  }, [developerRoles, designerRoles]);

  return (
    <section className="first-section">
      <Profile imageUrl="/img/photo.png" />
      <div className="content">
        <div className="role-wrapper">
          <span ref={roleTextRef} className="fluid-text font-light">
            {/* Initial text will be set by useEffect */}
          </span>
          <p ref={roleTypeRef} className="fluid-text font-light">
            {/* Role type (Developer/Designer) will go here */}
          </p>
        </div>

        <p className="subtitle fluid-subtitle">
          Crafting premium web & graphic experiences
        </p>

        <Link to="/works">
          <button className="hero-cta-button">View Work</button>
        </Link>
      </div>
    </section>
  );
};

export default FirstSection;