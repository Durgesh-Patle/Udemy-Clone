import React, { useContext } from 'react';
import Context from '../../Context';

const AllCourse = () => {
  const { courses } = useContext(Context);

  if (!Array.isArray(courses)) {
    console.error("Courses is not an array:", courses);
    return <p>Error: Courses data is invalid.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>
      {courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <span className="font-medium">Category:</span> {course.category}
                </p>
                <p>
                  <span className="font-medium">Level:</span> {course.level}
                </p>
                <p>
                  <span className="font-medium">Language:</span> {course.language}
                </p>
                <p>
                  <span className="font-medium">Reason:</span> {course.reason}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {course.status}
                </p>
                <p>
                  <span className="font-medium">Videos:</span> {course.videos}
                </p>
                <p>
                  <span className="font-medium">Resources:</span> {course.resources}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourse;
