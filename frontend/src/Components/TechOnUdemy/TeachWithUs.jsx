import React from "react";

const TeachWithUs = () => {
  return (
    <div
      className=" min-h-screen flex items-center justify-center py-12 px-6"
      style={{
        backgroundImage: "url('https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full  bg-opacity-80 p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Come teach with us
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Become an instructor and change lives — including your own
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachWithUs;
