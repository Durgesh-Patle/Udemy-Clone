import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaChalkboardTeacher, FaSignOutAlt } from 'react-icons/fa';

const AdminPanel = () => {
    const [activePage, setActivePage] = useState('Dashboard');
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        setActivePage(page);
        if (page === 'Dashboard') {
            navigate('/dashboard');
        } else if (page === 'Add Course') {
            navigate('/add-course');
        } else if (page === 'Manage Users') {
            navigate('/manage-users');
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
                <ul className="space-y-4">
                    <li 
                        className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${activePage === 'Dashboard' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
                        onClick={() => handleNavigate('Dashboard')}
                    >
                        <FaTachometerAlt className="mr-3" /> Dashboard
                    </li>
                    <li 
                        className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${activePage === 'Add Course' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
                        onClick={() => handleNavigate('Add Course')}
                    >
                        <FaChalkboardTeacher className="mr-3" /> Add Course
                    </li>
                    <li 
                        className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${activePage === 'Manage Users' ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
                        onClick={() => handleNavigate('Manage Users')}
                    >
                        <FaUsers className="mr-3" /> Manage Users
                    </li>
                </ul>
                <button 
                    className="mt-auto flex items-center p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-200"
                    onClick={() => navigate('/login')}
                >
                    <FaSignOutAlt className="mr-3" /> Logout
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-3xl font-semibold mb-6">{activePage}</h1>
                <div className="bg-white p-6 rounded-md shadow-md">
                    {/* Dynamic content for each page */}
                    {activePage === 'Dashboard' && <p>Welcome to the Admin Dashboard!</p>}
                    {activePage === 'Add Course' && <p>Here you can add new courses.</p>}
                    {activePage === 'Manage Users' && <p>Manage users and their permissions here.</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
