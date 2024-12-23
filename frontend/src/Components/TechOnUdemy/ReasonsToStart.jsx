import React from "react";

const ReasonsToStart = () => {
    const reasons = [
        {
            title: "Teach your way",
            description:
                "Publish the course you want, in the way you want, and always have control of your own content.",
            icon: (
                <img
                    src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg" 
                    alt="Teach Icon"
                    className="w-16 h-16 mx-auto"
                />
            ),
        },
        {
            title: "Inspire learners",
            description:
                "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
            icon: (
                <img
                    src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg"
                    alt="Inspire Icon"
                    className="w-16 h-16 mx-auto"
                />
            ),
        },
        {
            title: "Get rewarded",
            description:
                "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
            icon: (
                <img
                    src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg"
                    alt="Reward Icon"
                    className="w-16 h-16 mx-auto"
                />
            ),
        },
    ];

    return (
        <div className="bg-gray-50 py-10 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">So many reasons to start</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {reason.icon}
                        <h3 className="text-xl font-semibold mt-4">{reason.title}</h3>
                        <p className="text-gray-600 mt-2">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReasonsToStart;
