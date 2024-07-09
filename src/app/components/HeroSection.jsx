"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Vishal",
                1000,
                "Data Scientist",
                1000,
                "ML Engineer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Link
              href="https://www.linkedin.com/in/vishaltpatil/" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-2"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                <FaLinkedin className="mr-2" />
                LinkedIn
              </span>
            </Link>
            <Link
              href="https://github.com/vishalpatil7860" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-2"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                <FaGithub className="mr-2" />
                GitHub
              </span>
            </Link>
            <Link
              href="/Vishal-Patil-Resume.pdf" target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-2"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center">
                <FaFilePdf className="mr-2" />
                Download CV
              </span>
            </Link>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/dp2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
