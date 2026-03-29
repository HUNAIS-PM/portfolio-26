import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "../assets/resume.css";

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

const Resume = () => {
  const handleDownloadPdf = async () => {
    const element = document.getElementById("resume-content");
    if (element) {
      const html2pdfModule = await import("html2pdf.js");
      const html2pdf = html2pdfModule.default || html2pdfModule;
      const opt = {
        margin: [-5, 0, -6, 0],
        filename: "Hunais_P_M_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3, dpi: 192, letterRendering: true, useCORS: true, allowTaint: true },
      };
      html2pdf().set(opt).from(element).save();
    }
  };

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

      <div className="relative z-10 px-6 md:px-16 lg:px-32 pt-28 pb-24">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-bodyFont text-xs tracking-[0.4em] text-[#ff014f] uppercase mb-4">
            — Curriculum Vitae
          </p>
          <h1 className="font-lemonMilk leading-tight">
            <span className="block text-[10vw] md:text-[6vw] lg:text-[5vw] text-white">My</span>
            <span
              className="block text-[10vw] md:text-[6vw] lg:text-[5vw]"
              style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}
            >
              Resume
            </span>
          </h1>
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start mb-12"
        >
          <button
            onClick={handleDownloadPdf}
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden font-bodyFont text-xs tracking-widest uppercase text-white"
            style={{ border: "1px solid rgba(255,1,79,0.4)" }}
          >
            <span className="relative z-10">Download PDF</span>
            <span className="relative z-10 text-[#ff014f]">↓</span>
            <span className="absolute inset-0 bg-[#ff014f] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

        <div className="h-px w-full bg-white/[0.05] mb-12" />

        {/* Resume content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div id="resume-content" className="resume-wrapper">
            {/* PAGE 1 */}
            <div className="page resume">
              {/* LEFT COLUMN */}
              <aside className="left">
                <div className="photo">
                  <div className="profile-pic" title="Hunais P M Profile" />
                </div>
                <section>
                  <h3>Contact</h3>
                  <ul>
                    <li><FiMail className="inline mr-2" /> 19mcs49@meaec.edu.in</li>
                    <li><FiPhone className="inline mr-2" /> +91 96457 92148</li>
                    <li><FiMapPin className="inline mr-2" /> Manjeri, Malappuram, Kerala, India</li>
                    <li>Profiles: LinkedIn | GitHub</li>
                  </ul>
                </section>
                <section>
                  <h3>Education</h3>
                  <ul>
                    <li><strong>Bachelor of Technology (B.Tech) Computer Science & Engineering</strong><br />MEA Engineering College Perintalmanna<br />2019 – 2023</li>
                    <li><strong>Bachelor of Technology (B.Tech) Mechanical Engineering</strong><br />MEA Engineering College Perintalmanna<br />2020 – 2023</li>
                    <li><strong>Higher Secondary Education (HSE)</strong><br />N S S E M H S S, Manjeri, Kerala<br />2017 – 2019</li>
                    <li><strong>High School Education</strong><br />N S S E M H S S, Manjeri, Kerala<br />2016 – 2017</li>
                  </ul>
                </section>
                <section>
                  <h3>Technical Skills</h3>
                  <ul>
                    <li><strong>Programming Languages:</strong> C, Java, Python, JavaScript, PHP</li>
                    <li><strong>Frameworks & Libraries:</strong> Django, React, Next.js, Node.js, Laravel</li>
                    <li><strong>Web Technologies:</strong> HTML, CSS, Tailwind CSS</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
                    <li><strong>UI/UX & Design:</strong> Figma, Adobe XD</li>
                    <li><strong>Creative & Media:</strong> Adobe Creative Suite, DaVinci Resolve, Blender</li>
                  </ul>
                </section>
              </aside>

              {/* RIGHT COLUMN */}
              <main className="right">
                <header>
                  <h1>HUNAIS P M</h1>
                  <span>Full Stack Developer | Machine Learning Engineer | Creative Designer</span>
                </header>
                <section>
                  <h3>Summary</h3>
                  <p>
                    Dynamic and forward-thinking Full Stack Developer and Machine Learning Engineer with a proven track record of creating innovative and flexible solutions across diverse domains. Adept in modern technologies including AI, ML, and web development, with strong theoretical and practical foundations. Passionate about integrating automation, robotics, and IoT to build impactful systems. Committed to continuous learning and collaborative, research-driven innovation.
                  </p>
                </section>
                <section>
                  <h3>Experience</h3>
                  <div className="job">
                    <h4><strong>Skytrigon</strong> <span>09/2025 – Present</span></h4>
                    <p><em>Web Developer & Graphic Designer</em></p>
                    <ul><li>Develop modern websites, design logos/banners, deliver end-to-end solutions, collaborate with clients.</li></ul>
                  </div>
                  <div className="job">
                    <h4><strong>ACE</strong> <span>04/2025 – 08/2025</span></h4>
                    <p><em>Web Developer & UI/UX Designer</em></p>
                    <ul><li>Designed responsive interfaces, created wireframes/prototypes in Figma/Adobe XD, improved UX.</li></ul>
                  </div>
                  <div className="job">
                    <h4><strong>Various Projects</strong> <span>2024 – 2025</span></h4>
                    <p><em>Freelance Web Developer & Graphic Designer</em></p>
                    <ul><li>Built responsive websites using React/Django/PHP, created graphics, optimized for SEO/performance.</li></ul>
                  </div>
                  <div className="job">
                    <h4><strong>Goldmine Global Services (Remote)</strong> <span>05/2021 – 06/2021</span></h4>
                    <p><em>Intern – Python & AI</em></p>
                    <ul><li>Focused on Python/AI, worked on automation scripts, data processing, real-world problem-solving.</li></ul>
                  </div>
                  <div className="job">
                    <h4><strong>Internshala (Remote)</strong> <span>03/2020 – 05/2020</span></h4>
                    <p><em>Intern</em></p>
                    <ul><li>Industry training, project-based learning, strengthened programming and professional skills.</li></ul>
                  </div>
                </section>
              </main>
            </div>

            {/* PAGE 2 */}
            <div className="page resume">
              {/* LEFT COLUMN */}
              <aside className="left">
                <section>
                  <h3>Soft Skills</h3>
                  <ul>
                    <li>Communication, Teamwork, Problem-Solving, Adaptability, Leadership, Time Management, Creativity, Critical Thinking</li>
                  </ul>
                </section>
                <section>
                  <h3>Certifications</h3>
                  <ul>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Full Stack Web Development</li>
                    <li>Python Programming</li>
                    <li>Artificial Neural Networks</li>
                    <li>Database Development</li>
                    <li>Data Manipulation</li>
                    <li>AutoCAD 2D & 3D</li>
                    <li>Search Engine Optimization</li>
                    <li>WordPress</li>
                  </ul>
                </section>
                <section>
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>Published Network-Based Intrusion Detection research paper at NCASCD23</li>
                    <li>Published Levitating Wind Power Technology for Vehicles on ResearchGate</li>
                  </ul>
                </section>
                <section>
                  <h3>Memberships & Leadership</h3>
                  <ul>
                    <li>Member – AICTSD (All India Council for Technical Skill Development)</li>
                    <li>Internshala Student Partner (2020)</li>
                  </ul>
                </section>
                <section>
                  <h3>Languages</h3>
                  <ul>
                    <li>English (Fluent)</li>
                  </ul>
                </section>
              </aside>

              {/* RIGHT COLUMN */}
              <main className="right">
                <section>
                  <h3>Projects</h3>
                  <div className="job">
                    <h4><strong>Student Management System (React & Django)</strong></h4>
                    <p><em>Web Developer & UI/UX | React, Django, REST API, Tailwind</em></p>
                    <ul><li>Student records, attendance, and performance management</li></ul>
                  </div>
                  <div className="job">
                    <h4><strong>Real-Time Blog & Community Platform</strong></h4>
                    <p><em>Full-Stack | Laravel, MySQL, WebSockets</em></p>
                    <ul>
                      <li>Role-based authentication and admin dashboard</li>
                      <li>Real-time threaded comments</li>
                    </ul>
                  </div>
                  <div className="job">
                    <h4><strong>Freelance Client Web Solutions</strong></h4>
                    <p><em>Web Developer & Graphic Designer | React, PHP, Django, SEO</em></p>
                    <ul>
                      <li>Responsive business websites with custom UI/UX</li>
                      <li>Branding, SEO, and performance optimization</li>
                    </ul>
                  </div>
                  <div className="job">
                    <h4><strong>Creative Portfolio & Branding Website</strong></h4>
                    <p><em>Web Developer & Graphic Designer | React, Figma, Illustrator</em></p>
                    <ul>
                      <li>Modern portfolio websites and visual identity design</li>
                      <li>Mobile-first, performance-optimized UI</li>
                    </ul>
                  </div>
                  <div className="job">
                    <h4><strong>Network-Based Intrusion Detection System</strong></h4>
                    <p><em>ML & Research | Python, Machine Learning</em></p>
                    <ul>
                      <li>95% detection accuracy; 30% fewer false positives</li>
                      <li>Published at NCASCD23</li>
                    </ul>
                  </div>
                  <div className="job">
                    <h4><strong>Smart College Bus Management System</strong></h4>
                    <p><em>Python | GPS, Web Dashboard</em></p>
                    <ul>
                      <li>Real-time tracking for 1000+ students</li>
                      <li>Reduced wait times by 50%</li>
                    </ul>
                  </div>
                  <div className="job">
                    <h4><strong>Levitating Wind Power Technology</strong></h4>
                    <p><em>Research | Sustainable Energy</em></p>
                    <ul>
                      <li>Levitating wind turbine concept for EVs</li>
                      <li>Published on ResearchGate</li>
                    </ul>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
