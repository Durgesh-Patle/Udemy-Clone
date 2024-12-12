import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPass = () => {
  const initialFormData = {
    Email: '',
  };

  const [input, setInput] = useState(initialFormData);

  console.log(input);
  

  // const navigate = useNavigate();

  const signHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/forget-password', input);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-center shadow-lg rounded-lg bg-white">
        {/* Left Illustration */}
        <div className="hidden md:block p-8">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-2xl text-center font-semibold mb-4 text-gray-700">
            Forget Your Password
          </h2>
          <form onSubmit={submithandler}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={signHandler}
              value={input.Email}
              name="Email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Send Email
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/api/login" className="text-purple-600 hover:text-purple-800 underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
