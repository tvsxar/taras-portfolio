'use client'

import { useState } from 'react';
import { Send } from 'lucide-react';

function ContactForm() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError('');
        setSuccess(false);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData })
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data?.error || "Something went wrong");
                return;
            }
            setSuccess(true);

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (err) {
            setError("Network error");
            console.error('Network error')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="border border-gray-200 dark:border-gray-50/30 shadow-md p-6 rounded-xl w-full max-w-xl mx-auto">
            <form
                onSubmit={handleSendMessage}
                className="flex flex-col gap-5">

                <h2 className="text-xl font-semibold text-black dark:text-white">
                    Send a message
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                            Name
                        </label>

                        <input
                            type="text"
                            name='name'
                            onChange={handleInput}
                            value={formData.name}
                            placeholder="Your name"
                            className="
                                w-full
                                border border-gray-200 dark:border-gray-50/30
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black dark:focus:border-gray-100
                                transition
                                placeholder-gray-500 dark:placeholder-gray-300
                            "
                        />
                    </div>

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            name='email'
                            onChange={handleInput}
                            value={formData.email}
                            placeholder="your@email.com"
                            className="
                                w-full
                                border border-gray-200 dark:border-gray-50/30
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black dark:focus:border-gray-100
                                transition
                               placeholder-gray-500 dark:placeholder-gray-300
                            "
                        />
                    </div>

                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Message
                    </label>

                    <textarea
                        placeholder="Tell me about your project..."
                        name='message'
                        onChange={handleInput}
                        value={formData.message}
                        className="
                            w-full
                            h-40 sm:h-48
                            resize-none
                            border border-gray-200 dark:border-gray-50/30
                            rounded-xl
                            px-3 py-3
                            text-sm
                            outline-none
                            transition
                            focus:border-black dark:focus:border-gray-100
                            placeholder-gray-500 dark:placeholder-gray-300
                        "
                    />
                </div>

                <button
                    disabled={loading}
                    className="
        flex items-center justify-center gap-3
        bg-black text-white dark:bg-gray-100 dark:text-black
        p-3 rounded-lg
        font-semibold
        cursor-pointer
        hover:bg-black/90 dark:hover:bg-gray-300
        active:scale-[0.99]
        transition
        w-full
        disabled:opacity-60
        disabled:cursor-not-allowed
    "
                >
                    {loading ? (
                        "Sending..."
                    ) : (
                        <>
                            <Send size={14} className="shrink-0" />
                            Send message
                        </>
                    )}
                </button>

                {error && (
                    <p className="text-sm text-red-500 mt-2">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="text-sm text-green-600 mt-2">
                        Message sent successfully!
                    </p>
                )}

            </form>
        </div>
    );
}

export default ContactForm;
