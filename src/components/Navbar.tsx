'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sun, Menu, X } from 'lucide-react';

function Navbar() {
    const pathname = usePathname();
    const current = pathname === '/' ? 'home' : pathname.slice(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    }

    const handleChangeTheme = () => {
        document.documentElement.classList.toggle('dark');
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div className="border-b border-gray-200 bg-white shadow-md md:bg-white/20 backdrop-blur-sm sticky top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6 relative z-30">

                <div className="flex items-center gap-2">
                    <div className="text-white text-md py-1 px-1.5 bg-black rounded-md font-semibold">
                        TP
                    </div>

                    <p className="text-md font-semibold text-black">
                        Taras Poiatsyka
                    </p>
                </div>

                <div className="flex items-center md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="cursor-pointer text-gray-700 hover:text-black transition-colors md:hidden">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    <div
                        ref={menuRef}
                        className={`
                            absolute top-full left-0 w-full border-b border-gray-200/60 bg-white
                            shadow-lg z-20 animate-in fade-in slide-in-from-top-2 duration-150
                            ${isMobileMenuOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                            }
                        `}
                    >
                        <ul className="flex flex-col items-start gap-2 p-4">
                            <li className={
                                current === 'home'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-md font-medium px-3 py-1 w-full">Home</Link>
                            </li>

                            <li className={
                                current === 'about'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-md font-medium px-3 py-1 w-full">About</Link>
                            </li>

                            <li className={
                                current === 'projects'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link
                                    href="/projects"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-md font-medium px-3 py-1 w-full">Projects</Link>
                            </li>

                            <li className={
                                current === 'contact'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-md font-medium px-3 py-1 w-full">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <ul className="items-center gap-2 hidden md:flex">
                    <li className={
                        current === 'home'
                            ? 'bg-gray-300/20 backdrop-blur-sm text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-200/20 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/" className="block text-sm font-medium px-3 py-1">
                            Home
                        </Link>
                    </li>

                    <li className={
                        current === 'about'
                            ? 'bg-gray-300/20 backdrop-blur-sm text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-200/20 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/about" className="block text-sm font-medium px-3 py-1">
                            About
                        </Link>
                    </li>

                    <li className={
                        current === 'projects'
                            ? 'bg-gray-300/20 backdrop-blur-sm text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-200/20 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/projects" className="block text-sm font-medium px-3 py-1">
                            Projects
                        </Link>
                    </li>

                    <li className={
                        current === 'contact'
                            ? 'bg-gray-300/20 backdrop-blur-sm text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-200/20 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/contact" className="block text-sm font-medium px-3 py-1">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="items-center hidden md:flex">
                    <button 
                    onClick={handleChangeTheme}
                    className="cursor-pointer text-gray-700 hover:text-black transition-colors">
                        <Sun size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
