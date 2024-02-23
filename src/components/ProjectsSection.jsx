"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import DisenoCard from "./DisenoCard";
import DisenoLogoCards from "./DisenoLogoCards";
import DisenoInfografiaCard from "./DisenoInfografiaCard";

const projectsData = [
  {
    id: 1,
    title: "FrontEnd Store",
    description: "Responsive - Proyecto 1 - HTML5, CSS3",
    image: "/images/projects/frontend_store.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/benjaminortegamtnez/Pagina1-Design-Freelancer",
    previewUrl: "https://pagina-frontend-store.netlify.app/",
  },
  {
    id: 2,
    title: "Blog De Café",
    description: "Responsive - Proyecto 2 - HTML5, CSS3",
    image: "/images/projects/blogdecafe.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/benjaminortegamtnez/Pagina3-BlogDeCafe",
    previewUrl: "https://pagina-blogdecafe.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Laboratorio Clínico Poniente",
    description: "Responsive - Proyecto 3 - HTML5, CSS3, Bootstrap, JS, React, Vite, Java, MySQL",
    image: "/images/projects/LCP.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/LeonardoRosas92/laboratorio-poniente",
    previewUrl: "https://dev-laboratorio-clinico-poniente.netlify.app/",
  },
  {
    id: 4,
    title: "Portafolio Website",
    description: "Responsive - Proyecto 4 - HTML5, React, NextJS, Tailwind CSS",
    image: "/images/projects/portafolio.JPG",
    tag: ["Web"],
    gitUrl: "https://github.com/benjaminortegamtnez/Portafolio",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Logotipos",
    description: "Project 4 description",
    image: "/images/projects/logos.JPG",
    tag: ["Diseño"],
    gitUrl: "/#logo",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Carteles e Infografías",
    description: "Authentication and CRUD operations",
    image: "/images/projects/infografia-01.jpg",
    tag: ["Diseño"],
    gitUrl: "/#infografia",
    previewUrl: "/",
  },
  {
    id: 7,
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
  const [selectedComponent, setSelectedComponent] = useState(null); // Nuevo estado
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setSelectedComponent(null); // Limpiar el componente seleccionado al cambiar la etiqueta
  };

  const handleEyeIconClick = (gitUrl) => {
    // Establecer el componente seleccionado según el gitUrl
    if (gitUrl === "/#logo") {
      setSelectedComponent("DisenoLogoCards");
    } else if (gitUrl === "/#infografia") {
      setSelectedComponent("DisenoInfografiaCard");
    } else {
      setSelectedComponent(null);
    }
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
                  onEyeIconClick={() => handleEyeIconClick(project.gitUrl)}
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
      {/* Renderizar el componente específico solo una vez */}
      {selectedComponent === "DisenoLogoCards" && (
        <DisenoLogoCards />
      )}
      {selectedComponent === "DisenoInfografiaCard" && (
        <DisenoInfografiaCard />
      )}
    </section>
  );
};

export default ProjectsSection;