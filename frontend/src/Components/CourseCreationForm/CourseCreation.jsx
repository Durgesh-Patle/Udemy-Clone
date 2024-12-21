import axios from "axios";
import React, { useState } from "react";

const CourseCreation = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        level: "Beginner",
        language: "",
        reason: "",
        status: "Pending",
        videos: [],
        resources: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayChange = (e, field) => {
        const values = e.target.value.split(",");
        setFormData({ ...formData, [field]: values });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        // console.log(formData,"Form Dattttttaaaa");
        
        let res =await axios.post('http://localhost:8000/api/add-course', formData);

        // console.log(res,"Resssssss");
        // console.log("Submitted Form Data:", formData);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Create A New Course</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Course Title</label> */}
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter course title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Course Description</label> */}
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter course description"
                        rows="5"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    ></textarea>
                </div>

                {/* Category */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Category</label> */}
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Enter course category"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Price</label> */}
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter course price"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        min="0"
                        required
                    />
                </div>

                {/* Level */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Level</label> */}
                    <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                {/* Language */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Language</label> */}
                    <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        placeholder="Enter course language"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                {/* Reason */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Reason (Optional)</label> */}
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Enter reason (if applicable)"
                        rows="3"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>

                {/* Status */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Status</label> */}
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Videos */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Videos (comma-separated URLs)</label> */}
                    <input
                        type="text"
                        name="videos"
                        onChange={(e) => handleArrayChange(e, "videos")}
                        placeholder="Enter video URLs separated by commas"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Resources */}
                <div className="mb-4">
                    {/* <label className="block text-gray-700 font-medium mb-2">Resources (comma-separated URLs)</label> */}
                    <input
                        type="text"
                        name="resources"
                        onChange={(e) => handleArrayChange(e, "resources")}
                        placeholder="Enter resource URLs separated by commas"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Create Course
                </button>
            </form>
        </div>
    );
};

export default CourseCreation;

