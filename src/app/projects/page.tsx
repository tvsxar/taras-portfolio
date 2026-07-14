import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="text-xl bg-white dark:bg-[#16171a]">
            <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                    <div>
                        <h3 className="text-xs text-gray-500 dark:text-gray-300 font-bold tracking-widest">
                            PORTFOLIO
                        </h3>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-gray-100">
                            All Projects
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-500 dark:text-gray-300 leading-relaxed">
                            A collection of projects I've built to showcase my skills in frontend
                            and full-stack development, including web applications, API integrations,
                            dashboards, and production-ready user interfaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 justify-items-center">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
