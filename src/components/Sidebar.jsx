// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
//       <h2 className="text-2xl font-semibold mb-8">Menu</h2>
//       <ul className="space-y-4">
//         <li>
//           <Link to="/" className="hover:text-blue-400 transition">Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/apply" className="hover:text-blue-400 transition">Apply Leave</Link>
//         </li>
//         <li>
//           <Link to="/history" className="hover:text-blue-400 transition">Leave History</Link>
//         </li>
//         <li>
//           <Link to="/admin" className="hover:text-blue-400 transition">Admin Panel</Link>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;
import React from "react";
import {
  FaPaperPlane,
  FaTachometerAlt,
  FaListAlt,
  FaCalendarAlt,
  FaChartPie,
  FaHistory,
  FaFileContract,
} from "react-icons/fa";



const sidebarItems = [
  { key: "dashboardOverview", label: "Dashboard Overview", icon: <FaTachometerAlt /> },
  { key: "applyLeave", label: "Apply for Leave", icon: <FaPaperPlane /> },
  { key: "leaveStatus", label: "Leave Status", icon: <FaListAlt /> },
  { key: "leaveCalendar", label: "Leave Calendar", icon: <FaCalendarAlt /> },
  { key: "leaveSummary", label: "Remaining Leave", icon: <FaChartPie /> },
  { key: "leaveHistory", label: "Leave History", icon: <FaHistory /> },
  { key: "leavePolicy", label: "Leave Policy", icon: <FaFileContract /> }
];


const Sidebar = ({ selectedKey, onSelect }) => (
  <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white flex flex-col shadow-lg">
    <div className="p-6 font-bold text-xl border-b border-blue-700">
      Leave Dashboard
    </div>

    <nav className="flex flex-col mt-6 space-y-1">
      {sidebarItems.map(({ key, label, icon }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`flex items-center gap-3 px-6 py-3 text-lg font-semibold rounded-r-full transition-colors duration-300 hover:bg-blue-700 focus:outline-none ${
            selectedKey === key ? "bg-blue-700" : ""
          }`}
        >
          <span className="w-5 h-5">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
