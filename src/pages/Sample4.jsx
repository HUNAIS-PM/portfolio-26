import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import "../assets/resume.css";

const Sample4 = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);



  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Resume – Hunais P M" prevLocation={prevLocation} />
    <div className="pb-10">
        <div className="resume-wrapper">
          {/* PAGE 1 */}
          <div className="page resume">
            {/* LEFT COLUMN */}
            <aside className="left">
            <div className="photo">
              <img src="/img/profileImg.jpg" alt="Hunais P M Profile" />
            </div>

            <section>
              <h3>Contact</h3>
              <p><FiMail className="inline mr-2" /> 19mcs49@meaec.edu.in</p>
              <p><FiPhone className="inline mr-2" /> +91 96457 92148</p>
              <p><FiMapPin className="inline mr-2" /> Manjeri, Malappuram, Kerala, India</p>
              <p>Profiles: LinkedIn | GitHub</p>
            </section>

            <section>
              <h3>Education</h3>
              <p><strong>Bachelor of Technology (B.Tech) Computer Science & Engineering</strong><br />MEA Engineering College Perintalmanna<br />2019 – 2023</p>
              <p><strong>Bachelor of Technology (B.Tech) Mechanical Engineering</strong><br />MEA Engineering College Perintalmanna<br />2020 – 2023</p>
              <p><strong>Higher Secondary Education (HSE)</strong><br />N S S E M H S S, Manjeri, Kerala<br />2017 – 2019</p>
              <p><strong>High School Education</strong><br />N S S E M H S S, Manjeri, Kerala<br />2016 – 2017</p>
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
              <p>English (Fluent)</p>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <main className="right">
            <section>
              <h3>Projects</h3>

              <div className="job">
                <h4>PHP Laravel Blog Application</h4>
                <ul>
                  <li>Developed a full-featured blog platform using Laravel, serving 500+ users with secure authentication and real-time commenting</li>
                  <li>Implemented user authentication, commenting, and admin dashboard with role-based access control</li>
                  <li>Built WhatsApp-style threaded comments using Laravel WebSockets for enhanced user engagement</li>
                  <li>Used MySQL for database management and Blade templating for responsive UI design</li>
                  <li>GitHub: View Project</li>
                </ul>
              </div>

              <div className="job">
                <h4>The App Universe</h4>
                <ul>
                  <li>Designed and developed a centralized web platform with 100+ categorized tools</li>
                  <li>Included Google services, social platforms, AI tools, programming languages, databases, design tools, and deployment utilities</li>
                  <li>Responsive UI with icon-based navigation and color-coded categories</li>
                  <li>Built using HTML5, CSS3, and JavaScript</li>
                  <li>Live Project: Available</li>
                </ul>
              </div>

              <div className="job">
                <h4>Network-Based Intrusion Detection</h4>
                <ul>
                  <li>Published at NCASCD23, achieving 95% detection accuracy in cyber intrusion prevention</li>
                  <li>Applied machine learning models for detecting cyber intrusions</li>
                  <li>Focused on improving detection accuracy and reducing false positives by 30%</li>
                  <li>Paper: View Publication</li>
                </ul>
              </div>

              <div className="job">
                <h4>College Bus Management System</h4>
                <ul>
                  <li>Developed a Python-based real-time bus tracking system serving 1000+ students with live location updates</li>
                  <li>Integrated GPS tracking and interactive web dashboard for route optimization and alerts</li>
                  <li>Improved transport transparency and student safety, reducing wait times by 50% and enhancing emergency response</li>
                </ul>
              </div>

              <div className="job">
                <h4>Levitating Wind Power Technology</h4>
                <ul>
                  <li>Published on ResearchGate</li>
                  <li>Designed a levitating wind turbine concept for electric vehicles</li>
                  <li>Explored sustainable energy using innovative mechanical design</li>
                  <li>Paper: View Publication</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sample4;
