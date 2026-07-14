import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

function AboutHero() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">

                <div className="flex justify-center md:justify-start">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-50/30 shadow-sm">
                        <Image
                            src="/avatar.jpg"
                            alt="Taras Poiatsyka"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                    <div>
                        <h3 className="text-xs text-gray-500 font-bold tracking-widest dark:text-gray-300">
                            ABOUT ME
                        </h3>

                        <h1 className="text-xl md:text-3xl font-black leading-tight text-black dark:text-gray-100">
                            Taras Poiatsyka
                        </h1>

                        <h2 className="text-sm md:text-lg font-semibold text-gray-500 dark:text-gray-300">
                            Frontend & Fullstack Developer
                        </h2>
                    </div>

                    <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed dark:text-gray-300">
                        I build modern web applications focused on clean UI, performance, and usability.
                        My main focus is creating responsive and well-structured frontend interfaces that solve real user needs.
                    </p>

                    <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed dark:text-gray-300">
                        Currently, I’m improving my development skills by working on real projects and gaining practical experience.
                        I’m focusing on writing better code, understanding application architecture, and strengthening my problem-solving abilities as a developer.
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm dark:text-gray-300">
                            <MapPin size={16} />
                            <span>Bucharest, RO</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm dark:text-gray-300">
                            <Mail size={16} />
                            <span>tarasofficial82@gmail.com</span>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="mt-2 bg-black dark:bg-gray-100 text-white dark:text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-black/80 hover:dark:bg-gray-300 transition"
                    >
                        Get in touch
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default AboutHero;
