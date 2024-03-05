"use client"
import 'swiper/css';
import 'swiper/css/effect-cards';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards} from 'swiper/modules';
import DisenoLogoCardsData from './DisenoLogoCardsData';
import Image from 'next/image';
import Link from "next/link";



const DisenoLogoCards = () => {

  return (
    <section id="logo">
    <div className="relative px-6 py-20 md:py-64">
      <div className="block max-m-5xl mx-auto md:grid md:grid-cols-2">
        <div>
        <h2 className="text-4xl font-bold mt-4 mb-8 md:mb-12 text-[#FECA01]">
          Logotipos
          <span className="block text-2xl text-white font-semibold">Desliza y observa los logotipos creados.</span>
        </h2>
        <p className="sm:text-base text-sm lg:text-lg text-white">
        Te invito a explorar los logotipos, desde símbolos impactantes hasta marcas de productos memorables.
          </p>
          </div>
        <div className="px-5 mt-5">
          <Swiper
            effect={"cards"}  // Corrige el nombre del efecto a "cards"
            grabCursor={true}
            modules={[EffectCards]}
          >
            {DisenoLogoCardsData.map((card) => (  // Corrige la sintaxis del mapeo
              <SwiperSlide key={card.id}>
                <Image src={card.image} alt={`Logotipo ${card.id}`} width="400" height="300" />
                {/* <h3 className="text-white text-center text-xl mt-2" style={{ background: '#000'}}> {card.title}</h3> */}
              </SwiperSlide>
            ))}
          </Swiper>
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

export default DisenoLogoCards;
