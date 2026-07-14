import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

import { projects } from '../data/projects';

function HomeProjects() {
    return (
        <section className="border-t border-gray-200 w-full dark:border-gray-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h3 className="text-xs text-gray-500 font-bold tracking-widest dark:text-gray-300">
                            FEATURED WORK
                        </h3>

                        <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-gray-100">
                            Projects I've built
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="flex items-center gap-2 font-bold text-sm text-black hover:underline w-fit dark:text-gray-100"
                    >
                        View all projects
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 justify-items-center">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HomeProjects;
