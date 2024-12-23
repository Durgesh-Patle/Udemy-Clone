import React, { useContext, useState } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

const Carts = () => {
    const { cart, setCarts } = useContext(Context); 
    const [coupon, setCoupon] = useState("");
    // console.log(cart, "Cart");

    if (!cart || cart.length === 0) {
        return (
            <div className=" min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
                <div className=" top-0">
                    <Link to="/" className="text-xl font-bold text-purple-600 ml-5 underline mt-4">
                        Go Back to Courses
                    </Link>
                </div>
                <h1 className="text-2xl ml-16 font-bold text-red-500">Your Cart is Empty</h1>
            </div>
        );
    }

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    // Handle remove item
    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCarts(updatedCart);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-lg font-medium mb-6">{cart.length} Courses in Cart</p>

            {cart.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-300 py-4"
                >
                    <div className="flex items-start gap-4">
                        <img
                            src={`https://dummyimage.com/100x100/000/fff&text=${encodeURIComponent(
                                item.title.charAt(0)
                            )}`}
                            alt={item.title}
                            className="w-20 h-20 rounded"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-500">By {item.provider}</p>
                            {item.updated && (
                                <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded mt-2">
                                    Updated Recently
                                </span>
                            )}
                            <p className="text-sm text-gray-500">
                                {item.totalHours} • {item.lectures} • {item.level}
                            </p>
                            <button
                                className="text-purple-600 text-sm font-medium hover:underline mt-2"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                            <button className="text-purple-600 text-sm font-medium hover:underline ml-4">
                                Save for Later
                            </button>
                        </div>
                    </div>
                    <p className="text-lg font-semibold">₹{item.price}</p>
                </div>
            ))}

            <div className="flex justify-between items-center mt-6">
                <h2 className="text-xl font-bold">Total:</h2>
                <p className="text-xl font-bold">₹{totalPrice}</p>
            </div>

            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-purple-700">
                Checkout
            </button>

            <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Promotions</h3>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Enter Coupon"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carts;
