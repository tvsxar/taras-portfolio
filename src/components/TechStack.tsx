function TechStack() {
    const techs = [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Tailwind",
        "GraphQL",
        "Docker",
        "Git",
        "Figma",
        "Vercel",
        "REST APIs"
    ];

    return (
        <section className="py-10 border-t border-gray-200 bg-gray-50">
            <h3 className="text-center text-xs text-gray-500 mb-6 font-bold tracking-widest">
                TECHNOLOGIES I WORK WITH
            </h3>

            <div className="overflow-hidden relative">

                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-32 md:w-48 bg-linear-to-r from-gray-50 to-transparent z-10" />

                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-32 md:w-48 bg-linear-to-l from-gray-50 to-transparent z-10" />

                <div className="flex w-max animate-scroll gap-8">
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-600 bg-white font-medium border border-gray-200 rounded-md py-2 px-4 whitespace-nowrap"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default TechStack;
