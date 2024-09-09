"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {

  const technologies = [
    { name: 'Angular', logoSrc: '/angular.png' },
    { name: 'React', logoSrc: '/react.png' },
    { name: 'Vue', logoSrc: '/vue.png' },
    { name: 'Node', logoSrc: '/node.png' },
    { name: 'Python', logoSrc: '/python.png' },
    { name: 'Django', logoSrc: '/django.png' },

    { name: 'Android', logoSrc: '/android.png' },
    { name: 'Azure', logoSrc: '/azure.png' },
    { name: 'Apple', logoSrc: '/apple.png' },
    { name: 'Sap', logoSrc: '/sap.png' },
    { name: 'Ocean', logoSrc: '/ocean.png' },
    { name: 'Net', logoSrc: '/net.png' },

    { name: 'Php', logoSrc: '/php.png' },
    { name: 'Flutter', logoSrc: '/flutter.png' },
    { name: 'Sql', logoSrc: '/sql.png' },
    { name: 'Laraval', logoSrc: '/laraval.png' },
    { name: 'Javascript', logoSrc: '/javascript.png' },
    { name: 'Post', logoSrc: '/post.png' },
  ];

  return (
    <>
      <div className='custom-container p-2 sm:-mt-20 mt-0'>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className='dark-heading mt-10 mb-4'>Technologies we know</h1>

          <p className='text-para mb-10 text-center'>Technologies That Will Move You To The Top</p>

        </motion.div>

        <div className="flex justify-center items-center flex-wrap gap-x-16 sm:gap-x-28 sm:gap-y-10 gap-y-10">
          {technologies.map((tech, index) => (
            <div key={index} className="w-24 h-24">
              <Image src={tech.logoSrc} alt={tech.name} width={250} height={250} className="w-full h-full object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-150 cursor-pointer" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Technologies;
