import { GitBranch, Link as LinkIcon, Mail } from 'lucide-react';

interface ContactCardProps {
    title: string;
}

function ContactCard({ title }: ContactCardProps) {
    return (
        <div
            className="
                group w-full
                rounded-xl border border-gray-200 bg-white
                p-4 sm:p-5
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-md
            "
        >
            <div className="flex items-center gap-3">

                <div className="p-2 rounded-lg bg-gray-100">
                    {title === 'GitHub' && <GitBranch size={16} className="text-gray-600" />}
                    {title === 'LinkedIn' && <LinkIcon size={16} className="text-gray-600" />}
                    {title === 'Email' && <Mail size={16} className="text-gray-600" />}
                </div>

                <div className="flex flex-col items-start">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                        {title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-500">
                        {title === 'GitHub'
                            ? '@tvsxar'
                            : title === 'LinkedIn'
                                ? 'in/poiatsyka'
                                : 'tarasofficial82@gmail.com'}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ContactCard;
