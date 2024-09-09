"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import falcoqLogo from "../../public/falcoq-logo2.png"

import Image from 'next/image';

const Header = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const pathname = usePathname();

    const handleNavbarToggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            scrollY > 160 ? setNavColor(true) : setNavColor(false);
        });
    }, []);

    const closeMobileNavbar = () => {
        setMobileDrawerOpen(false);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Our Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Testimonial", path: "/testimonial" },
        { name: "About Us", path: "/about" },
    ];

    return (
        <>
            <div className={`fixed top-0 z-30 w-full ${navColor || mobileDrawerOpen ? "bg-slate-900 border-b border-gray-300 border-opacity-30 py-2 duration-200" : "py-6"}`}>
                <div className='flex justify-between items-center max-w-[1280px] px-3 mx-auto'>

                    <Link href="/" className='flex space-x-1.5 items-center'>
                        <Image src={falcoqLogo} alt='Logo' width={50} height={50} className='text-4xl rounded-full font-bold text-white' />
                        <div className='text-white'>
                            <p className='font-semibold'>FalCoQ</p>
                            <p className='font-thin lg:block hidden '>TECHNOLOGIES</p>
                        </div>
                    </Link>

                    <ul className={`md:flex hidden justify-end space-x-6 w-full cursor-pointer`}>
                        {navLinks.map(({ name, path }) => (
                            <Link key={name} href={path} onClick={closeMobileNavbar} className={`${path === pathname ? "border-b-2 border-spacing-2 border-redish duration-200 text-white" : "opacity-80 text-white"} font-xl hover:border-b-2 border-spacing-2 border-redish duration-00 `}>
                                {name}
                            </Link>
                        ))}
                        <li>
                            <Link href="/contact" onClick={closeMobileNavbar} className={`p-2 btn-redish hover:scale-110 ${pathname === "/contact" ? "opacity-100" : "opacity-80"}`}>
                                Get in touch
                            </Link>
                        </li>
                    </ul>
                    <div className="md:hidden flex flex-col justify-end">
                        <button onClick={handleNavbarToggle}>
                            {mobileDrawerOpen ? <FontAwesomeIcon icon={faXmark} className='text-white text-2xl' /> : <FontAwesomeIcon icon={faBars} className='text-white text-2xl' />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <ul className={`md:hidden duration-300 z-20 text-white w-full h-screen pt-8 fixed flex  items-center flex-col bg-slate-900 bg-opacity-75 top-[67px] ${mobileDrawerOpen ? 'right-[0%]' : 'right-[-100%]'}`}>
                        {navLinks.map(({ name, path }) => (
                            <Link key={name} href={path} onClick={closeMobileNavbar} className='p-2 font-xl text-white'>
                                {name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={closeMobileNavbar} className='p-2 mt-2 btn-redish'>
                            Get in touch
                        </Link>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Header;
