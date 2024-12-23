import React, { useContext, useState } from 'react';
import Context from '../../Context';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courses, setCarts } = useContext(Context);
    const { id } = useParams();

    const showData = courses.find((_, index) => index === Number(id));

    if (!showData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold text-red-500">Course not found</h1>
            </div>
        );
    }

    function addCart() {
        setCarts((prevCarts) => [...prevCarts, showData]);
    }

    const topics = [
        "ChatGPT: Create content, synthesize information, and learn faster than ever with effective prompt engineering!",
        "Productivity: Achieve your goals faster with ChatGPT, manage your time, prioritize tasks, and create an optimized daily schedule!",
        "Soft Skills: Improve your communication, leadership, problem-solving, and social skills with personalized ChatGPT feedback!",
        "AI Video Tools: Create an AI avatar that transforms scripts into presentations and quickly generate social media content!",
        "AI Writing Tools: Automate writing tasks, generate effective copy, and integrate with Google Sheets/Excel!",
        "Branding: Develop a visual identity, design logos, and generate content to establish a strong online presence!",
        "Business: Streamline your workflow, automate repetitive tasks, and gain insights that help you make data-driven decisions for your business!",
        "Midjourney: Use prompts, parameters, and modifiers to create amazing images that showcase your personal style and creativity!",
        "ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new audiences, and scale your projects!",
        "Marketing: Generate targeted content with ChatGPT, capitalize on trends, create ads, newsletters, and media campaigns!",
        "AI Voice Tools: Easily create AI-generated speech for any use case and even clone your own voice entirely!",
        "AI Photo Tools: Add motion to images, dynamically enhance image aesthetics, and create custom images in bulk!",
        "AI Music Tools: Create unique compositions for any types of video and save time with a streamlined creative process.",
        "DALL-E 3: Create amazing photos from prompts, fill in or remove elements of images using inpainting and outpainting techniques!",
        "Multimodal: Combine multiple AI tools to create immersive and engaging content that would have previously taken an entire team to create!",
        "Coding: Combine the power of ChatGPT with programming fundamentals, algorithms, debugging, and documentation!",
    ];

    // const sections = [
    //     {
    //         title: "ChatGPT Fundamentals",
    //         lectures: "5 lectures • 47 min",
    //         details: [
    //             { lectureTitle: "Introduction to ChatGPT", duration: "3 min" },
    //             { lectureTitle: "History of ChatGPT", duration: "5 min" },
    //             { lectureTitle: "Key Features of ChatGPT", duration: "10 min" },
    //             { lectureTitle: "Using ChatGPT Effectively", duration: "15 min" },
    //             { lectureTitle: "Best Practices", duration: "14 min" },
    //         ],
    //     },
    //     {
    //         title: "Prompt Engineering",
    //         lectures: "5 lectures • 1 hr 4 min",
    //         details: [
    //             { lectureTitle: "What is Prompt Engineering?", duration: "4 min" },
    //             { lectureTitle: "Designing Effective Prompts", duration: "12 min" },
    //             { lectureTitle: "Types of Prompts", duration: "8 min" },
    //             { lectureTitle: "Debugging Prompt Issues", duration: "10 min" },
    //             { lectureTitle: "Advanced Prompt Strategies", duration: "30 min" },
    //         ],
    //     },
    //     {
    //         title: "AI Ethics and Safety",
    //         lectures: "5 lectures • 40 min",
    //         details: [
    //             { lectureTitle: "Understanding AI Ethics", duration: "5 min" },
    //             { lectureTitle: "Privacy Concerns in AI", duration: "6 min" },
    //             { lectureTitle: "Bias in AI Models", duration: "7 min" },
    //             { lectureTitle: "AI Regulation and Governance", duration: "8 min" },
    //             { lectureTitle: "Building Ethical AI Solutions", duration: "14 min" },
    //         ],
    //     },
    //     {
    //         title: "Advanced Natural Language Processing",
    //         lectures: "4 lectures • 2 hrs 15 min",
    //         details: [
    //             { lectureTitle: "Overview of NLP", duration: "8 min" },
    //             { lectureTitle: "Tokenization and Stemming", duration: "10 min" },
    //             { lectureTitle: "Word Embeddings and Word2Vec", duration: "12 min" },
    //             { lectureTitle: "Fine-Tuning NLP Models", duration: "40 min" },
    //         ],
    //     },
    //     {
    //         title: "Building AI-Powered Applications",
    //         lectures: "5 lectures • 1 hr 30 min",
    //         details: [
    //             { lectureTitle: "Introduction to AI Applications", duration: "5 min" },
    //             { lectureTitle: "Integrating AI APIs", duration: "10 min" },
    //             { lectureTitle: "Creating Chatbots with AI", duration: "15 min" },
    //             { lectureTitle: "Deploying AI Models", duration: "30 min" },
    //             { lectureTitle: "Scaling AI-Powered Solutions", duration: "30 min" },
    //         ],
    //     },
    //     {
    //         title: "Machine Learning Basics",
    //         lectures: "5 lectures • 1 hr 20 min",
    //         details: [
    //             { lectureTitle: "What is Machine Learning?", duration: "6 min" },
    //             { lectureTitle: "Types of Machine Learning", duration: "12 min" },
    //             { lectureTitle: "Supervised Learning Techniques", duration: "15 min" },
    //             { lectureTitle: "Unsupervised Learning Techniques", duration: "20 min" },
    //             { lectureTitle: "Building ML Models", duration: "27 min" },
    //         ],
    //     },
    //     {
    //         title: "AI in Real-World Use Cases",
    //         lectures: "4 lectures • 50 min",
    //         details: [
    //             { lectureTitle: "AI in Healthcare", duration: "7 min" },
    //             { lectureTitle: "AI in Finance", duration: "8 min" },
    //             { lectureTitle: "AI in Retail", duration: "10 min" },
    //             { lectureTitle: "AI in Education", duration: "15 min" },
    //         ],
    //     },
    // ];

    // const [expandedSection, setExpandedSection] = useState(null);

    // const toggleSection = (index) => {
    //     setExpandedSection(expandedSection === index ? null : index);
    // };

    return (
        <div>
            <div className="bg-gray-900 h-56 text-white p-6 relative">
                <div className="pr-48">
                    {/* <h1 className="text-3xl font-bold">ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</h1> */}
                    <h1 className="text-3xl font-bold">{showData?.title}</h1>
                    <p className="mt-2 text-yellow-400">4.5 ⭐ (41,828 ratings) | 237,093 students</p>
                    {/* <p className="mt-2">Created by Julian Melanson, Benza Maman, Leap Year Learning</p> */}
                    <p className="mt-2">Description:- {showData?.description}</p>
                    {/* <p className="mt-2">Last updated 12/2024</p> */}
                    <p className="mt-2">Level :- {showData.level}</p>
                </div>
                <div className="absolute top-20 right-6">
                    <div className="min-h-screen  flex items-center justify-center z-[-1]">
                        <div className="bg-white shadow-md rounded-lg max-w-[400px] p-6">
                            {/* Course Header */}
                            <div className="flex flex-col items-center w-full">
                                <video
                                    src={showData?.videos[0]}
                                    // src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                                    className="w-full h-64 rounded-lg"
                                    controls
                                />
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-700">
                                    <strong>Subscribe to Udemy’s top courses</strong>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
                                    <a href="#" className="text-purple-600 underline"> Learn more</a>
                                </p>
                                <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 hover:bg-purple-700">
                                    Start subscription
                                </button>
                                <p className="text-center text-sm text-gray-600 mt-2">Starting at ₹850 per month<br />Cancel anytime</p>

                                <div className="flex items-center justify-center mt-4">
                                    <div className="w-full border-b border-gray-300"></div>
                                    <span className="text-gray-500 px-3">or</span>
                                    <div className="w-full border-b border-gray-300"></div>
                                </div>

                                <div className="">
                                    <p className="text-2xl font-semibold text-gray-700 text-center">Price : ${showData?.price}</p>
                                    <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-2 hover:bg-purple-50"
                                        onClick={addCart}
                                    >
                                        Add to cart
                                    </button>
                                    <Link className='underline text-[royalblue] border-x-blue-300'
                                        to={'/carts'}
                                    >
                                        Go to cart
                                    </Link>
                                </div>

                                <p className="text-center text-sm text-gray-600 mt-4">
                                    30-Day Money-Back Guarantee
                                </p>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="min-h-screen bg-gray-100 p-6">
                    <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
                        {/* Header Section */}
                        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>

                        {/* Topics Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {topics.map((topic, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <p className="text-gray-700 text-sm">{topic}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="bg-[#F3F4F6]">
                <div className="p-6 max-w-4xl ml-6 -mt-10">
                    <h2 className="text-3xl font-bold mb-6">Course Content</h2>
                    <ul className="space-y-6">
                        {sections.map((section, index) => (
                            <li key={index} className="bg-white shadow-md rounded-lg p-4">

                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleSection(index)}
                                >
                                    <div>
                                        <p className="text-lg font-semibold">{section.title}</p>
                                        <p className="text-gray-500">{section.lectures}</p>
                                    </div>
                                    <button
                                        className="text-gray-600 hover:text-gray-800"
                                        aria-label="Toggle Section"
                                    >
                                        {expandedSection === index ? "−" : "+"}
                                    </button>
                                </div>

                                {expandedSection === index && (
                                    <ul className="mt-4 space-y-2 border-t border-gray-300 pt-4">
                                        {section.details.map((detail, detailIndex) => (
                                            <li
                                                key={detailIndex}
                                                className="flex justify-between items-center text-gray-700"
                                            >
                                                <span>{detail.lectureTitle}</span>
                                                <span className="text-sm text-gray-500">{detail.duration}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

        </div >
    );
};

export default CourseDetails;
