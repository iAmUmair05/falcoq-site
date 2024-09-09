"use client"


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import whatsapp from "../../public/whatsapp.png"

const WhatsAppIcon = () => {

    const handleClick = () => {
        const url = `https://wa.me/message/JLK2JPKKERO7I1`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed z-20 bottom-4 sm:bottom-8 sm:right-5 right-2"
        >
            <Image src={whatsapp} width={100} height={100} alt='whatsapp' className='w-[60px] hover:scale-110 duration-200' />
        </button>
    );
};

export default WhatsAppIcon;
