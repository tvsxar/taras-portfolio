function SkillsSection() {
    const skills = [
        {
            title: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "SCSS"]
        },
        {
            title: "Backend",
            items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            title: "APIs & Architecture",
            items: ["REST", "GraphQL", "JWT"]
        },
        {
            title: "Tools",
            items: ["Git", "Docker", "Vercel", "Figma"]
        }
    ];

    return (
        <section className="py-10 border-t border-gray-200 bg-gray-50 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
                <h3 className="text-left text-xs text-gray-500 font-bold tracking-widest">
                    EXPERTISE
                </h3>

                <h2 className="text-xl sm:text-2xl font-black mb-4 text-black">
                    Skills & Technologies
                </h2>

                <div className="flex flex-col">
                    {skills.map((group, index) => (
                        <div key={group.title}>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-5">
                                <div className="text-sm font-semibold text-gray-700 shrink-0">
                                    {group.title}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100 transition"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {index !== skills.length - 1 && (
                                <div className="h-px bg-gray-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default SkillsSection;
