import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported

const ResetPass = () => {
    let { token } = useParams();
    console.log(token);

    let newPass = '';
    const [password, setPassword] = useState(newPass);

    const signHandler = (e) => {
        setPassword(e.target.value);
    };

    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5173/api/reset-password/${token}`, { newPassword: password });
            console.log(res.data);
        } catch (error) {
            console.error('Error resetting password:', error.response?.data || error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-8">
                <h2 className="text-2xl text-center font-semibold mb-4 text-gray-700">
                    Reset Your Password
                </h2>
                <form onSubmit={submithandler}>
                    <input
                        type="password"
                        placeholder="Enter new Password..."
                        onChange={signHandler}
                        name="Password"
                        value={password.Password}
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPass;
