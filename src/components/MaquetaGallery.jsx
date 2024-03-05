"use client";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MaquetaGallery = () => {

    let data = [
        {
          id: 1,
          imagSrc: "/images/maqueta/1.jpg",
          title: "Menú de Navegación",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 2,
          imagSrc: "/images/maqueta/3PS.jpg",
          title: "Página de Inicio",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 3,
          imagSrc: "/images/maqueta/4PS.jpg",
          title: "Página de Descripción",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 4,
          imagSrc: "/images/maqueta/5PS.jpg",
          title: "Página de Búsqueda",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 5,
          imagSrc: "/images/maqueta/5_1PS.png",
          title: "Página de Búsqueda - Resultados de Búsqueda",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 6,
          imagSrc: "/images/maqueta/6PS.png",
          title: "Página de Estadísticas",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 7,
          imagSrc: "/images/maqueta/7PS.png",
          title: "Página de Registro",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 8,
          imagSrc: "/images/maqueta/8PS.jpg",
          title: "Página Intranet",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 9,
          imagSrc: "/images/maqueta/9PS.png",
          title: "Página para Administradores",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 10,
          imagSrc: "/images/maqueta/2PS.jpg",
          title: "Pie de página",
          description: "Formato Pantalla Grande, elaborado en Illustrator, solicitud del desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 11,
          imagSrc: "/images/maqueta/Especificaciones1.jpg",
          title: "Menú de Navegación",
          description: "Especificaciones solicitadas en Adobe Illustrator por el desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
        {
          id: 12,
          imagSrc: "/images/maqueta/Especificaciones.png",
          title: "Pie de página",
          description: "Especificaciones solicitadas en Adobe Illustrator por el desarrollador.",
          herramienta: "/images/IconosHerramientas/ilustrador.png",
        },
      ];

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imagSrc) => {
    setTempImgSrc(imagSrc);
    setModel(true);
    };

    const closeImage = () => {
    setModel(false);
    setTempImgSrc("");
    };

    return (
        <section id="maqueta">
          <div className="relative px-6 py-20 md:py-20 ">
            <div className="block max-m-5xl mx-auto">
              <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
              DiNaRe - Maqueta Web
              </h2>
              <p className="sm:text-base text-sm lg:text-lg text-white md:mb-8">
              Durante mi servicio social en CUDI, como Diseñador Gráfico contribuí al proyecto DiNaRe, el nuevo servicio de REMERI dedicado a la visibilidad del acceso abierto en México. En este desafío, diseñé y desarrollé una propuesta integral para el sitio web de DiNaRe, un repositorio de contenido científico en el ámbito académico. Siguiendo cuidadosamente el mapa de especificaciones proporcionado por el cliente, creé los componentes visuales necesarios para una experiencia de usuario efectiva y atractiva.
              </p>
            </div>
            <div className="md:grid md:grid-cols-5">
              <div className={model ? "model open" : "model"}>
                <img
                  src={tempImgSrc}
                  alt="Imagen en pantalla completa"
                  className="w-full h-full object-contain"
                />
                <XMarkIcon
                  className="h-8 w-8 text-white absolute top-4 right-4 cursor-pointer hover:text-[#FECA01]"
                  onClick={closeImage}
                />
              </div>
              <div className="md:col-span-1"></div>
              <div className="gallery md:col-span-3 gap-8">
                {data.map((item, index) => (
                  <div
                    className="pics relative"
                    key={index}
                    onClick={() => getImg(item.imagSrc)}
                  >
                    <Image
                      className="cursor-pointer mt-12 transition-opacity duration-300 hover:opacity-80"
                      alt="Imagen de infografía realizada"
                      src={item.imagSrc}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                    <div className="info-container grid grid-cols-7">
                      <div className="col-span-6">
                        <h3 className="text-lg font-semibold text-[#FECA01] ml-4">{item.title}</h3>
                        <p className="text-sm text-gray-300 ml-4">{item.description}</p>
                      </div>
                      <div className="col-span-1 justify-end items-center ml-2">
                        {item.herramienta && (
                          Array.isArray(item.herramienta) ? (
                            item.herramienta.map((herramienta, index) => (
                              <Image
                                key={index}
                                src={herramienta}
                                alt={`Imagen en pantalla completa ${index + 1}`}
                                className={index > 0 ? "" : ""}
                                width={30}
                                height={30}
                              />
                            ))
                          ) : (
                            <Image
                              src={item.herramienta}
                              alt="Imagen en pantalla completa"
                              className=""
                              width={30}
                              height={30}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="credits-container mt-8">
              <h3 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
                Créditos
              </h3>
              <p className="sm:text-base text-sm lg:text-lg text-white">
                Al formar parte de la distinguida comunidad de CUDI durante mi servicio social, me enorgullece compartir que mi contribución se refleja en la sección de <a href="https://cudi.edu.mx/creditos" target="_blank" rel="noopener noreferrer" className="text-[#FECA01] underline">créditos del sitio web oficial de CUDI</a>. Aprecio profundamente la oportunidad de participar en proyectos significativos y colaborar a través de mi labor como Diseñador Gráfico.
              </p>
            </div>
            
            <div className="flex items-center justify-center mt-20">
              <Link href="/#projects">
                <div className="bg-[#0f0f0f] rounded-full border border-opacity-30 border-white px-6 py-3 text-xl cursor-pointer text-white hover:text-[#FECA01] hover:border-[#FECA01]">
                  Diseño
                </div>
              </Link>
            </div>

          </div>
          
        </section>
      );
    };

export default MaquetaGallery