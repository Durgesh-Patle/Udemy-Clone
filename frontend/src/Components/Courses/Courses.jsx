import React, { useContext, useState } from 'react';
import Context from '../../Context';

const Courses = () => {
    const { courses } = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState("All Courses");

    const filteredCourses =
        selectedCategory === "All Courses"
            ? courses
            : courses.filter(course => course.category === selectedCategory);

    return (
        <>
            <nav className="p-4 shadow-md mt-[-1%] m-4">
                <div className="flex flex-wrap justify space-x-4">
                    {[
                        "All Courses",
                        "Data Science",
                        "IT Certificate",
                        "Leadership",
                        "Web Development",
                        "Business Analytics & Intelligence",
                    ].map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`text-[19px] font-bold ${
                                selectedCategory === category
                                    ? "text-black"
                                    : "text-[#6a6f73]"
                            } hover:text-black`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <hr className="mx-8" />
            </nav>
            <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto">
                {filteredCourses.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        No courses available for this category.
                    </p>
                ) : (
                    <div className="flex space-x-4">
                        {filteredCourses.map((course, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] w-[280px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={course.videos}
                                    alt={course.title}
                                    onError={(e) =>
                                        (e.target.src = "path/to/placeholder-image.jpg")
                                    }
                                    className="w-full h-36 object-cover"
                                />

                                <div className="p-4">
                                    <h3 className="text-sm font-semibold mb-2 text-gray-800">
                                        {course.title}
                                    </h3>

                                    <p className="text-xs text-gray-600 mb-2 truncate">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-400 text-lg">&#9733;</span>
                                        <span className="ml-1 text-gray-800 font-medium text-sm">
                                            {course.rating}
                                        </span>
                                        <span className="ml-2 text-xs text-gray-600">
                                            ({course.category})
                                        </span>
                                    </div>

                                    <div className="flex items-center mb-2">
                                        <span className="text-lg font-semibold text-gray-800">
                                            ₹{course.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Courses;
