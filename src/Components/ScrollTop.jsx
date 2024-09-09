"use client"

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 1200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed group sm:bottom-24 bottom-20 z-20 sm:right-5 right-3 px-4 py-2.5 rounded-full bg-[#f5f5f5] text-white hover:bg-redish duration-300 shadow-lg"
                >
                    <FontAwesomeIcon icon={faArrowUp} className='text-dark group-hover:text-white' />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
