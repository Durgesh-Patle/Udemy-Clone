import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo and Categories */}
                <div className="flex items-center gap-6">
                    <img
                        src="logo-udemy.svg"
                        alt="Udemy Logo"
                        className="h-8 cursor-pointer"
                    />
                    <p className="text-gray-700 font-medium cursor-pointer hover:text-gray-900">
                        Categories
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-8">
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Links and Icons */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-4">
                        <Link
                            to="/plans"
                            className="text-gray-700 font-medium hover:text-blue-600"
                        >
                            Plans & Pricing
                        </Link>
                        <Link
                            to="/business"
                            className="text-gray-700 font-medium hover:text-blue-600"
                        >
                            Udemy Business
                        </Link>
                        <Link
                            to="/teach"
                            className="text-gray-700 font-medium hover:text-blue-600"
                        >
                            Teach on Udemy
                        </Link>
                    </div>
                    <MdOutlineShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 border rounded-md font-medium text-gray-700 hover:text-white hover:bg-gray-800">
                            <Link to={'/login'}>
                                Login
                            </Link>
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                            <Link to={'/sign-up'}>
                                Sign up
                            </Link>
                        </button>
                        <TbWorld className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
