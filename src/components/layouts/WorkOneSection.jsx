import React from 'react'
import Title from "../ui/Title";

const WorkOneSection = () => {
  return (
    <section className="w-full h-screen flex items-center border-b-[1px] border-b-black">
      <div className="container mx-auto flex items-center gap-8">
        <div className="w-1/2">
          <Title title="Modern E-commerce Platform" des="A full-featured e-commerce website with product listings." />
          <p className="text-gray-700 text-base leading-relaxed mt-4 mb-4">
            This project involved developing a sophisticated e-commerce platform designed to offer a seamless shopping experience. Leveraging cutting-edge technologies, the platform features a comprehensive product catalog, intuitive navigation, secure user authentication, and a streamlined checkout process. Special attention was paid to creating a responsive design that ensures optimal viewing and interaction across various devices, from desktops to mobile phones. Key functionalities include dynamic product search and filtering, user reviews and ratings, robust inventory management, and integration with payment gateways. The architecture is built for scalability, allowing for easy expansion and the incorporation of new features. This solution aims to provide businesses with a powerful and flexible online storefront capable of handling high traffic and delivering an exceptional user journey.
          </p>
          <p className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-4"><strong>Role / Tools:</strong> Frontend Developer — React, Next.js, Tailwind CSS</p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src="img/nature/pexels-pixabay-35196.jpg" alt="Dew drops on leaf" className="max-w-full h-auto shadow-lg max-h-96 object-contain" />
        </div>
      </div>
    </section>
  )
}

export default WorkOneSection