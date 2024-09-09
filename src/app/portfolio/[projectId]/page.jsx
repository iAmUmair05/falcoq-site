"use client";

import { projectsData } from '@/data/Project-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductDetail = ({ params }) => {
    const { projectId } = params;
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const project = projectsData?.find((p) => p.id === Number(projectId));

    const [selectedImg, setSelectedImg] = useState(project.images[0]);

    const handleSelectedImg = (index) => {
        setSelectedImg(project.images[index]);
    };        


    return (

        <div className='mb-4 sm:mb-8'>
            <Link
                href={project.url}
                target='_blank'
                key={project.id}
                className='relative cursor-pointer'
            >
                <div
                    onMouseEnter={() => setHoveredIndex(project.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative"
                >
                    <Image
                        src={selectedImg}
                        alt={project?.title}
                        width={1000}
                        height={1000}
                        className='w-[100vw] border-4 border-neutral-400 mix-blend-overlay object-cover bg-center h-[60vh] sm:h-[70vh]'
                    />

                    <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-80"></div>

                    {hoveredIndex === project.id && (
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-70 flex flex-col justify-center items-center">
                            <h1 className="text-white text-2xl tracking-tight font-bold">{project.title}</h1>
                            <p className="text-white">Click to view project</p>
                        </div>
                    )}
                </div>

            </Link>

            <div className='my-10 flex justify-center gap-4 flex-wrap items-center'>
                {project.images.slice(0, 6).map((image, index) => (
                    <div key={index} onClick={() => handleSelectedImg(index)}>
                        <Image
                            src={image}
                            alt={project?.title}
                            width={100}
                            height={100}
                            className={`border ${selectedImg === image ? ' border-2 rounded border-redish duration-200 p-0.5' : ''} w-[120px] h-[80px] object-cover bg-center cursor-pointer`}
                        />
                    </div>
                ))}
            </div>



            <div className='my-10'>
                <h1 className='dark-heading text-3xl sm:text-4xl py-10'>About Project</h1>
                <p className='text-slate-400 sm:w-[80vw] w-[90vw] mx-auto tracking-wide text-center'>
                    {project?.description}
                </p>
            </div>


            <div className='my-10'>
                <h1 className='dark-heading text-3xl sm:text-4xl py-10'>Challenges</h1>
                <p className='text-slate-400 sm:w-[80vw] w-[90vw] mx-auto tracking-wide text-center'>
                    {project?.challenge}
                </p>
            </div>

            <div className='w-full my-10'>
                <h1 className='dark-heading text-3xl sm:text-4xl py-10'>
                    Technologies
                </h1>

                <div className='w-[90vw] mx-auto flex gap-4 flex-wrap justify-center items-center'>
                    {project?.tools?.map((tag, i) => (
                        <React.Fragment key={i} className="flex gap-4">
                            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer bg-slate-50" key={i}>

                                <div className="h-full w-full rounded-lg border border-color bg-darkish shadow-none shadow-gray-50 group-hover:border-redish transition-all duration-500">
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <p className="text-redish text-sm sm:text-lg">
                                            {tag}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
