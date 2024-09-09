"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {

  const router = useRouter()

  const unsplashImageUrls = [
    '/aboutPage.jpg',
    '/hero.jpg',
    '/hero2.jpg',
    '/hero3.jpg',
    '/hero4.jpg',
    '/hero5.jpg',
    '/hero6.jpg',
  ];

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 2500,
      }}

      // pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className}" style="background-color: #faa32f ;"></span>` }}

      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      {unsplashImageUrls.map((url, index) => (
        <SwiperSlide key={index}>

          <div className="relative h-screen overflow-hidden">

            <div className="absolute inset-0 bg-slate-950 opacity-80"></div>

            <div className="absolute inset-0 bg-cover bg-center py-12 w-full h-screen mix-blend-overlay" style={{ backgroundImage: `url(${url})` }}></div>

            <div className="container mx-auto p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">

              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center items-center h-screen mt-10"
              >
                <h1 className="text-5xl font-bold mb-6 text-white text-center">FalCoQ Technologies</h1>
                <p className="text-xl w-full sm:w-2/3 text-center">Transfer your ideas to great products and services. FalCoQ in offering full strategic project guidance throughout the entire software development life cycle, ensuring top-notch software solutions.</p>

                <div className='flex sm:gap-8 gap-3 sm:flex-row flex-col items-center mt-6'>

                  <motion.button onClick={() => router.push("/services")} transition={{ duration: 0.2 }} whileHover={{ scale: 1.20 }} className='btn-redish hover:scale-110'>Discover More</motion.button>
                  <motion.button onClick={() => router.push("/contact")} transition={{ duration: 0.2 }} whileHover={{ scale: 1.20 }} className=' py-2 px-5 border border-redish text-white rounded-full shadow-md duration-200 hover:scale-110'>Contact Us</motion.button>

                </div>
              </motion.div>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;

