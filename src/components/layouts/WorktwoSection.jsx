import React from 'react'
import Title from "../ui/Title";

const WorktwoSection = () => {
  return (
    <section className="w-full h-screen flex items-center border-b-[1px] border-b-black">
      <div className="container mx-auto flex items-center gap-8">
        <div className="w-1/2">
          <Title title="Educational Center Management System" des="A web app to manage students, courses, and faculty." />
          <p className="text-gray-700 text-base leading-relaxed mt-4 mb-4">
            This project focuses on a robust Educational Center Management System, a full-stack web application meticulously crafted to streamline administrative tasks and enhance the overall educational experience. The system offers comprehensive functionalities for managing student profiles, course catalogs, admission processes, and faculty records with exceptional efficiency. Designed with a clean, responsive, and user-friendly interface, it ensures accessibility and ease of use for all stakeholders, from administrators to students to instructors. Key features include dynamic data management, secure access controls, reporting capabilities, and an intuitive dashboard for quick oversight. The architecture prioritizes data integrity and scalability, making it a reliable solution for educational institutions seeking to modernize their operations and improve communication channels.
          </p>
          <p className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-4"><strong>Role / Tools:</strong> Full Stack Developer — React, Python (Django), PostgreSQL, HTML, CSS</p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src="img/nature/grasses-7304572_1920.jpg" alt="Grasses in nature" className="max-w-full h-auto shadow-lg max-h-96 object-contain" />
        </div>
      </div>
    </section>
  )
}

export default WorktwoSection