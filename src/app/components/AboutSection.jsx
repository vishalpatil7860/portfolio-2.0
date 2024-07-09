"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:flex md:items-center md:justify-center py-8 px-4 xl:px-16">
        <div className="md:w-1/2">
          <Image src="/images/about.avif" width={500} height={500} alt="About image" className="mx-auto" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 text-left md:ml-8">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-4">
            I am Vishal Patil, Founder of PrismGen AI and a Data Science Graduate from the University of Michigan-Dearborn. With expertise in data analytics, machine learning, and business intelligence, I focus on AI-driven content creation. Proficient in Python, R, SQL, Power BI, and Tableau, I excel at turning complex datasets into strategic insights.
          </p>
          <p className="text-base lg:text-lg mb-4">
            At PrismGen AI, I lead efforts in predictive modeling, algorithm optimization, and scalable AI solutions. We transform content creation using generative AI for text, visuals, and code, blending technology with creativity.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Driven by data-driven problem-solving, I am passionate about innovation in the tech industry. In my free time, I enjoy video games, movies, table tennis, and learning about Large Language Models.
          </p>
        </div>
      </div>
      <div className="py-8 px-4 xl:px-16">
        <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
          <div className="flex flex-wrap justify-left gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Python</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">R</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">SQL</span>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Tools</h4>
          <div className="flex flex-wrap justify-left gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Power BI</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Tableau</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">R-Studio</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Microsoft Excel</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Git</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Jira</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Azure Data Studio</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Jupyter Notebook</span>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Databases</h4>
          <div className="flex flex-wrap justify-left gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded">MySQL</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">PostgreSQL</span>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Libraries</h4>
          <div className="flex flex-wrap justify-left gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded">TensorFlow</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Keras</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Matplotlib</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">NumPy</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Pandas</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Seaborn</span>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Other Skills</h4>
          <div className="flex flex-wrap justify-left gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Creativity</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Time Management</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Internet Research Skills</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Integrity</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Data Cleaning</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Prompt Engineering</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">Applied Regression Analysis</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">CI/CD Pipeline</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded">A/B Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
