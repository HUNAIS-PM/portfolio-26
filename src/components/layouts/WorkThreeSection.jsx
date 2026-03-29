import React from 'react'
import Title from "../ui/Title";

const WorkThreeSection = () => {
  return (
    <section className="w-full h-screen flex items-center border-b-[1px] border-b-black">
      <div className="container mx-auto flex items-center gap-8">
        <div className="w-1/2">
          <Title title="Intelligent Personal AI Assistant" des="An AI assistant that understands voice/text commands and performs automated tasks." />
          <p className="text-gray-700 text-base leading-relaxed mt-4 mb-4">
            This project involved the development of an Intelligent Personal AI Assistant, a sophisticated system engineered to understand and respond to user queries through both voice and text commands. Built with advanced natural language processing (NLP) and machine learning (ML) capabilities, the assistant can perform a wide array of automated tasks, provide real-time information, and offer personalized assistance, significantly enhancing user productivity and experience. The core of this project lies in its ability to interpret complex requests, learn from interactions, and adapt its responses to offer highly relevant and accurate support. Integration with various data sources and services allows it to retrieve up-to-date information and execute commands seamlessly, acting as a true digital companion. This AI assistant represents a step forward in intuitive human-computer interaction, designed for efficiency and ease of use in daily tasks.
          </p>
          <p className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-4"><strong>Role / Tools:</strong> AI Developer — Python, NLP, Speech Recognition, Machine Learning, PyTorch</p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img loading="lazy" decoding="async" src="img/nature/pinecone-10001896_1920.webp" alt="Pinecone" className="max-w-full h-auto shadow-lg max-h-96 object-contain" />
        </div>
      </div>
    </section>
  )
}

export default WorkThreeSection
