"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/Project-data';
import { useRouter } from 'next/navigation';

const PortfolioPage = () => {
    
    const router = useRouter()
    const animationRef = useRef();
    const isInView = useInView(animationRef, { once: true });
    const [hoveredIndex, setHoveredIndex] = useState(null);



    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <>
            <section className='bg-slate-100'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,133.3C320,107,400,53,480,58.7C560,64,640,128,720,138.7C800,149,880,107,960,85.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

                <div className='md:-my-10 md:-mt-20 mt-0 -my-0'>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='dark-heading mb-2'>
                        Our Featured Project
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='text-para text-center w-full sm:w-2/3 mx-auto text-xl sm:mb-12 mb-6'>
                        Our Team has successfully delivered many products. We have worked across
                        multiple industries and used a diverse range of tech stack to bring our project to life
                    </motion.p>

                    <div className='custom-container p-2'>
                        <div ref={animationRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                            {projectsData?.map((project, index) => (
                                <Link
                                    href={`/portfolio/${project.id}`}
                                    key={project.id}
                                    className="flex flex-col items-center p-6"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <motion.div
                                        variants={cardVariants}
                                        initial="initial"
                                        animate={isInView ? "animate" : "initial"}
                                        transition={{ duration: 0.3, delay: index * 0.2 }}
                                        className="relative cursor-pointer"
                                    >
                                        <Image
                                            className="w-[80vw] h-[250px] bg-center object-cover sm:w-[400px]"
                                            src={project.images[0]}
                                            alt={project.title}
                                            width={300}
                                            height={300}
                                        />
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-85 flex flex-col justify-center items-center"
                                            >
                                                <h1 className="text-white text-2xl tracking-tight font-bold">{project.title}</h1>
                                                <p className="text-white text-lg text-center tracking-tight max-w-[350px] mt-1">
                                                    {project.description.length > 73
                                                        ? project.description.slice(0, 73) + "..."
                                                        : project.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>


                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,133.3C320,107,400,53,480,58.7C560,64,640,128,720,138.7C800,149,880,107,960,85.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            </section>
        </>
    );
};

export default PortfolioPage;
