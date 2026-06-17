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
        <div className="border border-gray-200 shadow-md p-6 rounded-xl w-full max-w-xl mx-auto">
            <form
                onSubmit={handleSendMessage}
                className="flex flex-col gap-5">

                <h2 className="text-xl font-semibold text-black">
                    Send a message
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm text-gray-700">
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
                                border border-gray-200
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black
                                transition
                                placeholder-gray-500
                            "
                        />
                    </div>

                    <div className="flex flex-col flex-1 w-full">
                        <label className="font-semibold text-sm text-gray-700">
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
                                border border-gray-200
                                rounded-md
                                px-3 py-2
                                text-sm
                                outline-none
                                focus:border-black
                                transition
                                placeholder-gray-500
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
                        name='message'
                        onChange={handleInput}
                        value={formData.message}
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
                            placeholder-gray-500
                        "
                    />
                </div>

                <button
                    disabled={loading}
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
