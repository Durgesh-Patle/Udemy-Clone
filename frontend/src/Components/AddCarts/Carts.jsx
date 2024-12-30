import React, { useContext, useState } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
    "pk_test_51QYQxEKLt9kjLIEWpysY3X5BJdmpHYknMVp1VoJW2TxI6AVF0CusdxGk8yn08J172L4ZXlCtEKziKsAzZgnI23Gf00krqWUvKn"
);

const Carts = () => {
    const { cart, setCarts } = useContext(Context);
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items to proceed.");
            return;
        }

        setLoading(true);
        const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

        try {
            const stripe = await stripePromise;

            const { data: session } = await axios.post("http://localhost:8000/api/payment", {
                items: cart,
                totalAmount,
            });

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                alert(result.error.message);
            }
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCarts(updatedCart); 
    };


    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    if (!cart || cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
                <div className="top-0">
                    <Link to="/" className="text-xl font-bold text-purple-600 ml-5 underline mt-4">
                        Go Back to Courses
                    </Link>
                </div>
                <h1 className="text-2xl ml-16 font-bold text-red-500">Your Cart is Empty</h1>
            </div>
        );
    }

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
                            <p className="text-sm text-gray-500">By: {item._id}</p>
                            {item.updated && (
                                <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded mt-2">
                                    Updated Recently
                                </span>
                            )}
                            <p className="text-sm text-gray-500">Level: {item.level}</p>
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

            <button
                onClick={handlePayment}
                className={`mt-6 px-8 py-2 bg-blue-600 text-white font-bold rounded shadow-lg hover:bg-blue-700 transition-all duration-300 ${loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                disabled={loading}
            >
                {loading ? "Processing..." : "Book Now"}
            </button>
        </div>
    );
};

export default Carts;

