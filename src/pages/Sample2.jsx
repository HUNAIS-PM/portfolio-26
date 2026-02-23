import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";

const Sample2 = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const developmentPhases = [
    {
      phase: "Planning & Research",
      color: "blue",
      steps: [
        "Define project scope and objectives",
        "Conduct market research and competitor analysis",
        "Identify target audience and user personas",
        "Create user journey maps and wireframes",
        "Define technical requirements and technology stack",
        "Establish project timeline and budget"
      ]
    },
    {
      phase: "Design",
      color: "purple",
      steps: [
        "Create mood boards and design concepts",
        "Develop high-fidelity mockups and prototypes",
        "Design responsive layouts for all devices",
        "Establish brand guidelines and color palette",
        "Create typography and iconography systems",
        "Design user interface components and patterns"
      ]
    },
    {
      phase: "Development",
      color: "green",
      steps: [
        "Set up development environment and version control",
        "Implement frontend architecture and components",
        "Develop backend APIs and database structure",
        "Integrate third-party services and APIs",
        "Implement responsive design and cross-browser compatibility",
        "Add interactive features and animations"
      ]
    },
    {
      phase: "Testing & Quality Assurance",
      color: "orange",
      steps: [
        "Conduct unit testing and integration testing",
        "Perform cross-browser and device testing",
        "Test accessibility and usability standards",
        "Security testing and vulnerability assessment",
        "Performance optimization and load testing",
        "User acceptance testing and feedback collection"
      ]
    },
    {
      phase: "Deployment & Launch",
      color: "red",
      steps: [
        "Configure production environment and hosting",
        "Set up domain and SSL certificates",
        "Deploy application to production servers",
        "Configure monitoring and analytics tools",
        "Create backup and disaster recovery plans",
        "Launch website and monitor initial performance"
      ]
    },
    {
      phase: "Maintenance & Optimization",
      color: "indigo",
      steps: [
        "Monitor website performance and user behavior",
        "Regular security updates and patches",
        "Content updates and feature enhancements",
        "SEO optimization and marketing campaigns",
        "User feedback collection and analysis",
        "Continuous improvement and iteration"
      ]
    }
  ];

  const projectChecklist = [
    {
      category: "Pre-Development",
      items: [
        { task: "Domain name registration", completed: false },
        { task: "Hosting provider selection", completed: false },
        { task: "SSL certificate setup", completed: false },
        { task: "Development environment setup", completed: false },
        { task: "Version control system (Git)", completed: false },
        { task: "Project management tools", completed: false }
      ]
    },
    {
      category: "Content & Assets",
      items: [
        { task: "Content strategy and copywriting", completed: false },
        { task: "High-quality images and graphics", completed: false },
        { task: "Logo and brand assets", completed: false },
        { task: "Video content (if applicable)", completed: false },
        { task: "SEO keywords research", completed: false },
        { task: "Social media integration setup", completed: false }
      ]
    },
    {
      category: "Technical Requirements",
      items: [
        { task: "Responsive design implementation", completed: false },
        { task: "Cross-browser compatibility", completed: false },
        { task: "Mobile optimization", completed: false },
        { task: "Performance optimization", completed: false },
        { task: "Security implementation", completed: false },
        { task: "Analytics and tracking setup", completed: false }
      ]
    },
    {
      category: "Post-Launch",
      items: [
        { task: "Website monitoring setup", completed: false },
        { task: "Backup system configuration", completed: false },
        { task: "User feedback collection", completed: false },
        { task: "Marketing campaign launch", completed: false },
        { task: "SEO optimization", completed: false },
        { task: "Ongoing maintenance plan", completed: false }
      ]
    }
  ];

  const technologyStack = {
    frontend: [
      { name: "React.js", description: "Component-based UI library" },
      { name: "Next.js", description: "React framework for production" },
      { name: "Vue.js", description: "Progressive JavaScript framework" },
      { name: "Angular", description: "Platform for building web applications" },
      { name: "HTML5/CSS3", description: "Semantic markup and styling" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" }
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime environment" },
      { name: "Express.js", description: "Web application framework" },
      { name: "Python/Django", description: "High-level web framework" },
      { name: "PHP/Laravel", description: "PHP web framework" },
      { name: "Ruby on Rails", description: "Full-stack web framework" },
      { name: "Java/Spring", description: "Enterprise Java framework" }
    ],
    database: [
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "PostgreSQL", description: "Advanced open source database" },
      { name: "MySQL", description: "Popular relational database" },
      { name: "Redis", description: "In-memory data structure store" },
      { name: "Firebase", description: "Backend-as-a-Service platform" },
      { name: "Supabase", description: "Open source Firebase alternative" }
    ],
    deployment: [
      { name: "Vercel", description: "Frontend deployment platform" },
      { name: "Netlify", description: "Web hosting and automation" },
      { name: "AWS", description: "Cloud computing platform" },
      { name: "DigitalOcean", description: "Cloud infrastructure provider" },
      { name: "Heroku", description: "Cloud application platform" },
      { name: "Railway", description: "Infrastructure platform" }
    ]
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Website Development Plan" prevLocation={prevLocation} />
      <div className="pb-10">
        {/* Project Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Complete Website Development Plan</h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg opacity-90 mb-6">
              A comprehensive guide to planning, designing, developing, and launching a successful website.
              This plan covers all aspects from initial concept to post-launch maintenance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6 Phases</div>
                <p className="text-sm opacity-80">Development Stages</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24 Steps</div>
                <p className="text-sm opacity-80">Detailed Tasks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4 Categories</div>
                <p className="text-sm opacity-80">Checklist Items</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Phases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Development Phases</h2>
          <div className="space-y-8">
            {developmentPhases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className={`p-6 bg-${phase.color}-500 text-white`}>
                  <h3 className="text-xl font-bold">{phase.phase}</h3>
                  <p className="text-sm opacity-90 mt-1">Phase {phaseIndex + 1} of {developmentPhases.length}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full bg-${phase.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className={`text-xs font-bold text-${phase.color}-600`}>{stepIndex + 1}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Technology Stack Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(technologyStack).map(([category, technologies]) => (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 capitalize">{category}</h3>
                <div className="space-y-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-800">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Project Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectChecklist.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={item.completed}
                          readOnly
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className={`text-sm ${item.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline & Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Timeline & Milestones</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Week 1-2: Planning & Research</h3>
                  <p className="text-gray-600">Define requirements, research competitors, create user personas</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Week 3-4: Design Phase</h3>
                  <p className="text-gray-600">Create wireframes, mockups, and interactive prototypes</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Week 5-8: Development</h3>
                  <p className="text-gray-600">Build frontend and backend, integrate features and APIs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Week 9-10: Testing & QA</h3>
                  <p className="text-gray-600">Comprehensive testing, bug fixes, and performance optimization</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Week 11: Launch</h3>
                  <p className="text-gray-600">Deploy to production, configure monitoring, and go live</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Ongoing: Maintenance</h3>
                  <p className="text-gray-600">Monitor performance, update content, and continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Budget Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Basic Website</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$2,000 - $5,000</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 5-10 pages</li>
                <li>• Basic CMS</li>
                <li>• Mobile responsive</li>
                <li>• Basic SEO</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Professional Website</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$5,000 - $15,000</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom design</li>
                <li>• E-commerce functionality</li>
                <li>• Advanced features</li>
                <li>• Premium integrations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enterprise Solution</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$15,000+</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complex web applications</li>
                <li>• Custom backend systems</li>
                <li>• Advanced analytics</li>
                <li>• Scalable architecture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Success Metrics & KPIs</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Traffic Growth</h3>
                <p className="text-sm text-gray-600">Monitor unique visitors, page views, and session duration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Conversion Rate</h3>
                <p className="text-sm text-gray-600">Track goal completions, form submissions, and sales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Revenue Impact</h3>
                <p className="text-sm text-gray-600">Measure ROI, customer acquisition cost, and lifetime value</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">User Satisfaction</h3>
                <p className="text-sm text-gray-600">Monitor user feedback, ratings, and engagement metrics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            This comprehensive plan provides everything you need to successfully plan, develop, and launch your website.
            Follow each phase systematically to ensure a high-quality result.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Download Full Plan PDF
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sample2;
