import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "Personal Plan",
      subtitle: "For you",
      price: "₹850 per month",
      billingInfo: "Billed monthly or annually. Cancel anytime.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      buttonText: "Start subscription",
      buttonLink: "#",
    },
    {
      title: "Team Plan",
      subtitle: "For your team",
      price: "₹1,167 a month per user",
      billingInfo: "Billed annually. Cancel anytime.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      buttonText: "Start subscription",
      buttonLink: "#",
    },
    {
      title: "Enterprise Plan",
      subtitle: "For your whole organization",
      price: "Contact sales for pricing",
      billingInfo: "",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
      ],
      buttonText: "Request a demo",
      buttonLink: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Choose a plan for success
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Don’t want to buy courses one by one? Pick a plan to help you, your team,
        or your organization achieve outcomes faster.
      </p>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-md p-6 w-full md:w-1/3 ${index === 0 ? "border-purple-500" : ""
              }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-4">{plan.subtitle}</p>
            <p className="text-2xl font-semibold mb-2">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-4">{plan.billingInfo}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.buttonLink}
              className="block bg-purple-500 text-white text-center py-2 rounded-md hover:bg-purple-600"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
