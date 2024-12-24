import React, { useEffect, useState, useRef } from "react";

const UserMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsMenuOpen(false);
        window.location.reload();
    };

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    };

    const userName = "Durgesh Patle";
    const userEmail = "dpatle090096@gmail.com";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mr-[28.8px]" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center space-x-2 p-2 border rounded-full hover:bg-gray-100"
                aria-expanded={isMenuOpen}
                aria-label="User menu"
            >
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                    {getInitials(userName)}
                </div>
                <div className="text-left">
                    <p className="text-sm font-semibold">{userName}</p>
                    <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
            </button>

            {isMenuOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50">
                    <ul className="flex flex-col divide-y divide-gray-200">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My learning</li>
                        <li className="px-4 py-2 flex justify-between hover:bg-gray-100 cursor-pointer">
                            <span>My cart</span>
                            <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">0</span>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlist</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Teach on Udemy</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notifications</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Payment methods</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Subscriptions</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Purchase history</li>
                        <li className="px-4 py-2 flex justify-between hover:bg-gray-100">
                            <span>Language</span>
                            <span className="text-gray-500">English 🌐</span>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit profile</li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Log out
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
