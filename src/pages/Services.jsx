import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";

const Services = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [mode, setMode] = useState("developer");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Services" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="text-3xl font-bold text-primeColor mb-4">My Services</h1>
        <p className="text-base text-lightText mb-8">
          I offer a range of professional services to help bring your ideas to life and achieve your goals.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex h-10 bg-white border border-gray-300 shadow-sm">
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
              className={`absolute top-0 left-0 h-full bg-primeColor transition-all duration-300 ease-in-out ${
                mode === "developer" ? "w-1/2 translate-x-0" : "w-1/2 translate-x-full"
              }`}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(mode === "developer" ? [
            { id: 1, icon: "💻", title: "Web Development", desc: "Custom websites and web applications built with modern technologies like React, Node.js, and more.", pricing: { basic: "$500", standard: "$1500", premium: "$3000" }, testimonials: ["Great work!", "Highly recommend."] },
            { id: 2, icon: "🎨", title: "UI/UX Design", desc: "User-centered design solutions that create intuitive and engaging user experiences.", pricing: { basic: "$300", standard: "$800", premium: "$2000" }, testimonials: ["Amazing designs!", "Perfect UX."] },
            { id: 3, icon: "📱", title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android devices.", pricing: { basic: "$1000", standard: "$3000", premium: "$6000" }, testimonials: ["Excellent app!", "Smooth performance."] },
            { id: 4, icon: "🔧", title: "Consulting", desc: "Technical consulting and code reviews to improve your project's performance and maintainability.", pricing: { basic: "$100/hr", standard: "$150/hr", premium: "$200/hr" }, testimonials: ["Helpful advice!", "Improved our code."] },
            { id: 5, icon: "📊", title: "Data Analysis", desc: "Data visualization and analysis services to help you make informed business decisions.", pricing: { basic: "$200", standard: "$500", premium: "$1000" }, testimonials: ["Insightful analysis!", "Data-driven decisions."] },
            { id: 6, icon: "🚀", title: "SEO Optimization", desc: "Improve your website's visibility and ranking in search engine results.", pricing: { basic: "$150", standard: "$400", premium: "$800" }, testimonials: ["Better rankings!", "Increased traffic."] },
            { id: 19, icon: "🔄", title: "Website Redesign", desc: "Modernize your existing website with a fresh look and improved functionality.", pricing: { basic: "$700", standard: "$2000", premium: "$4000" }, testimonials: ["Transformed our site!", "Excellent update."] },
            { id: 20, icon: "📄", title: "Landing Page Development", desc: "High-converting landing pages designed to capture leads and drive conversions.", pricing: { basic: "$300", standard: "$900", premium: "$1800" }, testimonials: ["Great conversion rate!", "Professional pages."] },
            { id: 21, icon: "🛒", title: "E-commerce Website", desc: "Build robust online stores with secure payment gateways and seamless shopping experiences.", pricing: { basic: "$1200", standard: "$4000", premium: "$8000" }, testimonials: ["Boosted our sales!", "Smooth e-commerce solution."] }
          ] : [
            { id: 7, icon: "🎨", title: "Logo Design & Brand Identity", desc: "Professional logos and brand identity creation including color schemes and guidelines.", pricing: { basic: "$200", standard: "$500", premium: "$1000" }, testimonials: ["Perfect logo!", "Love the design."] },
            { id: 8, icon: "📄", title: "Poster & Flyer Design", desc: "Custom posters, flyers, and promotional materials for events and marketing.", pricing: { basic: "$150", standard: "$400", premium: "$800" }, testimonials: ["Beautiful prints!", "High quality."] },
            { id: 9, icon: "📱", title: "Social Media Creatives", desc: "Engaging posts, ads, and thumbnails optimized for platforms like Instagram and YouTube.", pricing: { basic: "$100", standard: "$300", premium: "$600" }, testimonials: ["Engaging content!", "Increased followers."] },
            { id: 10, icon: "🖼️", title: "Banner & Advertisement Design", desc: "Digital banners and ad creatives for websites, social media, and campaigns.", pricing: { basic: "$150", standard: "$400", premium: "$800" }, testimonials: ["Eye-catching ads!", "Boosted engagement."] },
            { id: 11, icon: "🖨️", title: "Print Design", desc: "Brochures, and packaging with print-ready specifications.", pricing: { basic: "$200", standard: "$500", premium: "$1000" }, testimonials: ["Professional prints!", "Perfect for business."] },
            { id: 12, icon: "🎬", title: "Motion Graphics & Animations", desc: "Animated videos, logo animations, intros/outros, kinetic typography, and basic 3D motion using Blender.", pricing: { basic: "$500", standard: "$1500", premium: "$3000" }, testimonials: ["Amazing animations!", "Creative work."] },
            { id: 13, icon: "✂️", title: "Video Editing", desc: "Professional editing for YouTube videos, Reels, ads, with transitions and visual effects.", pricing: { basic: "$300", standard: "$800", premium: "$1500" }, testimonials: ["Smooth edits!", "Great results."] },
            { id: 14, icon: "💻", title: "UI Design (Web & Mobile)", desc: "User interface design for web and mobile apps, including responsive layouts.", pricing: { basic: "$400", standard: "$1000", premium: "$2000" }, testimonials: ["Intuitive UI!", "User-friendly."] },
            { id: 15, icon: "📐", title: "Wireframing & Prototyping", desc: "Interactive wireframes and prototypes to visualize and test user flows.", pricing: { basic: "$300", standard: "$700", premium: "$1500" }, testimonials: ["Clear prototypes!", "Helped refine ideas."] },
            { id: 16, icon: "🤖", title: "AI-Powered Creative Services", desc: "AI tools for image generation, video enhancement, background removal, upscaling, and prompt design.", pricing: { basic: "$100", standard: "$300", premium: "$600" }, testimonials: ["Innovative AI use!", "Saved time."] },
            { id: 17, icon: "📢", title: "Marketing & Content Design", desc: "Social media branding, ad creatives, YouTube thumbnails, and short-form video content.", pricing: { basic: "$200", standard: "$500", premium: "$1000" }, testimonials: ["Effective marketing!", "Increased visibility."] },
            { id: 18, icon: "🛠️", title: "Production & Support", desc: "File optimization, print-ready prep (CMYK, bleed, DPI), asset management, and design revisions.", pricing: { basic: "$150", standard: "$400", premium: "$800" }, testimonials: ["Reliable support!", "Smooth production."] }
          ]).map(service => (
            <div key={service.id} className="bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <button onClick={() => setSelectedService(service)} className="w-full bg-primeColor text-white py-2 hover:bg-black duration-300">Learn More</button>
            </div>
          ))}
        </div>
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedService(null)}>
            <div className="bg-white p-6 max-w-4xl w-full mx-4 max-h-96 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{selectedService.icon}</div>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">{selectedService.desc}</p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-300 p-4 text-center">
                    <h4 className="font-semibold mb-2">Basic</h4>
                    <p className="text-2xl font-bold text-primeColor">{selectedService.pricing.basic}</p>
                  </div>
                  <div className="border border-primeColor p-4 text-center bg-primeColor text-white">
                    <h4 className="font-semibold mb-2">Standard</h4>
                    <p className="text-2xl font-bold">{selectedService.pricing.standard}</p>
                  </div>
                  <div className="border border-gray-300 rounded p-4 text-center">
                    <h4 className="font-semibold mb-2">Premium</h4>
                    <p className="text-2xl font-bold text-primeColor">{selectedService.pricing.premium}</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Client Testimonials</h3>
                <div className="space-y-2">
                  {selectedService.testimonials.map((testimonial, index) => (
                    <p key={index} className="text-sm italic">"{testimonial}"</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-primeColor text-white px-6 py-2 hover:bg-black">Get Quote</button>
                <button onClick={() => setSelectedService(null)} className="bg-gray-500 text-white px-6 py-2 hover:bg-gray-700">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
