import React from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminLayout = ({children}) => {
    let Navigate = useNavigate();
    let  LogOut= ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        Navigate("/")
        window.location.reload();
    }
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
          <nav className="space-y-4">
            <Link
              to="/admin"
              className="block py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Dashboard
            </Link>
            <Link to="/add-course"
              className="block py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Create Course
            </Link>
                <Link to="/api/course-status"
              className="block py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Manage Courses
            </Link>
            <Link
              to="/users"
              className="block py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              User Management
            </Link>
            <Link
              to="/admin/reports"
              className="block py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Reports
            </Link>
          </nav>
        </div>
        <div className="p-6">
          <button onClick={LogOut} className="w-full py-2 px-4 bg-red-600 rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
};

export default  AdminLayout;