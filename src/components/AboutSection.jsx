"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#FECA01]">
        <li>Creativo.</li>
        <li>Trabajo en equipo.</li>
        <li>Pensamiento crítico.</li>
        <li>Rápido Aprendizaje.</li>
        <li>Proactividad.</li>
        <li>Capacidad de Adaptación.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#FECA01]">
        <li className="mt-3">Certificación Java FullStack Developer.</li>
        <div>
          <p className="text-white">Bootcamp en Desarrollo Java Full Stack - Generation México.</p>
        </div>
        
        <li className="mt-3">Licenciatura en Diseño.</li>
        <div>
          <p className="text-white">Universidad Autónoma Metropolitana - Unidad Cuajimalpa.</p>
        </div>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#FECA01]">
        <li className="mt-3">Certificación Java FullStack Developer.</li>
        <div>
          <Image 
            className="mt-2 rounded" src="/images/certificado.png" 
            alt="Imagén de certificado" 
            width={200} 
            height={200}
            layout="responsive" 
          />
        </div>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          className="hidden md:block" 
          src="/images/mi7.png" 
          alt="fotografía personalizada" 
          width={400} 
          height={400} 
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#A37D04] via-[#FECA01] to-[#FFD757]">Sobre mí</h2>
          <p className="sm:text-base text-sm lg:text-lg">
          Soy un Diseñador Integral con experiencia en soluciones personalizadas. Mi enfoque se centra en comprender las necesidades específicas de los clientes y transformar esas ideas en propuestas visualmente atractivas y funcionalmente efectivas. Además, cuento con certificación en desarrollo Full Stack. Esta combinación de habilidades me permite ofrecer soluciones creativas y técnicas, abordando de manera integral los desafíos del diseño y del desarrollo.
          </p>
          <div className="flex flex-row justify-start mt-8 sm:text-base text-sm">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificado{" "}
            </TabButton>
          </div>
          <div className="mt-4 sm:text-base text-sm">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
