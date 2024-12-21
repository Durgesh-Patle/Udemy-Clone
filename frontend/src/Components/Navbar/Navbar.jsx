import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import UserMenu from './UserMenu';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const token = localStorage.getItem('token');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-6">
                    <Link to={'/'}>
                        <img
                            src="logo-udemy.svg"
                            alt="Udemy Logo"
                            className="h-8 cursor-pointer"
                        />
                    </Link>
                    <p className="text-gray-700 font-medium cursor-pointer hover:text-gray-900">
                        Categories
                    </p>
                </div>

                <div className="flex-1 mx-8">
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <Link
                        to="/pricing"
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
                        to="/teaching"
                        className="text-gray-700 font-medium hover:text-blue-600"
                    >
                        Teach on Udemy
                    </Link>
                    <Link to={'/carts'}> 
                        <MdOutlineShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
                    </Link>

                    {!token && (
                        <div className="flex items-center gap-3">
                            <Link to={'/api/login'}>
                                <button className="border border-zinc-600 rounded py-[8px] w-[80px] text-sm">Log in</button>
                            </Link>
                            <Link to={'/api/sign-up'}>
                                <button className="bg-[#2d2f31] w-[90px] rounded py-[8px] text-white text-sm">Sign up</button>
                            </Link>
                            <p className="bg-[#2d2f31] rounded p-[11px] text-white cursor-pointer">
                                <TbWorld className="text-xl font-semibold" />
                            </p>
                        </div>
                    )}

                    {token && (
                        <div className="flex items-center gap-5 ml-4">
                            <UserMenu />
                        </div>
                    )}
                </div>

                <div className="lg:hidden flex items-center">
                    <div
                        className="cursor-pointer text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </div>
                    <MdOutlineShoppingCart className="text-2xl text-zinc-700 cursor-pointer" />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="bg-white shadow-lg p-4 lg:hidden">
                    <Link to="/pricing" className="block py-2 text-gray-700 hover:text-blue-600">Plans & Pricing</Link>
                    <Link to="/business" className="block py-2 text-gray-700 hover:text-blue-600">Udemy Business</Link>
                    <Link to="/teaching" className="block py-2 text-gray-700 hover:text-blue-600">Teach on Udemy</Link>
                    {!token ? (
                        <>
                            <Link to={'/api/login'} className="block py-2 text-gray-700 hover:text-blue-600">Log in</Link>
                            <Link to={'/api/sign-up'} className="block py-2 text-gray-700 hover:text-blue-600">Sign up</Link>
                        </>
                    ) : (
                        <p className="py-2">
                            <UserMenu />
                        </p>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
