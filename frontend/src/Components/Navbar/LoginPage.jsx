import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-center shadow-lg rounded-lg bg-white">
                {/* Illustration Section */}
                <div className="hidden md:block p-8">
                    <img
                        src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
                        alt="Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Login Form Section */}
                <div className="p-8">
                    <h2 className="text-2xl text-center font-semibold mb-4 text-gray-700">
                        Log in to continue your learning journey
                    </h2>
                    <form>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="mt-2 w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                        >
                            Continue with email
                        </button>
                    </form>

                    <div className="my-4 text-center text-gray-500">------------------ Other log in options ------------------</div>
                    <div className="flex justify-around mx-12">
                        <button className="flex items-center justify-center gap-2 w-10 h-10 border border-gray-300">
                        {/* <FcGoogle /> */}
                        <img src="https://cdn-teams-slug.flaticon.com/google.jpg" className="h-7"  alt="Google" />

                        </button>
                        <button className="flex items-center justify-center w-10 h-10 border border-gray-300 ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cE21uCf_X-Tr7eUOE77XI9e_Zos6sEyyGw&s" className="h-6"  alt="Facebook" />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 border border-gray-300 ">
                            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png"  className="h-6" alt="Apple" />
                        </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link to={"/sign-up"} className="text-purple-600 underline">
                            Sign up
                        </Link>
                    </div>
                    <hr />
                    <hr />
                    <div className="text-center text-sm text-gray-500">
                        <Link to={'/'} className="text-purple-600 underline">
                            Log in with your organization
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
