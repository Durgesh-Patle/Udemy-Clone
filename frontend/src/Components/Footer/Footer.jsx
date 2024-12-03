
import React from 'react';
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            {/* Top Section */}
            <div className="flex justify-center gap-80 container mx-auto px-4">
                <p className="text-center text-white font-medium mb-6">
                    Top companies choose <span className="text-purple-500">Udemy Business</span> to build in-demand career skills.
                </p>
                <div className="flex justify-center items-center space-x-8">
                    {/* Company logos */}
                    <img src="nasdaq-light.svg" alt="Nasdaq" className="h-7" />
                    <img src="volkswagen-light.svg" alt="Volkswagen" className="h-7" />
                    <img src="box-light.svg" alt="Box" className="h-7" />
                    <img src="netapp-light.svg" alt="NetApp" className="h-7" />
                    <img src="eventbrite-light.svg" alt="Eventbrite" className="h-7" />
                </div>
            </div>

            {/* Links Section */}
            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    <ul>
                        <li className="mb-2 cursor-pointer hover:text-white">Udemy Business</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Teach on Udemy</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Get the app</li>
                        <li className="mb-2 cursor-pointer hover:text-white">About us</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Contact us</li>
                    </ul>
                    <ul>
                        <li className="mb-2 cursor-pointer hover:text-white">Careers</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Blog</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Help and Support</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Affiliate</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Investors</li>
                    </ul>
                    <ul>
                        <li className="mb-2 cursor-pointer hover:text-white">Terms</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Privacy policy</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Cookie settings</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Sitemap</li>
                        <li className="mb-2 cursor-pointer hover:text-white">Accessibility statement</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                    <TbWorld className="text-xl" />
                    <button className="border border-gray-400 px-3 py-1 rounded-md hover:border-white">
                        English
                    </button>
                </div>
                <p className="mt-4 md:mt-0 text-gray-500">
                    © 2024 Udemy, Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

