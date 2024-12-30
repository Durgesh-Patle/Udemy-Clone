import React from "react";

const DemoForm = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get your demo</h2>
          <p className="text-gray-600 mb-6">
            Tell us your needs and we’ll start on a custom plan to drive results.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Train your entire workforce with over 27,000+ courses in 15 languages",
              "Prep employees for over 200 industry-recognized certification exams",
              "Develop highly skilled tech teams in risk-free practice environments",
              "Identify emerging skills gaps, learning trends, and industry benchmarks",
              "Integrate content with your existing learning management system",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-gray-600 font-semibold mb-4">
              Trusted by over 16,000 companies and millions of learners around the world
            </p>
            <div className="flex flex-wrap gap-4">
              {["volkswagen", "samsung", "cisco", "vimeo", "p&g", "hpe", "citi", "ericsson"].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-gray-500"
                  >
                    {logo}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label> */}
                <input
                  type="text"
                  className="mt-1 block w-full py-2  px-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Enter First Name........"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label> */}
                <input
                  type="text"
                  className="mt-1 block w-full border py-2  px-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Enter Last Name........"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                Work Email *
              </label> */}
              <input
                type="email"
                className="mt-1 block w-full py-2  px-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter Your Email........"
                required
              />
            </div>

            {/* Row 3 */}
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label> */}
              <input
                type="tel"
                className="mt-1 block w-full py-2  px-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter Your Phone Number........"
                required
              />
            </div>

            {/* Row 4 */}
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                Where are you located? *
              </label> */}
              <select
                className="mt-1 py-2  px-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                required
              >
                <option value="">Select...</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            {/* Additional Fields */}
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                Company Name *
              </label> */}
              <input
                type="text"
                className="mt-1 block py-2  px-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter Company Name........"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Company Size *
                </label> */}
                <select
                  className="mt-1 py-2  px-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                >
                  <option value="">Select...</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                </select>
              </div>
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Number of learners *
                </label> */}
                <select
                  className="mt-1 block w-full py-2  px-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                >
                  <option value="">Select...</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Job Title *
                </label> */}
                <input
                  type="text"
                  className="mt-1 block w-full py-2  px-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Enter Job Tittle........"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Job Level *
                </label> */}
                <select
                  className="mt-1 block py-2  px-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  required
                >
                  <option value="">Select...</option>
                  <option>Entry</option>
                  <option>Manager</option>
                  <option>Executive</option>
                </select>
              </div>
            </div>

            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                What are your organization’s training needs? (Optional)
              </label> */}
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                rows="3"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-gray-500 text-xs mt-4">
            By signing up, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
