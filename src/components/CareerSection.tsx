import CareerCard from "./CareerCard";
import { careerData } from "../data/careerData";

function CareerSection() {
    return (
        <section className="py-10 border-t border-gray-200 dark:border-gray-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">

                <h3 className="text-xs text-gray-500 font-bold tracking-widest dark:text-gray-300">
                    CAREER
                </h3>

                <h2 className="text-xl sm:text-2xl font-black mb-6 text-black dark:text-gray-100">
                    Work Experience
                </h2>

                <div className="relative">

                    <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

                    <div className="flex flex-col-reverse gap-6">
                        {careerData.map((item) => (
                            <div key={item.id} className="relative pl-8 sm:pl-10">

                                <div className="absolute left-0 top-6 sm:top-7 w-3 h-3 rounded-full bg-white dark:bg-[#1d1e22] border-2 border-gray-300 dark:border-gray-700" />

                                <CareerCard {...item} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CareerSection;
