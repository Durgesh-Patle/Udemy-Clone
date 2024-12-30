import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const UsersProfile = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    // console.log(token ,"Admin tokennnnnn");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/users", {
                    headers: {
                        Authorization: token,
                    },
                });
                setData(res.data.students);
                console.log(res.data.students, "User Profileeeee");
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, [token]);


    const handleDelete = async (id) => {
        try {
            const res = await axios.post(
                "http://localhost:8000/api/users/remove",
                { _id: id },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            if (res.status === 200) {
                setData((prevData) => prevData.filter((user) => user._id !== id));
                console.log("User deleted successfully:", id);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="max-w-full mx-auto p-4 bg-gray-100 rounded shadow-md">
            {data.map((val, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow-md border border-gray-200"
                >
                    <div className="flex items-center gap-4">
                        <div className="text-4xl text-blue-500">
                            <FaRegCircleUser />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">{val.fullName}</h1>
                            <p className="text-sm text-gray-600">{val.Email}</p>
                            {/* <p className="text-sm text-gray-600">{val._id}</p> */}
                        </div>
                    </div>
                    <button
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(val._id)}
                    >
                        Delete User
                    </button>
                </div>
            ))}
        </div>

    )
}

export default UsersProfile