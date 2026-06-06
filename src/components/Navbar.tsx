'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sun, Menu, X } from 'lucide-react';

function Navbar() {
    const pathname = usePathname();
    const current = pathname === '/' ? 'home' : pathname.slice(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    }

    return (
        <div className="border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6 relative">

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
                        className={`
                            absolute top-full left-0 w-full bg-white shadow-md z-10
                            transition-all duration-200 ease-out
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
                                <Link href="/" className="block text-md font-medium px-3 py-1 w-full">Home</Link>
                            </li>

                            <li className={
                                current === 'about'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link href="/about" className="block text-md font-medium px-3 py-1 w-full">About</Link>
                            </li>

                            <li className={
                                current === 'projects'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link href="/projects" className="block text-md font-medium px-3 py-1 w-full">Projects</Link>
                            </li>

                            <li className={
                                current === 'contacts'
                                    ? 'bg-gray-100 text-black rounded-md w-full'
                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150 w-full'
                            }>
                                <Link href="/contacts" className="block text-md font-medium px-3 py-1 w-full">Contacts</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <ul className="items-center gap-2 hidden md:flex">
                    <li className={
                        current === 'home'
                            ? 'bg-gray-100 text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/" className="block text-sm font-medium px-3 py-1">
                            Home
                        </Link>
                    </li>

                    <li className={
                        current === 'about'
                            ? 'bg-gray-100 text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/about" className="block text-sm font-medium px-3 py-1">
                            About
                        </Link>
                    </li>

                    <li className={
                        current === 'projects'
                            ? 'bg-gray-100 text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/projects" className="block text-sm font-medium px-3 py-1">
                            Projects
                        </Link>
                    </li>

                    <li className={
                        current === 'contacts'
                            ? 'bg-gray-100 text-black rounded-md'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-150'
                    }>
                        <Link href="/contacts" className="block text-sm font-medium px-3 py-1">
                            Contacts
                        </Link>
                    </li>
                </ul>

                <div className="items-center hidden md:flex">
                    <button className="cursor-pointer text-gray-700 hover:text-black transition-colors">
                        <Sun size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
