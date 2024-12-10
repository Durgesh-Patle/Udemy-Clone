import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPass = () => {
  const initialFormData = {
    Email: '',
  };

  const [input, setInput] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const signHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submithandler = async (e) => {
    e.preventDefault();

    if (input.Email.includes('@gmail.com')) {
      navigate('/send-email'); // Navigate to the "Send Email" page
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/api/forgot-password', input);

      if (res.status === 200) {
        setMessage('Email sent successfully! Please check your inbox.');
        setError('');
        setTimeout(() => {
          navigate('/api/login');
        }, 3000); // Redirect after 3 seconds
      }
    } catch (err) {
      setError('Failed to send the email. Please try again.');
      setMessage('');
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
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

          {/* Success/Error Message */}
          {message && <div className="mt-4 text-green-600 text-center">{message}</div>}
          {error && <div className="mt-4 text-red-600 text-center">{error}</div>}

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
