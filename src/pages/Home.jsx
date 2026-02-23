import React, { useEffect } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
// import HeroSection from "../../components/home/HeroSection"; // Excluded as per request
import Developersection from "../components/layouts/Developersection";
import WorkOneSection from "../components/layouts/WorkOneSection";
import FirstSection from "../components/layouts/FirstSection";
import SecondSection from "../components/layouts/SecondSection";
import WorktwoSection from "../components/layouts/WorktwoSection";
import ThirdSection from "../components/layouts/ThirdSection";
import WorkThreeSection from "../components/layouts/WorkThreeSection";
import FourthSection from "../components/layouts/FourthSection";
import AboutSection from "../components/layouts/AboutSection";
import ServiceSection from "../components/layouts/ServiceSection";
import CTASection from "../components/layouts/CTASection";
import SkillSection from "../components/layouts/SkillSection";
import Designsection from "../components/layouts/Designsection";


const HomeContent = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }, [lenis]);

  return (
    <>
      {/* <HeroSection />  */}
      <FirstSection/>
      <AboutSection />
      <Developersection />
      <WorkOneSection />
      <SecondSection />
      <WorktwoSection />
      <ThirdSection />
      <WorkThreeSection />
      <FourthSection />
      <Designsection />
      <ServiceSection />
      <CTASection />
      <SkillSection />
    </>
  )
}

const Home = () => {
  return (
    <ReactLenis root>
      <HomeContent />
    </ReactLenis>
  );
};


export default Home;
