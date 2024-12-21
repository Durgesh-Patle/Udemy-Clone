import React, { useContext } from 'react';
import Context from '../../Context';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courses, setCarts } = useContext(Context);
    const { id } = useParams();

    // Find the course by its index
    const showData = courses.find((_, index) => index === Number(id));

    // Handle case where the course is not found
    if (!showData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold text-red-500">Course not found</h1>
            </div>
        );
    }

    function addCart() {
        setCarts((prevCarts) => [...prevCarts, showData]);
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <video className="mx-auto mb-6" src={showData?.videos[0]} controls></video>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{showData.title}</h1>
                <p className="text-gray-600 mb-6">{showData.description}</p>

                {/* Grid for course details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="text-sm text-gray-500 uppercase">Category</p>
                        <p className="text-lg text-gray-800 font-medium">{showData.category}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase">Price</p>
                        <p className="text-lg text-gray-800 font-medium">${showData.price}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase">Level</p>
                        <p className="text-lg text-gray-800 font-medium">{showData.level}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase">Language</p>
                        <p className="text-lg text-gray-800 font-medium">{showData.language}</p>
                    </div>
                </div>

                {/* Resources Section */}
                {showData.resources && showData.resources.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Resources</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {showData.resources.map((resource, index) => (
                                <li key={index}>{resource}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Videos Section */}
                {showData.videos && showData.videos.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Videos</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {showData.videos.map((video, index) => (
                                <li key={index}>{video}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Status Section */}
                <div className="mt-6">
                    <p className="text-sm text-gray-500 uppercase">Status</p>
                    <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded ${showData.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : showData.status === 'Rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                    >
                        {showData.status}
                    </span>
                </div>

                {/* Buttons Section */}
                <div className="mt-6 flex justify-between gap-4">
                    <button
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={addCart}
                    >
                        Add To Cart
                    </button>

                    <Link
                        to="/carts"
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Go To Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
