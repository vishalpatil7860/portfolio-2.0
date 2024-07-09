"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Brain Tumor Segmentation using U-Net based Deep Learning Model",
    description: "Developed a U-Net-based deep learning model for Brain Tumor Segmentation from MRI scans, achieving a mean F1 score of 0.72958 across test images. This project contributes to medical image analysis and assists in accurate diagnosis and treatment planning for brain tumor patients.",
    image: "/images/projects/1.png",
    tag: ["All", "Deep Learning"],
    gitUrl: "https://github.com/vishalpatil7860/Brain-Tumor-Segmentation-using-U-Net-based-Deep-Learning-Model/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Movie Recommendation System using Machine Leaarning",
    description: "This project implements a movie recommendation system using a dataset of movie metadata. It processes movie details to generate recommendations based on cosine similarity and provides an interactive UI with Streamlit for selecting movies and displaying recommendations.",
    image: "/images/projects/10.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/vishalpatil7860/Movie-Recommendation-System",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Retail Data-Driven Product Recommendation Engine",
    description: "Led the creation of a high-accuracy (98.34%) content-based recommendation system for e-commerce, leveraging Python, TensorFlow, and Keras, with advanced data preprocessing and serialization via scikit-learn and joblib, culminating in a robust Flask web application with an intuitive UI for superior product recommendation.",
    image: "/images/projects/2.png",
    tag: ["All", "Deep Learning"],
    gitUrl: "https://github.com/vishalpatil7860/Retail-Data-Driven-Product-Recommendation-Engine",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Netflix Content Analytics Dashboard using Tableau",
    description: "Leveraging Tableau, I engineered a dynamic dashboard to reveal Netflix's global content strategy and distilled a decade's worth of data to fuel aggressive content acquisition and production tactics. My analysis pinpointed viewer preferences across ratings, directing content diversity efforts and driving data-backed investments in high-performing genres.",
    image: "/images/projects/3.png",
    tag: ["All", "Data Visualization"],
    gitUrl: "https://github.com/vishalpatil7860/Netflix-Content-Analytics-Dashboard-using-Tableau/tree/main",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Keyword Extraction & Text Summarization using NLP",
    description: "Enhanced a text summarization algorithm for heightened precision by refining the dataset, applying term frequency and inverse document frequency metrics, and improving accuracy by selectively including the most relevant sentences, validated by a high ROGUE-1 score.",
    image: "/images/projects/4.png",
    tag: ["All", "NLP"],
    gitUrl: "https://github.com/vishalpatil7860/keyword-extraction-and-text-summarization-using-NLP",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ADAS Performance Metrics: A Power BI Dashboard",
    description: "Crafted an extensive Power BI dashboard for Advanced Driver-Assistance Systems (ADAS) analysis, integrating a suite of visualization tools such as gauges, scatter plots, and donut charts, alongside a Paytern chart for anomaly detection to bolster predictive analytics and road safety initiatives.",
    image: "/images/projects/5.png",
    tag: ["All", "Data Visualization"],
    gitUrl: "https://github.com/vishalpatil7860/ADAS-Performance-Metrics-A-Power-BI-Dashboard",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "OpenAI-Powered Document Search and Question-Answering System",
    description: "Engineered an OpenAI-driven search and Q&A system to query PDF documents, integrating pdfminer for text extraction, OpenAIEmbeddings for contextual understanding, and leveraging Chroma vector store with VectorDBQA that delivers precise responses to complex user inquiries.",
    image: "/images/projects/6.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/vishalpatil7860/OpenAI-Powered-Document-Search-and-Question-Answering-System",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Credit Card Fraud Detection using Big Data",
    description: "Conducted a comprehensive exploratory analysis on over 300K data points, uncovering pivotal patterns that contributed to a 97% classification accuracy, developed Decision Tree model with 5-fold cross-validation achieving over 95% accuracy, and performed feature engineering with an 80% accuracy in predictive outcomes.",
    image: "/images/projects/7.png",
    tag: ["All", "Big Data"],
    gitUrl: "https://github.com/vishalpatil7860/Credit-Card-Fraud-Detection-using-Big-Data",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "HR Analytics Dashboard",
    description: "Developed an interactive HR Analytics Dashboard in Tableau, offering real-time filtering by education, gender, and field, and employed a range of visualization techniques—including Heatmaps, Pie, Bar, and Lollipop Charts—to translate public HR data into transparent and accurate analytical insights.",
    image: "/images/projects/8.png",
    tag: ["All", "Data Visualization"],
    gitUrl: "https://github.com/vishalpatil7860/HR-Analytics-Dashboard-using-Tableau",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Heart Disease Classifier Using Machine Learning Model",
    description: "Implemented and tuned various machine learning classifiers, including Logistic Regression, KNN, and Random Forest, to build a predictive model for heart disease diagnosis with 88.5% accuracy, utilizing key health metrics and GridSearchCV for hyperparameter optimization.",
    image: "/images/projects/9.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/vishalpatil7860/heart-disease-classifier",
    previewUrl: "/",
  },
];

const uniqueTags = ["All", "Deep Learning", "Data Visualization", "NLP", "AI", "Big Data", "Machine Learning"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6 md:flex-nowrap">
        {uniqueTags.map((uniqueTag) => (
          <ProjectTag
            key={uniqueTag}
            onClick={() => handleTagChange(uniqueTag)}
            name={uniqueTag}
            isSelected={tag === uniqueTag}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;