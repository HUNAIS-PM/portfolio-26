import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";
import Breadcrumbs from "../components/ui/Breadcrumbs";

import { supabase } from "../lib/supabase";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

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

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errServices, setErrServices] = useState("");
  const [errOtherService, setErrOtherService] = useState("");
  const [errProjectType, setErrProjectType] = useState("");
  const [errBudget, setErrBudget] = useState("");
  const [errTimeline, setErrTimeline] = useState("");

  const [successData, setSuccessData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceOptions = [
    "Web Development",
    "UI / UX Design",
    "Website Redesign",
    "Landing Page",
    "E-commerce Website",
    "Logo Design",
    "Branding & Identity",
    "Posters / Social Media Design",
    "Motion Graphics / Video Editing",
    "Other (Specify)"
  ];
  const projectTypes = ["Personal", "Business", "Startup", "Agency", "Other"];
  const budgets = ["₹5,000 – ₹15,000", "₹15,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Custom / Not Sure"];
  const timelines = ["ASAP", "1–2 Weeks", "1 Month", "Flexible"];

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setServices(selectedService);
    setErrServices("");
    if (selectedService !== "Other (Specify)") {
      setOtherService("");
    }
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrClientName("");
    setErrEmail("");
    setErrPhone("");
    setErrServices("");
    setErrOtherService("");
    setErrProjectType("");
    setErrBudget("");
    setErrTimeline("");

    let valid = true;
    if (!clientName.trim()) {
      setErrClientName("Please enter your full name");
      valid = false;
    }
    if (!email.trim()) {
      setErrEmail("Please enter your email");
      valid = false;
    }
    if (!phone.trim()) {
      setErrPhone("Please enter your phone number");
      valid = false;
    }
    if (!services.trim()) {
      setErrServices("Please select a service");
      valid = false;
    }
    if (services === "Other (Specify)" && !otherService.trim()) {
      setErrOtherService("Please specify your service");
      valid = false;
    }
    if (!projectType.trim()) {
      setErrProjectType("Please select a project type");
      valid = false;
    }
    if (!budget.trim()) {
      setErrBudget("Please select a budget");
      valid = false;
    }
    if (!timeline.trim()) {
      setErrTimeline("Please select a timeline");
      valid = false;
    }

    if (!valid) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            full_name: clientName,
            email: email,
            phone: phone,
            company: company,
            service: services,
            other_service: otherService,
            project_type: projectType,
            budget: budget,
            timeline: timeline,
            message: messages,
          },
        ]);

      if (error) {
        throw error;
      }

      setSuccessData({
        name: clientName || "Friend",
        email,
        services: services,
        otherService: otherService,
        projectType,
        budget,
        timeline,
        message: messages,
      });
      setShowSuccess(true);
      setClientName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setServices("");
      setOtherService("");
      setProjectType("");
      setBudget("");
      setTimeline("");
      setMessages("");
    } catch (error) {
      console.error("Error inserting data:", error.message);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-12 px-2 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <Breadcrumbs title="Hire Me" prevLocation={prevLocation} />
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Let’s Connect</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Fill out the form, or reach out directly via email/social. I’ll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white p-8 shadow-md flex flex-col gap-8 w-full">
          <form onSubmit={handlePost} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4 text-base focus:ring-2 focus:ring-primeColor outline-none"
                />
                {errClientName && <p className="text-red-500 mt-1 text-sm">{errClientName}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4 text-base focus:ring-2 focus:ring-primeColor outline-none"
                />
                {errEmail && <p className="text-red-500 mt-1 text-sm">{errEmail}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></p>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4 text-base focus:ring-2 focus:ring-primeColor outline-none"
                />
                {errPhone && <p className="text-red-500 mt-1 text-sm">{errPhone}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Company Name</p>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4 text-base focus:ring-2 focus:ring-primeColor outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Services <span className="text-red-500">*</span></p>
              <select
                value={services}
                onChange={handleServiceChange}
                className={`w-full border border-gray-300 h-12 px-4 focus:ring-2 focus:ring-primeColor outline-none ${errServices ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errServices && <p className="text-red-500 mt-1 text-sm">{errServices}</p>}
            </div>

            {services === "Other (Specify)" && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Please specify your service</p>
                <input
                  type="text"
                  placeholder="Enter your service"
                  value={otherService}
                  onChange={(e) => setOtherService(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4 text-base focus:ring-2 focus:ring-primeColor outline-none"
                />
                {errOtherService && <p className="text-red-500 mt-1 text-sm">{errOtherService}</p>}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Project Type <span className="text-red-500">*</span></p>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4"
                >
                  <option value="">Project Type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errProjectType && <p className="text-red-500 mt-1 text-sm">{errProjectType}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Budget <span className="text-red-500">*</span></p>
                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full border border-gray-300 h-12 px-4">
                  <option value="">Budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                {errBudget && <p className="text-red-500 mt-1 text-sm">{errBudget}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-700">Timeline <span className="text-red-500">*</span></p>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full border border-gray-300 h-12 px-4"
                >
                  <option value="">Timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errTimeline && <p className="text-red-500 mt-1 text-sm">{errTimeline}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Your message</p>
              <textarea
                placeholder="Your message"
                value={messages}
                onChange={handleMessages}
                className={`w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primeColor text-base outline-none`}
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full h-12 bg-primeColor text-white text-lg font-bold hover:bg-primeColor/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {showSuccess && (
              <div className="mt-4 p-4 border-2 border-green-300 bg-green-50 text-center animate-bounce">
                <h4 className="text-xl mb-2 font-semibold text-green-700">Request Sent Successfully!</h4>
                <p className="text-green-600">
                  Thank you, {successData?.name}!<br />
                  I'll review within 24h.
                </p>
                {successData?.otherService && (
                  <p className="text-green-600">
                    Your specified service: {successData.otherService}
                  </p>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">



        </div>
      </div>
    </section>
  );
};

export default Contact;
