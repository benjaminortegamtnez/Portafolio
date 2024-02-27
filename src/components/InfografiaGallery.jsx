"use client";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const InfografiaGallery = () => {
  let data = [
    {
      id: 1,
      imagSrc: "/images/infografias/infografia_1.jpg",
      title: "Infografía",
      description: "Formato digital - Formato impreso: 90 cm x 120 cm",
      herramienta: ["/images/IconosHerramientas/ilustrador.png"],
    },
    {
      id: 2,
      imagSrc: "/images/infografias/infografia_2.jpg",
      title: "Póster",
      description: "Formato digital - Formato impreso: 60 cm x 90 cm",
      herramienta: [
        "/images/IconosHerramientas/ilustrador.png",
        "/images/IconosHerramientas/photoshop.png",
      ],
    },
    {
      id: 3,
      imagSrc: "/images/infografias/infografia_4.png",
      title: "Infografía",
      description: "Formato digital - Formato impreso: 27.9 cm x 43.2 cm",
      herramienta: "/images/IconosHerramientas/ilustrador.png",
    },
    {
      id: 4,
      imagSrc: "/images/infografias/infografia_3.png",
      title: "Infografía",
      description: "Formato y distribución digital.",
      herramienta: [
        "/images/IconosHerramientas/ilustrador.png",
        "/images/IconosHerramientas/photoshop.png",
      ],
    },
    {
      id: 5,
      imagSrc: "/images/infografias/infografia_5.jpg",
      title: "Cartel",
      description: "Formato y distribución digital.",
      herramienta: [
        "/images/IconosHerramientas/ilustrador.png",
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

  // boton para volver al menu de diseño
  

  return (
    <section id="galleryInfo">
      <div className="relative px-6 py-20 md:py-20">
        <div className="block max-m-5xl mx-auto">
          <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
            Infografías, Póster y Carteles.
          </h2>
          <p className="text-base lg:text-lg text-white md:mb-8">
          Cada diseño es una expresión única de creatividad y comunicación visual. Desde infografías que comunican datos complejos hasta carteles que cuentan historias visuales.
          </p>
        </div>
        <div className="md:grid md:grid-cols-7">
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
          <div className="md:col-span-2"></div>
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
        <div className="flex items-center justify-center mt-28 ">
          <Link href="/#projects">
            <div className="rounded-full border-2 px-6 py-3 text-xl cursor-pointer text-white hover:text-[#FECA01] hover:border-[#FECA01]">
              Menu Diseño
            </div>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default InfografiaGallery;
    