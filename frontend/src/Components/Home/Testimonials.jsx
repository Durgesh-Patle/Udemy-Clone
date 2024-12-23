import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
            source: {
                name: "StackOverflow",
                logo: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
                stats: "37,076 responses collected",
            },
            link: "View Web Development courses",
        },
        {
            quote: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
            person: {
                image: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
                name: "Alvin Lim",
                title: "Technical Co-Founder, CTO at Dimensional",
            },
            link: "View this iOS & Swift course",
        },
        {
            quote: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
            person: {
                image: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
                name: "William A. Wachlin",
                title: "Partner Account Manager at Amazon Web Services",
            },
            link: "View this AWS course",
        },
        {
            quote: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills to help drive their careers forward.",
            person: {
                image: "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
                name: "Ian Stevens",
                title: "Head of Capability Development, North America at Publicis Sapient",
            },
            link: "Read full story",
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    See what others are achieving through learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
                        >
                            <blockquote className="text-gray-700 mb-4">
                                <span className="text-4xl text-purple-600">&ldquo;</span>
                                {testimonial.quote}
                            </blockquote>
                            {testimonial.source && (
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={testimonial.source.logo}
                                        alt={testimonial.source.name}
                                        className="h-10"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.source.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {testimonial.source.stats}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {testimonial.person && (
                                <div className="flex items-center space-x-3 mt-4">
                                    <img
                                        src={testimonial.person.image}
                                        alt={testimonial.person.name}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            {testimonial.person.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {testimonial.person.title}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <a
                                href="#"
                                className="text-sm font-medium text-purple-600 mt-4"
                            >
                                {testimonial.link} &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
