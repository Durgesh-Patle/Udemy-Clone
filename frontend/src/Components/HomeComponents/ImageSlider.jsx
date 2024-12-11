import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const slides = [
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
            title: "Learning that gets you",
            description: "Skills for you present (and your future). Get started with us."
        },
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/5d643ea4-9972-4d77-85c2-c9dc76233d3c.png",
            title: "24-Hour Flash Sale",
            description: "Learn from real-world experts for as low as ₹449. Sale ends tonight!"
        },
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
            title: "Take your career to the next level",
            description: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way."
        },
        {
            image: "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/2b4dae04-f107-4ae6-8188-a57ca45897cb.jpg",
            title: "Powered by community",
            description: "Trust ratings and reviews to make a smarter choice. Get started with our top-rated courses."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="relative max-w-[1400px]">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full relative">
                                <img src={slide.image} alt={slide.title} className="h-[380px] mx-auto object-cover" />
                                <div className="absolute top-10 left-10 bg-white p-4 rounded-lg ml-20 shadow-lg max-w-sm">
                                    <h1 className="text-2xl font-semibold text-gray-800">{slide.title}</h1>
                                    <p className="text-gray-600 ">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-50 hover:opacity-100"
                >
                    &#60;
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-50 hover:opacity-100"
                >
                    &#62;
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
