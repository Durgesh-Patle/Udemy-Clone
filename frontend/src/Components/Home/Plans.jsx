import React from "react";

const Plans = () => {
    const plans = [
        {
            title: "Personal Plan",
            description: "For you",
            target: "Individual",
            price: "₹850 per month",
            details: "Billed monthly or annually. Cancel anytime.",
            button: "Start subscription",
            features: [
                "Access to 12,000+ top courses",
                "Certification prep",
                "Goal-focused recommendations",
                "AI-powered coding exercises",
            ],
        },
        {
            title: "Team Plan",
            description: "For your team",
            target: "2 to 20 people",
            price: "₹2,000 a month per user",
            details: "Billed annually. Cancel anytime.",
            button: "Start subscription",
            features: [
                "Access to 12,000+ top courses",
                "Certification prep",
                "Goal-focused recommendations",
                "AI-powered coding exercises",
                "Analytics and adoption reports",
            ],
        },
        {
            title: "Enterprise Plan",
            description: "For your whole organization",
            target: "More than 20 people",
            price: "Contact sales for pricing",
            details: "",
            button: "Request a demo",
            features: [
                "Access to 27,000+ top courses",
                "Certification prep",
                "Goal-focused recommendations",
                "AI-powered coding exercises",
                "Advanced analytics and insights",
                "Dedicated customer success team",
                "International course collection featuring 15 languages",
                "Customizable content",
                "Hands-on tech training with add-on",
                "Strategic implementation services with add-on",
            ],
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                    Accelerate growth — for you or your organization
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Reach goals faster with one of our plans or programs. Try one free
                    today or contact sales to learn more.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 border-t-4"
                            style={{ borderColor:"#8B5CF6" }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {plan.title}
                            </h3>
                            <p className="text-sm text-gray-500">{plan.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
                            <p className="text-xl font-bold text-gray-900">{plan.price}</p>
                            <p className="text-sm text-gray-500 mb-6">{plan.details}</p>
                            <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium">
                                {plan.button}
                            </button>
                            <ul className="mt-6 space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start space-x-2 text-sm text-gray-600"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Plans;
