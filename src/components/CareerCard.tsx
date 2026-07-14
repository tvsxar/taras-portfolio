import { Store, MapPin, Calendar } from 'lucide-react';

interface CareerCardProps {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    techs: string[];
}

function CareerCard({
    title,
    company,
    duration,
    location,
    description,
    techs,
}: CareerCardProps) {
    return (
        <div
            className="
                group
                w-full
                rounded-xl
                border border-gray-200 dark:border-gray-50/30
                bg-white dark:bg-[#16171a]

                p-4 sm:p-5 md:p-6

                transition-all duration-200
                hover:-translate-y-1
                hover:shadow-md
            "
        >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">

                <div className="space-y-1">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                        {title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                        <Store size={13} className="shrink-0" />
                        <span className="font-medium">{company}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-300 shrink-0">

                    <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="shrink-0" />
                        <span className="font-medium">{duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="shrink-0" />
                        <span className="font-medium">{location}</span>
                    </div>

                </div>
            </div>

            <p className="
                text-xs sm:text-sm
                text-gray-500 dark:text-gray-300
                leading-relaxed
                mb-3 sm:mb-4
            ">
                {description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {techs.map((tech) => (
                    <span
                        key={tech}
                        className="
                            text-[11px] sm:text-xs
                            font-medium
                            text-gray-600 dark:text-gray-200
                            bg-gray-50 dark:bg-[#1d1e22]
                            border border-gray-200 dark:border-gray-50/30
                            rounded-full
                            px-2 sm:px-3
                            py-0.5 sm:py-1
                            hover:bg-gray-100 dark:hover:bg-gray-500
                            transition
                        "
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CareerCard;
