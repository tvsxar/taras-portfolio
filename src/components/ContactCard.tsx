'use client';

import { GitBranch, Link as LinkIcon, Mail } from 'lucide-react';
import { useState } from 'react';

type ContactType = 'GitHub' | 'LinkedIn' | 'Email';

interface ContactCardProps {
    title: ContactType;
}

function ContactCard({ title }: ContactCardProps) {
    const [copied, setCopied] = useState(false);
    const data = {
        'GitHub': {
            value: 'https://github.com/tvsxar'
        },
        'LinkedIn': {
            value: 'https://www.linkedin.com/in/poiatsyka/'
        },
        'Email': {
            value: 'tarasofficial82@gmail.com'
        }
    };

    const Wrapper = title !== 'Email' ? 'a' : 'button';

    const handleEmailCopy = () => {
        if (title === 'Email') {
            navigator.clipboard.writeText(data[title].value);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 3000)
        }
    };

    return (
        <div
            onClick={handleEmailCopy}
            className="
                group w-full
                rounded-xl border border-gray-200 bg-white
                p-4 sm:p-5 relative
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-md
            "
        >
            <Wrapper
                href={title !== 'Email' ? data[title].value : undefined}
                className="flex items-center gap-3">

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
            </Wrapper>

            {copied && title === 'Email' && (
                <div className="absolute bottom-2 right-2 bg-black text-white px-3 py-1 rounded-md text-xs">
                    Copied!
                </div>
            )}
        </div>
    );
}

export default ContactCard;
