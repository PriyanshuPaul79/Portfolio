import { IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

export function FooterSocial() {
    return (
        <div className="mt-32 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8">
                {/* Replace with your logo */}
                <div className="text-lg font-bold text-gray-800 dark:text-white">Priyanshu</div>

                <div className="flex space-x-4">
                    {/* Twitter Link */}
                    <a href="https://x.com/S1nister79" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </a>

                
                    <a href=" https://www.linkedin.com/in/priyanshu-paul-77735524p"  target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                        <IconBrandLinkedin size={18} stroke={1.5} />
                    </a>

                    {/* Instagram Link (Replace with your profile URL) */}
                    <a href="https://www.instagram.com/priyanshu79__/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </a>
                </div>
            </div>
        </div>
    );
}
