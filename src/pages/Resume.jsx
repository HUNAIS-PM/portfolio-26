import React, { useEffect, useState } from "react";
import html2pdf from 'html2pdf.js'; // Import html2pdf.js

import { useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import "../assets/resume.css";

const Resume = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  // Function to handle PDF download
  const handleDownloadPdf = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      const opt = {
        margin: [-5, 0, -6, 0], // top, left, bottom, right in inches
        filename: 'Hunais_P_M_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 3, // Re-introduced for clarity in continuous flow
          dpi: 192, // Re-introduced for clarity in continuous flow
          letterRendering: true,
          useCORS: true,
          allowTaint: true
        },
        // Removed jsPDF format/orientation and pagebreak options
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Resume – Hunais P M" prevLocation={prevLocation} />
      
      {/* Download button */}
      <div className="flex justify-center my-4">
        <button
          onClick={handleDownloadPdf}
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4"
        >
          Download Resume
        </button>
      </div>

      <div className="pb-10"> {/* This div needed a closing tag */}
        <div id="resume-content" className="resume-wrapper"> {/* Added id here */}
          {/* PAGE 1 */}
          <div className="page resume">
            {/* LEFT COLUMN */}
            <aside className="left">
            <div className="photo">
              <div className="profile-pic" title="Hunais P M Profile"></div>
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
                <ul>
                  <li>Develop modern websites, design logos/banners, deliver end-to-end solutions, collaborate with clients.</li>
                </ul>
              </div>

              <div className="job">
                <h4><strong>ACE</strong> <span>04/2025 – 08/2025</span></h4>
                <p><em>Web Developer & UI/UX Designer</em></p>
                <ul>
                  <li>Designed responsive interfaces, created wireframes/prototypes in Figma/Adobe XD, improved UX.</li>
                </ul>
              </div>

              <div className="job">
                <h4><strong>Various Projects</strong> <span>2024 – 2025</span></h4>
                <p><em>Freelance Web Developer & Graphic Designer</em></p>
                <ul>
                  <li>Built responsive websites using React/Django/PHP, created graphics, optimized for SEO/performance.</li>
                </ul>
              </div>

              <div className="job">
                <h4><strong>Goldmine Global Services (Remote)</strong> <span>05/2021 – 06/2021</span></h4>
                <p><em>Intern – Python & AI</em></p>
                <ul>
                  <li>Focused on Python/AI, worked on automation scripts, data processing, real-world problem-solving.</li>
                </ul>
              </div>

              <div className="job">
                <h4><strong>Internshala (Remote)</strong> <span>03/2020 – 05/2020</span></h4>
                <p><em>Intern</em></p>
                <ul>
                  <li>Industry training, project-based learning, strengthened programming and professional skills.</li>
                </ul>
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
                <ul>
                  <li>Student records, attendance, and performance management</li>
                </ul>
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
      </div> {/* Closes <div id="resume-content" className="resume-wrapper"> */}
      </div>
    </div>
  );

};

export default Resume;