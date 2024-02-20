"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

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
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A37D04] via-[#FECA01] to-[#FFD757]">
              Hola, soy
            </span>
            <br></br>
            <TypeAnimation 
              sequence={[
                "Benjamín",
                1000,
                "Diseñador",
                1000,
                "Desarrollador",
                1000,
                "Full Stack",
                1000,
            ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Licenciatura en Diseño / Desarrollador FullStack
          </p>
          
          <div className="socials flex flex-row gap-2">
            <a 
              href="https://www.linkedin.com/in/benjamín-ortega-martínez" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mt-4 mr-1 hover:bg-[#292929] rounded-2xl">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </div>
            </a> 

            <a 
              href="https://github.com/benjaminortegamtnez" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mt-4 mr-1 hover:bg-[#292929] rounded-2xl">
                <Image src={GithubIcon} alt="Github Icon" />
              </div>
            </a>
            
            <a
              href="https://drive.google.com/drive/folders/19CWMq5dH6dWNusKF20M8W2CPwh7Ra34L?usp=drive_link"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-[30]  sm:w-fit rounded-full border-full border-2 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-[#292929] rounded-full px-5 py-2">
                Descarga CV
              </span>
            </a>
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
              src="/images/benjamin_c2.png"
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
