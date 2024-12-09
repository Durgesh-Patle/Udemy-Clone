import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const formData = {
    fullName: '',
    Email: '',
    Password: ''
  };

  const [input, setInput] = useState(formData);
  let navigate = useNavigate();

  function signHandler(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function submithandler(e) {
    e.preventDefault();
    let res = await axios.post('http://localhost:8000/api/sign', input);
    console.log('Response:', res.name.status);

    // if(res.status)
    navigate('/api/login');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section with Illustration */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 p-8">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
            alt="Illustration"
            className="w-3/4 h-auto"
          />
        </div>

        {/* Right Section with Form */}
        <div className="p-8 md:p-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign up and start learning
          </h2>
          <form  onSubmit={submithandler}>
            {/* Full Name */}
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={signHandler}
              value={input.fullName}
              placeholder="Full name"
              className="mt-2 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Email */}
            <input
              type="email"
              id="email"
              name="Email"
              onChange={signHandler}
              value={input.Email}
              placeholder="Email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <input
              type="password"
              id="password"
              name="Password"
              onChange={signHandler}
              value={input.Password}
              placeholder="Password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <hr /> <hr />

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="offers"
                className="h-4 w-4 text-purple-600 border-gray-300 rounded"
              />
              <label htmlFor="offers" className="ml-2 text-sm text-gray-600">
                Send me special offers , learning tips.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Sign up
            </button>
          </form>

          {/* Terms and Privacy */}
          <p className="text-sm text-gray-600 mt-4">
            By signing up, you agree to our{" "}
            <Link to={'#'} className="text-purple-600 underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-purple-600 underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* Log In */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={'/api/login'} className="text-purple-600 font-medium underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
