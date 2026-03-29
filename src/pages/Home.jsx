import React, { useEffect } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
import FirstSection from "../components/layouts/FirstSection";
import HeroV2 from "../components/layouts/HeroV2";
import LazySection from "../components/ui/LazySection";

const MiddleContent = React.lazy(() => import("../components/layouts/MiddleContent"));
const LowerContent = React.lazy(() => import("../components/layouts/LowerContent"));
const BottomContent = React.lazy(() => import("../components/layouts/BottomContent"));

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
    
    // Background Preload Strategy
    const preloadChunks = () => {
      import("../components/layouts/MiddleContent");
      import("../components/layouts/LowerContent");
      import("../components/layouts/BottomContent");
    };
    
    if (window.requestIdleCallback) {
      window.requestIdleCallback(preloadChunks);
    } else {
      setTimeout(preloadChunks, 2000); 
    }
  }, [lenis]);

  return (
    <>
      <HeroV2 />
      <FirstSection />
      <LazySection><MiddleContent /></LazySection>
      <LazySection><LowerContent /></LazySection>
      <LazySection><BottomContent /></LazySection>
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
