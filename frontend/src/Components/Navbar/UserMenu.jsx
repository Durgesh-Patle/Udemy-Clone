import React, { useEffect, useState, useRef, useContext } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

const UserMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    let { cart } = useContext(Context);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
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

    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    const userRole = localStorage.getItem('userRole');

    // console.log(userEmail, "Emailllllll");

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
                <div className="absolute left-[-20%] mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                    <ul className="flex flex-col divide-y divide-gray-200">
                        {userRole === "Student" && (
                            <>
                                <Link to={'/'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My learning</Link>
                                <Link to={'/carts'} className="px-4 py-2 flex justify-between hover:bg-gray-100 cursor-pointer">
                                    My cart
                                </Link>
                                <Link to={'/teaching'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Teach on Udemy</Link>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notifications</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account settings</li>
                            </>
                        )

                        }
                        {userRole === "Admin" && (
                            <>
                                <Link
                                    to="/admin"
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/users"
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Users Profile
                                </Link>
                                <Link
                                    to="/api/course-status"
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Course Mannagement
                                </Link>
                            </>
                        )}

                        {userRole === "Instructors" && (
                            <Link
                                to="/add-course"
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                Add Course
                            </Link>
                        )}
                        <li className="px-4 py-2 flex justify-between hover:bg-gray-100">
                            <span>Language</span>
                            <span className="text-gray-500">English 🌐</span>
                        </li>
                        <Link to={'/edit-profile'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit profile</Link>
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
