import React, { useState } from "react";

const HowToBegin = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Plan your curriculum", "Record your video", "Launch your course"];
    const content = [
        {
            heading: "Plan your curriculum",
            description:
                "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. The way that you teach — what you bring to it — is up to you.",
            help:
                "We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.",
        },
    ];

    return (
        <div className="py-10 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-8">How to begin</h2>
            <div className="flex justify-center space-x-8 border-b border-gray-300 mb-6">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`pb-2 text-lg font-medium ${activeTab === index
                                ? "border-b-2 border-black text-black"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">{content[0].heading}</h3>
                    <p className="text-gray-600 mb-4">{content[0].description}</p>
                    <h4 className="font-bold mb-2">How we help you</h4>
                    <p className="text-gray-600">{content[0].help}</p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                        src="https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg"
                        alt="Plan your curriculum"
                        className="w-3/4 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowToBegin;
