"use client";
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    logo: "/images/logos/ibm.png", // Add the path to your logo image
    title: "Introduction to Data Engineering",
    issuer: "IBM",
    date: "Issued Jul 2023",
    credentialId: "KYQ825HGBEXD",
    link: "https://www.credly.com/badges/KYQ825HGBEXD",
    skills: "Data Science"
  },
  {
    logo: "/images/logos/aineai.jpeg", // Add the path to your logo image
    title: "Data Analysis & Visualization using Power BI",
    issuer: "AINE AI",
    date: "Issued May 2022",
    credentialId: "CCEPQ7KW74",
    link: "https://www.credly.com/badges/CCEPQ7KW74",
    skills: "Business Intelligence (BI) · Analytical Skills · Business Intelligence Tools · Microsoft Office"
  },
  {
    logo: "/images/logos/um.jpg", // Add the path to your logo image
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "Issued Jan 2022",
    credentialId: "XDEJ64H5YEQF",
    link: "https://www.credly.com/badges/XDEJ64H5YEQF",
    skills: "Python · Data Structures"
  },
  {
    logo: "/images/logos/um.jpg", // Add the path to your logo image
    title: "Python for Everybody",
    issuer: "University of Michigan",
    date: "Issued Jan 2022",
    credentialId: "TFJRSC87JLYW",
    link: "https://www.credly.com/badges/TFJRSC87JLYW",
    skills: "Python"
  },
  {
    logo: "/images/logos/um.jpg", // Add the path to your logo image
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "Issued Jan 2022",
    credentialId: "F4RK4KAR2JTB",
    link: "https://www.credly.com/badges/F4RK4KAR2JTB",
    skills: "Python · Web Scraping"
  },
  {
    logo: "/images/logos/um.jpg", // Add the path to your logo image
    title: "Programming for Everybody (Getting Started with Python)!",
    issuer: "University of Michigan",
    date: "Issued Dec 2021",
    credentialId: "T5L9H2SD5P8Y",
    link: "https://www.credly.com/badges/T5L9H2SD5P8Y",
    skills: "Python"
  },
  {
    logo: "/images/logos/udemy.png", // Add the path to your logo image
    title: "Complete Machine Learning & Data Science Bootcamp 2021",
    issuer: "Udemy",
    date: "Issued Feb 2021",
    credentialId: "UC-ef5d846b-a870-4627-97f2-bb4e54991e9b",
    link: "https://www.udemy.com/certificate/UC-ef5d846b-a870-4627-97f2-bb4e54991e9b/",
    skills: "Python · Machine Learning · Data Analysis"
  },
  {
    logo: "/images/logos/icl.jpg", // Add the path to your logo image
    title: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Imperial College London",
    date: "Issued Dec 2021",
    link: "https://www.credly.com/badges/PYA5J4G2VY5V",
    skills: "Analytical Skills · Linear Algebra"
  },
];

const CertificationSection = () => {
    return (
      <section id="certifications" className="py-12 px-4 xl:px-16 bg-[#181818] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              className="bg-[#222] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img src={certification.logo} alt={certification.issuer} className="w-12 h-12 mr-4"/>
                <div>
                  <h3 className="text-xl font-semibold">{certification.title}</h3>
                  <p className="text-sm text-gray-400">{certification.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">{certification.date}</p>
              <p className="text-sm text-gray-400 mt-2">Skills: {certification.skills}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CertificationSection;
