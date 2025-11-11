import React, { useEffect, useState } from "react";
import {
  FaPaperPlane,
  FaListAlt,
  FaCalendarAlt,
  FaChartPie,
  FaHistory,
  FaFileContract,
//   FaTachometerAlt,
} from "react-icons/fa";

const cards = [
//   {
//     key: "dashboardOverview",
//     title: "Dashboard Overview",
//     description: "Your main dashboard summary view.",
//     icon: <FaTachometerAlt className="w-6 h-6 text-blue-600" />,
//   },
  {
    key: "applyLeave",
    title: "Apply for Leave",
    description: "Submit leave requests easily.",
    icon: <FaPaperPlane className="w-8 h-8 text-blue-600" />,
  },
  {
    key: "leaveStatus",
    title: "Leave Status",
    description: "Check status of your leave requests.",
    icon: <FaListAlt className="w-8 h-8 text-pink-600" />,
  },
  {
    key: "leaveCalendar",
    title: "Personal Leave Calendar",
    description: "View your leave dates on calendar.",
    icon: <FaCalendarAlt className="w-8 h-8 text-skyblue-600" />,
  },
  {
    key: "leaveSummary",
    title: "Remaining Leave Summary",
    description: "See your remaining leave days.",
    icon: <FaChartPie className="w-8 h-8 text-green-600" />,
  },
  {
    key: "leaveHistory",
    title: "Leave History",
    description: "Review your past leave records.",
    icon: <FaHistory className="w-8 h-8 text-orange-600" />,
  },
  {
    key: "leavePolicy",
    title: "Leave Policy Info",
    description: "Read company leave policies.",
    icon: <FaFileContract className="w-8 h-8 text-red-600" />,
  },
];

const DashboardOverview = ({ onSelect }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h2
        className={`text-4xl font-extrabold mb-8 text-pink-700  transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        Dashboard Overview
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {cards.map(({ key, title, description, icon }) => (
          <div
            key={key}
            onClick={() => onSelect(key)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter") onSelect(key);
            }}
            className="cursor-pointer  rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
            <p className="text-blue-800 text-base">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardOverview;
