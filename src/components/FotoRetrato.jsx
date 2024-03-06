"use client";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const FotoRetrato = () => {

    let data = [
        {
          id: 1,
          imagSrc: "/images/retrato/1.jpg",
          title: "Plano Medio",
          description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
          id: 2,
          imagSrc: "/images/retrato/2.jpg",
          title: "Plano Americano",
          description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
          id: 3,
          imagSrc: "/images/retrato/3.jpg",
          title: "Plano Medio",
          description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
            id: 4,
            imagSrc: "/images/retrato/4.jpg",
            title: "Plano Medio",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 5,
            imagSrc: "/images/retrato/5.jpg",
            title: "Plano Americano",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 6,
            imagSrc: "/images/retrato/6.jpg",
            title: "Plano Medio",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 7,
            imagSrc: "/images/retrato/7.jpg",
            title: "Plano Medio",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 8,
            imagSrc: "/images/retrato/8.jpg",
            title: "Plano Americano",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 9,
            imagSrc: "/images/retrato/9.jpg",
            title: "Plano Americano",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 10,
            imagSrc: "/images/retrato/10.jpg",
            title: "Plano Entero",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 11,
            imagSrc: "/images/retrato/11.jpg",
            title: "Plano Americano",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 12,
            imagSrc: "/images/retrato/12.jpg",
            title: "Plano Americano",
            description: "Retrato Fotográfico y Retoque en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
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
        <section id="retrato">
          <div className="relative px-6 py-20 md:py-20 ">
            <div className="block max-m-5xl mx-auto">
              <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
              Fotografía de Retrato
              </h2>
              <p className="sm:text-base text-sm lg:text-lg text-white md:mb-8">
              Sesión fotográfica en MAY Tecnología Capilar. En esta sección, destacan colaboradores especializados en Cuidado del Cabello, Restauración Capilar, Tratamientos y Colorimetrías. A través de una sesión profesional y el uso de equipo fotográfico, como diseñador, capturé la autenticidad de cada individuo. El toque final de retoque en Adobe Photoshop resalta su profesionalismo y dedicación. Estas imágenes han sido utilizadas con impacto en publicidad, redes sociales y en momentos que requieren la proyección de su imagen de manera profesional. 
              </p>
            </div>
            <div className="md:grid md:grid-cols-3">
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
              
              <div className="gallery md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                  <div
                    className="pics relative"
                    key={index}
                    onClick={() => getImg(item.imagSrc)}
                  >
                    <Image
                      className="cursor-pointer mt-2 transition-opacity duration-300 hover:opacity-80"
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

export default FotoRetrato