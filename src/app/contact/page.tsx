import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';

function ContactsPage() {
    return (
        <div className="bg-white dark:bg-[#16171a]">
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-stretch">
                <div className="flex flex-col flex-1 w-full items-center md:items-start text-center md:text-left">
                    <div>
                        <h3 className="text-xs text-gray-500 dark:text-gray-300 font-bold tracking-widest">
                            CONTACT
                        </h3>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-gray-100 mt-2">
                            Let's work together
                        </h1>

                        <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-500 dark:text-gray-300 leading-relaxed">
                            Have a project in your mind or want to discuss an opportunity?
                            I'm always open to collaboration and new challenges.
                        </p>
                    </div>

                    <div className="
                        mt-8 flex flex-col gap-3 
                        w-full border-b border-gray-200 dark:border-gray-700 pb-8
                    ">
                        <ContactCard title="GitHub" />
                        <ContactCard title="LinkedIn" />
                        <ContactCard title="Email" />
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-black dark:text-gray-100 mb-2">
                            Available for
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                                Remote
                            </span>

                            <span className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                                Freelance
                            </span>

                            <span className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                                Contract
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:flex-1 flex justify-center md:justify-end items-stretch">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

export default ContactsPage;
