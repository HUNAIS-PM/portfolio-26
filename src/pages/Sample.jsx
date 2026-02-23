import React from "react";
import ProjectCard from "../../components/ProjectCard";

const Sample = () => {
  const projects = [
    { title: "Amazon Clone", img: "/img/projects/amazonClone.webp", link: "https://amazonclone.reactbd.com/" },
    { title: "Cyber Blog", img: "/img/projects/cyberBlog.webp", link: "https://blog.reactbd.com/" },
    { title: "Dashboard", img: "/img/projects/dashboard.webp", link: "https://orebishopping.reactbd.com/" },
    { title: "Dynamic Portfolio", img: "/img/projects/dynamicPortfolio.png", link: "https://amazonclone.reactbd.com/" },
    { title: "Noor Shop", img: "/img/projects/noorShop.webp", link: "https://orebishopping.reactbd.com/" },
    { title: "Skytrigon", img: "/img/projects/orebiShopping.png", link: "#" },
    { title: "React BD", img: "/img/projects/reactBD.png", link: "https://reactbd.com/" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Showcase</h1>
      <a href="https://www.google.com/" className="block text-center mb-6 text-blue-600 hover:underline">Visit Google Website</a>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} img={project.img} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Sample;
