import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Context from '../../Context';

const CourseStatus = () => {
    const { pendingCourse, setPendingCourse } = useContext(Context);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');

    if (!token) {
        setError("Authorization token is missing. Please log in again.");
        return;
    }

    const handleAction = async (_id, action) => {

        console.log(_id,action,"Iddddddd");
        
        setError(null);
        setLoading(true);

        try {
            const res = await axios.post(
                'http://localhost:8000/api/course-status',
                { _id, action },
                {
                    headers: {
                        Authorization:token,
                    },
                }
            );

            // Update pendingCourse list after action
            setPendingCourse((prev) => prev.filter((course) => course._id !== _id));
            console.log(`${action} successful:`, res.data);
        } 
        catch (err) {
            console.error(`Failed to ${action} course:`, err);
            setError(`Failed to ${action} course. Please try again later.`);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    useEffect(() => {
        handleAction();
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Course Status</h1>
            {error && <p className="text-red-500">{error}</p>}

            {pendingCourse && pendingCourse.length > 0 ? (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Pending Courses</h2>
                    <ul>
                        {pendingCourse.map((course) => (
                            <li key={course._id} className="border-b py-2 flex justify-between items-center">
                                <span>{course.title}</span>
                                <div>
                                    <button
                                        onClick={() => handleAction(course._id, 'Approved')}
                                        className={`bg-green-500 text-white px-4 py-1 rounded mr-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        disabled={loading}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleAction(course._id, 'Rejected')}
                                        className={`bg-red-500 text-white px-4 py-1 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        disabled={loading}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No pending courses.</p>
            )}
        </div>
    );
};

export default CourseStatus;
