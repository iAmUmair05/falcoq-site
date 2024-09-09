"use client"

import React from 'react';
import falcoqLogo from "../../public/falcoq-logo2.png"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faDribbbleSquare, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900">

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}

        className='py-8 md:py-16 '>

        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-content-center md:px-0 px-6">


          <div className='flex flex-col items-center'>
            <Image src={falcoqLogo} alt="logo" width={100} height={100} className='w-[100px] h-[100px] justify-selft-start' />

            <h1 className=' font-bold text-redish leading-tight'>FalCoQ</h1>
            <p className='text-gray-300 text-sm tracking-tighter'>Software Development Company</p>

          </div>

          <div className="mt-4 md:mt-0">
            <strong className="font-medium text-redish">Company</strong>
            <nav className="flex flex-col mt-2 space-y-2 text-sm text-para">
              <Link className="hover:opacity-75 cursor-pointer" href="/">Home</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="/services">Services</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="/portfolio">Portfolio</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="/testimonial">Testimonial</Link>
            </nav>
          </div>

          <div className="mt-4 md:mt-0">
            <strong className="font-medium text-redish">Services</strong>
            <nav className="flex flex-col mt-2 space-y-2 text-sm text-para">
              <Link className="hover:opacity-75 cursor-pointer" href="/contact">Contact</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="/about">About</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="mailto:careers@falcoq.tech">Careers</Link>
              <Link className="hover:opacity-75 cursor-pointer" href="/">Privacy Policy</Link>
            </nav>
          </div>

          <div className="mt-4 md:mt-0">
            <strong className="font-medium text-redish">Follow Us</strong>
            <div className="flex mt-2 space-x-6 text-para">

            <Link href="https://www.linkedin.com/company/falcoq-technologies" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='cursor-pointer hover:scale-110 duration-200' />
              </Link>

              <Link href="https://www.facebook.com/profile.php?id=61558920234486" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='cursor-pointer hover:scale-110 duration-200' />
              </Link>

              <Link href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='cursor-pointer hover:scale-110 duration-200' />
              </Link>

              <Link href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='cursor-pointer hover:scale-110 duration-200' />
              </Link>


            </div>
          </div>

        </div>

      </motion.div>

      <div className='custom-container'>

        <hr className='opacity-15' />


        <p className='text-center text-gray-600 py-8'>&copy; Falcoq.com 2024 All rights reserved</p>

      </div>


    </footer>
  );
};

export default Footer;
