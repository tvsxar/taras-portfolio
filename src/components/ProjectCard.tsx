import Image from 'next/image';
import { Braces, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        link: string;
        code: string;
        techs: string[];
    }
}

function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, image, link, code, techs } = project;
    const visibleTechs = techs.slice(0, 4);
    const hiddenTechsCount = techs.length - visibleTechs.length;

    return (
        <div
            className="
                group
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                flex
                flex-col
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <div className="relative w-full h-40 sm:h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h4 className="text-base sm:text-lg font-bold text-black">
                    {title}
                </h4>

                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                    {visibleTechs.map((tech) => (
                        <span
                            key={tech}
                            className="
                                text-xs
                                font-semibold
                                text-gray-500
                                bg-gray-50
                                border
                                border-gray-200
                                rounded-lg
                                py-1
                                px-2
                                whitespace-nowrap
                            "
                        >
                            {tech}
                        </span>
                    ))}

                    {hiddenTechsCount > 0 && (
                        <span
                            className="
                                text-xs
                                font-semibold
                                text-gray-500
                                bg-gray-50
                                border
                                border-gray-200
                                rounded-lg
                                py-1
                                px-2
                                whitespace-nowrap
                            "
                        >
                            +{hiddenTechsCount}
                        </span>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 mt-auto pt-6">
                    <a
                        href={code}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            w-full
                            h-10
                            text-sm
                            font-semibold
                            text-black
                            border
                            border-gray-300
                            rounded-lg
                            hover:bg-gray-100
                            transition-colors
                        "
                    >
                        <Braces size={16} />
                        Code
                    </a>

                    <a
                        href={link}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            w-full
                            h-10
                            text-sm
                            font-semibold
                            text-white
                            bg-black
                            rounded-lg
                            hover:bg-black/80
                            transition-colors
                        "
                    >
                        <ArrowUpRight size={16} />
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
