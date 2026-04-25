"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
     const pathname=usePathname()
     if(pathname.startsWith("/dashboard"))return <></>

    const [isOpen, setIsOpen] = useState(false);

    const Navlink = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Stories', href: '/stories' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                            BrandLogo
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {Navlink.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                <div className="px-4 py-3 bg-white shadow-lg space-y-2">
                    {Navlink.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="nav-link block"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;