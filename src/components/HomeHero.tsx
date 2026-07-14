import Link from 'next/link';
import Image from 'next/image';

import { Download, ArrowRight } from 'lucide-react';

function HomeHero() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">

                    <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:border-gray-500">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-black text-xs font-medium ml-2 dark:text-gray-300">
                            Available for work
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black leading-tight text-black dark:text-gray-100">
                        Hi, I'm Taras Poiatsyka
                    </h1>

                    <h2 className="text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-300">
                        Frontend & Fullstack Developer
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed dark:text-gray-300">
                        Building modern web applications with clean UI and great performance.
                        <br />
                        Frontend-focused Full-Stack Developer using React and Next.js.
                        <br />
                        Focused on creating scalable and user-friendly products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link href='/projects' className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-sm font-medium cursor-pointer dark:bg-gray-100 dark:text-black hover:dark:bg-gray-200">
                            View My Work
                            <ArrowRight size={16} />
                        </Link>

                        <a
                            href="/Fullstack-Developer-CV.pdf"
                            download
                            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition text-sm font-medium cursor-pointer dark:text-gray-100 hover:dark:text-gray-300 hover:dark:bg-transparent dark:border-gray-500 hover:dark:border-gray-400">
                            <Download size={16} />
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="p-3 border border-dashed border-gray-300 rounded-full dark:border-gray-500">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                                src="/avatar.jpg"
                                alt="Taras Poiatsyka"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomeHero;
