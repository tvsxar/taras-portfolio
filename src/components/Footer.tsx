function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-400 dark:bg-[#16171a] dark:text-gray-200 dark:border-gray-50/30">
            <div className="max-w-6xl mx-auto py-8 px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-300 dark:border-gray-400 pb-6">
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-bold text-lg text-black dark:text-gray-100">
                            Taras Poiatsyka
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            Software Engineer
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a
                            href="https://github.com/tvsxar"
                            className="hover:text-cyan-500 text-gray-500 dark:text-gray-300 transition-all hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/poiatsyka/"
                            className="hover:text-cyan-500 text-gray-500 dark:text-gray-300 transition-all hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <p className="text-gray-400 dark:text-gray-300 text-xs mt-8 text-center mb-8">
                    © {new Date().getFullYear()} Taras Poiatsyka. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
