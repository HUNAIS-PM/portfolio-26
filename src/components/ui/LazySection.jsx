import React, { useState, useEffect, useRef, Suspense } from 'react';

const LazySection = ({ children, fallback = <div className="py-20 flex justify-center items-center"><div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div></div>, minHeight = "100vh" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Already visible? don't re-observe
    if (isVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        rootMargin: '200px 0px', // Load 200px before scrolling into viewport
        threshold: 0.01 // Start as soon as 1% comes into the 200px margin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? <Suspense fallback={fallback}>{children}</Suspense> : null}
    </div>
  );
};

export default LazySection;
