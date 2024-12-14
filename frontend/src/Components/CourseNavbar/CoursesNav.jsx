import React from "react";
import { Link } from "react-router-dom";


const CoursesNav = () => {
  return (
    <nav className=" p-4 shadow-md mt-[-1%] m-4">
      <div className="flex flex-wrap justify space-x-4">
        <Link
          to="/"
          className="text-xl  font-bold text-[#6a6f73] hover:text-black"
        >
          Data Science
        </Link>
        <Link
          to="/"
          className="text-xl  font-bold text-[#6a6f73] hover:text-black"
        >
          IT Certificate
        </Link>
        <Link
          to="/"
          className=" text-xl  font-bold text-[#6a6f73] hover:text-black"
        >
          Leadership
        </Link>
        <Link
          to="/"
          className="text-xl  font-bold text-[#6a6f73] hover:text-black"
        >
          Web Development
        </Link>
        <Link
          to="/"
          className="text-xl  font-bold text-[#6a6f73] hover:text-black"
        >
          Business Analytics & Intelligence
        </Link>
      </div>
      <hr  className="mx-8"/>
      <hr />
      <hr />
    </nav>
  );
};

export default CoursesNav;
