"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { easeInOut, motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ServicesSection = () => {

  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  const services = [

    {
      image: '/services/service1.png',
      title: 'Custom Software Development',
      description: 'We create numerous products for organizations large and small across a variety of different sectors'
    },
    {
      image: '/services/service2.png',
      title: 'Web Applications',
      description: 'We excel in delivering the best-suited web solutions as per the custom needs across varied industries'
    },
    {
      image: '/services/service3.png',
      title: 'Mobile Applications',
      description: 'We’ll help you envision the concept, user-experience, as well as building a world-class mobile app that fits the purpose'
    },
    {
      image: '/services/service4.png',
      title: 'Wordpress Website',
      description: 'Through our social media strategy consulting expertise, we can give life to your social media game, by aiming for the right target audience with engaging content.'
    },
    {
      image: '/services/service5.png',
      title: 'Shopify Store',
      description: 'Through our social media strategy consulting expertise, we can give life to your social media game, by aiming for the right target audience with engaging content.'
    },
    {
      image: '/services/service6.png',
      title: 'Al/ML',
      description: 'We provide customized predictive analytics, automated process optimization, and personalized customer experiences. Let us transform your business with cutting-edge technology designed to meet your unique needs'
    },
    {
      image: '/services/service7.png',
      title: 'Team Outsourcing',
      description: 'Hire one or multiple talented resources from our seasoned pool with the control over daily tasks management as per business demands'
    },

    {
      image: '/services/service8.png',
      title: 'Marketing and Advertisment',
      description: 'Through our social media strategy consulting expertise, we can give life to your social media game, by aiming for the right target audience with engaging content.'
    },
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className='custom-container p-2 sm:my-14 my-6'>

      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='dark-heading mt-10 mb-4'>
          Services we offer
        </h1>

        <p className='text-para text-center w-full sm:w-2/3 mx-auto mb-10 text-xl'>
          Light years ahead of our competitors, FalCoQ Technologies offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.
        </p>
      </motion.div>

      <div ref={animationRef} className="flex flex-wrap justify-center gap-4 md:gap-y-8">

        {services.map((item, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={index}
            className="bg-white font-semibold flex flex-col text-center rounded-lg shadow-lg px-4 duration-200 hover:border overflow-hidden py-10 w-[90%] sm:w-[40%] md:w-[40%] lg:w-[22%]"
          >
            <div className="flex flex-col items-center h-full">
              <Image className="mb-3 w-20 h-20 " src={item.image} alt={item.title} width={100} height={100} />
              <h1 className="text-lg text-dark cursor-pointer mt-2">{item.title}</h1>

              {/* <p className="text-para mt-2">{item.description}</p> */}


            </div>
          </motion.div>
        ))}


      </div>
    </div>


  );
};

export default ServicesSection;





