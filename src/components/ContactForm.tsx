import { Send } from 'lucide-react';

function ContactForm() {
    return (
        <div className="border border-gray-200 shadow-md p-6 rounded-xl w-full max-w-xl mx-auto">
            <form className="flex flex-col gap-5">

                <h2 className="text-xl font-semibold">
                    Send a message
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Your name"
                            className="
                                w-full
                                border border-gray-200
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black
                                transition
                            "
                        />
                    </div>

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="
                                w-full
                                border border-gray-200
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black
                                transition
                            "
                        />
                    </div>

                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">
                        Message
                    </label>

                    <textarea
                        placeholder="Tell me about your project..."
                        className="
                            w-full
                            h-40 sm:h-48
                            resize-none
                            border border-gray-200
                            rounded-xl
                            px-3 py-3
                            text-sm
                            outline-none
                            transition
                            focus:border-black
                            focus:ring-2 focus:ring-black/10
                        "
                    />
                </div>

                <button
                    className="
                        flex items-center justify-center gap-3
                        bg-black text-white
                        p-3 rounded-lg
                        font-semibold
                        cursor-pointer
                        hover:bg-black/90
                        active:scale-[0.99]
                        transition
                        w-full
                    "
                >
                    <Send size={14} className="shrink-0" />
                    Send message
                </button>

            </form>
        </div>
    );
}

export default ContactForm;
