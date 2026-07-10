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
                rounded-xl border border-gray-200 bg-white dark:border-gray-50/30 dark:bg-[#16171a]
                p-4 sm:p-5 relative
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-md
            "
        >
            <Wrapper
                href={title !== 'Email' ? data[title].value : undefined}
                className="flex items-center gap-3">

                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1d1e22]">
                    {title === 'GitHub' && <GitBranch size={16} className="text-gray-600 dark:text-gray-200" />}
                    {title === 'LinkedIn' && <LinkIcon size={16} className="text-gray-600 dark:text-gray-200" />}
                    {title === 'Email' && <Mail size={16} className="text-gray-600 dark:text-gray-200" />}
                </div>

                <div className="flex flex-col items-start">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                        {title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                        {title === 'GitHub'
                            ? '@tvsxar'
                            : title === 'LinkedIn'
                                ? 'in/poiatsyka'
                                : 'tarasofficial82@gmail.com'}
                    </p>
                </div>
            </Wrapper>

            {copied && title === 'Email' && (
                <div className="absolute bottom-2 right-2 bg-black dark:bg-gray-200 text-white dark:text-black px-3 py-1 rounded-md text-xs">
                    Copied!
                </div>
            )}
        </div>
    );
}

export default ContactCard;
