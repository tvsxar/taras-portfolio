'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun } from 'lucide-react';

function Navbar() {
    const pathname = usePathname();
    const current = pathname === '/' ? 'home' : pathname.slice(1);

    return (
        <div className="border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6">

                <div className="flex items-center gap-2">
                    <div className="text-white text-md py-1 px-1.5 bg-black rounded-md font-semibold">
                        TP
                    </div>

                    <p className="text-md font-semibold text-black">
                        Taras Poiatsyka
                    </p>
                </div>

                <ul className="flex items-center gap-2">
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

                <div className="flex items-center">
                    <button className="cursor-pointer text-gray-700 hover:text-black transition-colors">
                        <Sun size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
