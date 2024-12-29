import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaChalkboardTeacher, FaListAlt, FaSignOutAlt } from 'react-icons/fa';

const AdminPanel = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    setActivePage(page);
    switch (page) {
      case 'Dashboard':
        navigate('/admin');
        break;
      case 'Add Course':
        navigate('/add-course');
        break;
      case 'Manage Courses':
        navigate('/api/course-status');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${
              activePage === 'Dashboard' ? 'bg-gray-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleNavigate('Dashboard')}
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </li>
          <li
            className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${
              activePage === 'Add Course' ? 'bg-gray-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleNavigate('Add Course')}
          >
            <FaChalkboardTeacher className="mr-3" /> Add Course
          </li>
          <li
            className={`flex items-center p-3 cursor-pointer rounded-md transition-all duration-200 ${
              activePage === 'Manage Courses' ? 'bg-gray-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => handleNavigate('Manage Courses')}
          >
            <FaListAlt className="mr-3" /> Manage Courses
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
          {activePage === 'Add Course' && (
            <div>
              <h2 className="text-2xl mb-4">Add New Course</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Course Title</label>
                  <input
                    type="text"
                    placeholder="Enter course title"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Description</label>
                  <textarea
                    placeholder="Enter course description"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    placeholder="Enter course price"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          {activePage === 'Manage Courses' && (
            <div>
              <h2 className="text-2xl mb-4">Manage Courses</h2>
              <p>Here you can view, edit, and delete courses.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
