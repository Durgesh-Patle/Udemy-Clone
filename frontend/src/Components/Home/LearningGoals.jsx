import React from 'react';

const LearningGoals = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <p className="text-xl m-5 text-gray-500">Trusted by over 16,000 companies and millions of learners around the world</p>
        <div className="flex justify-center items-center mt-4 space-x-20">
          <img src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals" alt="Volkswagen" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="Samsung" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="Cisco" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="Vimeo" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals" alt="P&G" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals" alt="HPE" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="Citi" className="h-13" />
          <img src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals" alt="Ericsson" className="h-13" />
        </div>
      </div>

      {/* Learning Focused on Your Goals Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 ">Learning focused on your goals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hands-on Training */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-500">
            <h3 className="text-xl font-semibold text-gray-800">Hands-on training</h3>
            <p className="mt-2 text-lg text-gray-600">
              Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
            </p>
          </div>

          {/* Certification Prep */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Certification prep</h3>
            <p className="mt-2 text-lg text-gray-600">
              Prep for industry-recognized certifications by solving real-world challenges and earning badges along the way.
            </p>
          </div>

          {/* Insights and Analytics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Insights and analytics</h3>
            <p className="mt-2 text-lg text-gray-600">
              Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
            </p>
            <a href="#" className="text-purple-600 font-medium text-lg mt-4 inline-block">Find out more →</a>
          </div>

          {/* Customizable Content */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Customizable content</h3>
            <p className="mt-2 text-lg text-gray-600">
              Create tailored learning paths for team and organization goals and even host your own content and resources.
            </p>
            <a href="#" className="text-purple-600 font-medium text-sm mt-4 inline-block">Find out more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningGoals;
