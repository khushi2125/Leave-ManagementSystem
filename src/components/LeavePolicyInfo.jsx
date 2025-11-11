

// const LeavePolicyInfo = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6 text-purple-800 border-b border-purple-300 pb-2">
//         Leave Policy Information
//       </h2>
//       <div className="text-purple-700 text-lg space-y-2 max-w-4xl">
//         <p>- Sick Leave: 12 days per year</p>
//         <p>- Casual Leave: 15 days per year</p>
//         <p>- Paid Leave: 20 days per year</p>
//         <p>- Leave requests must be submitted at least 3 days in advance.</p>
//         <p>- Approval required from the manager.</p>
//         <p>- Unused leaves can be carried over up to 10 days.</p>
//       </div>
//     </div>
//   );
// };

// export default LeavePolicyInfo;
import React from "react";
import { FaClipboardList, FaCheckCircle, FaCalendarAlt, FaExclamationCircle, FaUserTie, FaInfoCircle } from "react-icons/fa";

const LeavePolicyInfo = () => {
  const leaveTypes = [
    { icon: <FaCheckCircle className="text-green-500 w-6 h-6" />, title: "Sick Leave", days: "12 days per year", color: "green" },
    { icon: <FaCheckCircle className="text-blue-500 w-6 h-6" />, title: "Casual Leave", days: "15 days per year", color: "blue" },
    { icon: <FaCheckCircle className="text-purple-500 w-6 h-6" />, title: "Paid Leave", days: "20 days per year", color: "purple" },
  ];

  const policyRules = [
    { icon: <FaCalendarAlt className="text-blue-600 w-5 h-5" />, text: "Leave requests must be submitted at least 3 days in advance." },
    { icon: <FaUserTie className="text-indigo-600 w-5 h-5" />, text: "Approval required from the manager." },
    { icon: <FaExclamationCircle className="text-amber-600 w-5 h-5" />, text: "Unused leaves can be carried over up to 10 days." },
    { icon: <FaInfoCircle className="text-teal-600 w-5 h-5" />, text: "Emergency leaves require immediate notification to HR." },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <FaClipboardList className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Leave Policy Information</h2>
              <p className="text-blue-100 mt-1">Company leave guidelines and regulations</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Leave Types Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-600 mr-3 rounded"></span>
              Annual Leave Entitlements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {leaveTypes.map(({ icon, title, days, color }, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`bg-${color}-100 p-2 rounded-lg`}>{icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{days.split(" ")[0]}</p>
                  <p className="text-sm text-gray-600">{days.split(" ").slice(1).join(" ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Rules Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-indigo-600 mr-3 rounded"></span>
              Important Policy Rules
            </h3>
            <div className="space-y-3">
              {policyRules.map(({ icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="bg-white p-2 rounded-lg shadow-sm mt-0.5">{icon}</div>
                  <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <FaInfoCircle className="text-amber-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Need More Information?</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For detailed leave policies, special circumstances, or clarifications, please contact HR at{" "}
                  <a href="mailto:hr@company.com" className="text-blue-600 font-medium hover:underline">
                    hr@company.com
                  </a>{" "}
                  or visit the HR portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePolicyInfo;
