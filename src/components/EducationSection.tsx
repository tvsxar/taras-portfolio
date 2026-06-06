import { GraduationCap } from "lucide-react";

function EducationSection() {
    return (
        <section className="py-10 border-t border-gray-200 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">

                <h3 className="text-xs text-gray-500 font-bold tracking-widest">
                    BACKGROUND
                </h3>

                <h2 className="text-xl sm:text-2xl font-black mb-6 text-black">
                    Education
                </h2>

                <div
                    className="
                        group
                        w-full
                        rounded-xl
                        border border-gray-200
                        bg-white
                        p-4 sm:p-5 md:p-6
                        transition-all duration-200
                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

                        <div className="flex gap-4">
                            <div className="rounded-lg bg-gray-100 p-3 h-fit">
                                <GraduationCap
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>

                            <div>
                                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                    B.S. Computer Science
                                </h4>

                                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                    Odessa Polytechnic National University
                                </p>

                                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-3">
                                    Studied computer science with a focus on software
                                    development, algorithms, databases, and web
                                    technologies. Completed multiple academic and
                                    personal projects throughout the program.
                                </p>
                            </div>
                        </div>

                        <div className="text-xs sm:text-sm font-medium text-gray-500 shrink-0">
                            2021 – 2025
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default EducationSection;
