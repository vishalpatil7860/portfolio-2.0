"use client";
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "Infosys Limited",
    description:
      "Working as a Senior Data Engineer, I am responsible for designing and implementing data pipelines, optimizing data workflows, and ensuring data quality across various projects. My role involves collaborating with cross-functional teams to deliver scalable data solutions.",
    duration: "2025 - Present",
    icon: <FaBriefcase />,
  },
  {
    title: "M.Sc. In Data Science",
    company: "University of Michigan-Dearborn",
    description:
      "Relevant Coursework: Pattern Recognition and Neural Network, Artificial Intelligence, Database Systems, Natural Language Processing, Deep Learning",
    duration: "2022 - 2024",
    icon: <FaGraduationCap />,
  },
  {
    title: "Data Science Intern",
    company: "Pune, India",
    description:
      "I worked as a Data Science and Business Intelligence Intern for 2 months. This internship program included working on different tools and technologies used by Data Scientists and Business Analysts.(Power BI, Excel, Python, etc.)",
    duration: "2022 - 2022",
    icon: <FaBriefcase />,
  },
  {
    title: "Programmer Analyst",
    company: "Pune, India",
    description:
      "I worked as a Programmer Analyst where I was responsible for utilizing SQL to optimize notification systems, enhancing data retrieval efficiency, and improving overall system performance. This role involved analyzing existing SQL queries, identifying bottlenecks, and implementing solutions to streamline processes.",
    duration: "2020 - 2022",
    icon: <FaBriefcase />,
  },
  {
    title: "B.E. In Computer Engineering",
    company: "Savitribai Phule Pune University, India",
    description:
      "Relevant Coursework: Data Analytics, Data Mining and Warehousing, Artificial Intelligence and Robotics, Database Management Systems, Business Intelligence",
    duration: "2016-2020",
    icon: <FaGraduationCap />,
  },
];

const ExperienceSection = () => {
  return (
    <section className="text-white" id="experience">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-8">My Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
                {experience.icon}
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                {experience.company}
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                {experience.duration}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-200 mt-2">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
