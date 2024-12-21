import React, { useContext } from 'react';
import Context from '../../Context';
import { Link } from 'react-router-dom';

const Carts = () => {
    const { cart, setCarts } = useContext(Context); // Assuming 'cart' could be an array
    console.log(cart, "Carttssss");

    // Handle empty cart case
    if (!cart || cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
                <h1 className="text-2xl font-bold text-red-500">Your Cart is Empty</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-5">Your Cart</h1>
            {cart.map((item, index) => (
                <div key={index} className=" bg-gray-100 py-5 m-5">
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                        <video className="mx-auto" src={item?.videos[0]} controls></video>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{item.title}</h1>
                        {/* <p className="text-gray-600 mb-6">{item.description}</p> */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm text-gray-500 uppercase">Category</p>
                                <p className="text-lg text-gray-800 font-medium">{item.category}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase">Price</p>
                                <p className="text-lg text-gray-800 font-medium">${item.price}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase">Level</p>
                                <p className="text-lg text-gray-800 font-medium">{item.level}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase">Language</p>
                                <p className="text-lg text-gray-800 font-medium">{item.language}</p>
                            </div>
                        </div>
                        {/* {item.resources && item.resources.length > 0 && (
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Resources</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    {item.resources.map((resource, idx) => (
                                        <li key={idx}>{resource}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {item.videos && item.videos.length > 0 && (
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Videos</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    {item.videos.map((video, idx) => (
                                        <li key={idx}>{video}</li>
                                    ))}
                                </ul>
                            </div>
                        )} */}
                        {/* <div className="mt-6">
                            <p className="text-sm text-gray-500 uppercase">Status</p>
                            <span
                                className={`inline-block px-3 py-1 text-sm font-medium rounded ${item.status === 'Approved'
                                    ? 'bg-green-100 text-green-800'
                                    : item.status === 'Rejected'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                            >
                                {item.status}
                            </span>
                        </div> */}
                        <div className="flex justify-center m-3">
                            <Link
                                to="/checkout"
                                className="text-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carts;
