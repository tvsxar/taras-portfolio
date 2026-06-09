import ContactCard from '@/components/ContactCard';
import ContactForm from '@/components/ContactForm';

function ContactsPage() {
    return (
        <div className="bg-white">
            <section className="
                max-w-6xl mx-auto px-6 
                py-16 md:py-24 
                flex flex-col md:flex-row 
                gap-10 md:gap-12 
                items-stretch
            ">
                <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                    <div>
                        <h3 className="text-xs text-gray-500 font-bold tracking-widest">
                            CONTACT
                        </h3>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mt-2">
                            Let's work together
                        </h1>

                        <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-500 leading-relaxed">
                            Have a project in your mind or want to discuss an opportunity?
                            I'm always open to collaboration and new challenges.
                        </p>
                    </div>

                    <div className="
                        mt-8 flex flex-col gap-3 
                        w-full border-b border-gray-200 pb-8
                    ">
                        <ContactCard title="GitHub" />
                        <ContactCard title="LinkedIn" />
                        <ContactCard title="Email" />
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-black mb-2">
                            Available for
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-600">
                                Remote
                            </span>

                            <span className="px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-600">
                                Freelance
                            </span>

                            <span className="px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-600">
                                Contract
                            </span>
                        </div>
                    </div>
                </div>

                <div className="
                    w-full 
                    md:flex-1 
                    flex 
                    justify-center md:justify-end
                ">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

export default ContactsPage;
