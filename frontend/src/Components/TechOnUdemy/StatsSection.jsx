import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "73M", label: "Students" },
    { value: "75+", label: "Languages" },
    { value: "1B", label: "Enrollments" },
    { value: "180+", label: "Countries" },
    { value: "16,000+", label: "Enterprise customers" },
  ];

  return (
    <div className="bg-purple-700 py-10">
      <div className="flex justify-around text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-lg mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
