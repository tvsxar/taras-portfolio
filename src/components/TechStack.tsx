function TechStack() {
    const techs = [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "Firebase",
        "Tailwind CSS",
        "Jest",
        "Vitest",
        "Docker",
        "Git"
    ];

    return (
        <section className="py-10 border-t border-gray-200 bg-gray-50 dark:bg-[#1d1e22] dark:border-gray-50/30">
            <h3 className="text-center text-xs text-gray-500 mb-6 font-bold tracking-widest dark:text-gray-300">
                TECHNOLOGIES I WORK WITH
            </h3>

            <div className="overflow-hidden relative">

                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-32 md:w-48 bg-linear-to-r from-gray-50 dark:from-[#1d1e22] to-transparent z-10" />

                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-32 md:w-48 bg-linear-to-l from-gray-50 dark:from-[#1d1e22] to-transparent z-10" />

                <div className="flex w-max animate-scroll gap-8">
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200 bg-white dark:bg-[#16171a] font-medium border border-gray-200 dark:border-gray-50/30 rounded-md py-2 px-4 whitespace-nowrap"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-200" />
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default TechStack;
