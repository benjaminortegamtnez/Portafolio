"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import DisenoCard from "./DisenoCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/frontend_store.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/benjaminortegamtnez/Pagina1-Design-Freelancer",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/blogdecafe.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/benjaminortegamtnez/Pagina3-BlogDeCafe",
    previewUrl: "https://pagina-blogdecafe.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/LCP.JPG",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Logotipos",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Diseño"],
    gitUrl: "/#diseno",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Carteles e Infografías",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Diseño"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fotografía",
    description: "Project 5 description",
    image: "/images/projects/Benjamin_foto.jpg",
    tag: ["Diseño"],
    gitUrl: "/#contact",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Diseño");
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
      <h2 className="text-center text-4xl font-bold text-[#FECA01] mt-4 mb-8 md:mb-12">
        Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        onClick={() => handleTagChange("Diseño")} 
        name="Diseño"
        isSelected={tag === "Diseño"}
      />
      <ProjectTag
        onClick={() => handleTagChange("Web")}  
        name="Full Stack"
        isSelected={tag === "Web"}
      />
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
           {project.tag.includes("Diseño") ? (
              <DisenoCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.gitUrl}
              />
            ) : (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;