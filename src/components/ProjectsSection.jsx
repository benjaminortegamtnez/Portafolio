"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import DisenoCard from "./DisenoCard";
import DisenoLogoCards from "./DisenoLogoCards";
import InfografiaGallery from "./InfografiaGallery";
import RedesSociales from "./RedesSociales";
import MaquetaGallery from "./MaquetaGallery";
import FotoProducto from "./FotoProducto";

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
    previewUrl: "https://benjamin-portafoliio.vercel.app/",
  },
  {
    id: 5,
    title: "Logotipos",
    description: "Diseños finales de logotipos.",
    image: "/images/projects/logos.JPG",
    tag: ["Diseño"],
    gitUrl: "/#logo",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Carteles e Infografías",
    description: "Comunicación visual.",
    image: "/images/projects/infografia-01.jpg",
    tag: ["Diseño"],
    gitUrl: "/#galleryInfo",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Diseñador Gráfico en CUDI",
    description: "Diseño de imágenes para difusión en medios digitales.",
    image: "/images/projects/4.png",
    tag: ["Diseño"],
    gitUrl: "/#redes",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Diseño de Maqueta Web - DiNaRe",
    description: "Diseño de imágenes para difusión en medios digitales.",
    image: "/images/projects/maqueta.png",
    tag: ["Diseño"],
    gitUrl: "/#maqueta",
    previewUrl: "/#maqueta",
  },
  {
    id: 9,
    title: "Fotografía de Producto",
    description: "Fotografía Profesional y Edición en Adobe Photoshop.",
    image: "/images/projects/MAY_3.jpg",
    tag: ["Diseño"],
    gitUrl: "/#producto",
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
    } else if (gitUrl === "/#galleryInfo") {
      setSelectedComponent("DisenoInfoGallery");
    } else if (gitUrl === "/#redes") {
      setSelectedComponent("RedesSociales");
    } else if (gitUrl === "/#maqueta") {
      setSelectedComponent("MaquetaWeb");
    } else if (gitUrl === "/#producto") {
      setSelectedComponent("FotoProducto");
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
      <div>
      {/* Renderizar el componente específico solo una vez */}
      {selectedComponent === "DisenoLogoCards" && (
        <DisenoLogoCards />
      )}
      {selectedComponent === "DisenoInfoGallery" && (
        <InfografiaGallery />
      )}
      {selectedComponent === "RedesSociales" && (
        <RedesSociales />
      )}
      {selectedComponent === "MaquetaWeb" && (
        <MaquetaGallery />
      )}
      {selectedComponent === "FotoProducto" && (
        <FotoProducto />
      )}
      </div>
    </section> 
  );
};

export default ProjectsSection;