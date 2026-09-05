function SkillsSection() {
    const skills = [
        {
            title: "Frontend",
            items: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Redux Toolkit",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "SCSS"
            ]
        },
        {
            title: "Backend & Data",
            items: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "GraphQL",
                "PostgreSQL",
                "SQL",
                "MongoDB",
                "Firebase"
            ]
        },
        {
            title: "Testing",
            items: [
                "Jest",
                "Vitest",
                "React Testing Library",
                "Supertest",
                "Unit Testing",
                "Integration Testing",
                "API Testing"
            ]
        },
        {
            title: "Tools & Practices",
            items: [
                "Git",
                "GitHub",
                "Docker",
                "Jira",
                "Jenkins",
                "CI/CD Workflows",
                "Agile/Scrum",
                "Code Reviews",
                "Postman"
            ]
        }
    ];

    return (
        <section className="py-10 border-t border-gray-200 bg-gray-50 dark:bg-[#1d1e22] dark:border-gray-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
                <h3 className="text-left text-xs text-gray-500 font-bold tracking-widest dark:text-gray-300">
                    EXPERTISE
                </h3>

                <h2 className="text-xl sm:text-2xl font-black mb-4 text-black dark:text-gray-100">
                    Skills & Technologies
                </h2>

                <div className="flex flex-col">
                    {skills.map((group, index) => (
                        <div key={group.title}>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-5">
                                <div className="text-sm font-semibold text-gray-700 shrink-0 dark:text-gray-100">
                                    {group.title}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs font-medium text-gray-600 dark:text-white bg-gray-50 dark:bg-[#1d1e22] border border-gray-200 dark:border-gray-500 rounded-full px-3 py-1 hover:bg-gray-100 hover:dark:bg-gray-500 transition"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {index !== skills.length - 1 && (
                                <div className="h-px bg-gray-200 dark:bg-gray-600" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default SkillsSection;
