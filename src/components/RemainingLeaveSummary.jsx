import React from "react";
import { FaHeartbeat, FaSun, FaMoneyBillWave } from "react-icons/fa";

const leaves = [
  { type: "Sick Leave", remaining: 10, total: 12, icon: <FaHeartbeat className="w-7 h-7 text-green-600" />, color: "green" },
  { type: "Casual Leave", remaining: 12, total: 15, icon: <FaSun className="w-7 h-7 text-emerald-600" />, color: "emerald" },
  { type: "Paid Leave", remaining: 5, total: 20, icon: <FaMoneyBillWave className="w-7 h-7 text-teal-600" />, color: "teal" },
];

const RemainingLeaveSummary = () => {
  const totalRemaining = leaves.reduce((sum, leave) => sum + leave.remaining, 0);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 p-6">
          <h2 className="text-3xl font-bold text-white">Remaining Leave Summary</h2>
          <p className="text-green-50 mt-1 text-sm">Track your available leave balance</p>
        </div>

        <div className="p-8">
          {/* Total Summary Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8 text-center">
            <p className="text-sm text-gray-600 mb-2">Total Remaining Leaves</p>
            <p className="text-5xl font-bold text-green-600">{totalRemaining}</p>
            <p className="text-xs text-gray-500 mt-2">days available</p>
          </div>

          {/* Leave Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaves.map(({ type, remaining, total, icon, color }, idx) => {
              const percentage = (remaining / total) * 100;
              
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-${color}-100 rounded-lg shadow-sm`}>
                      {icon}
                    </div>
                    <span className="text-3xl font-bold text-green-600">{remaining}</span>
                  </div>
                  
                  <h3 className="text-base font-semibold text-gray-800 mb-2">{type}</h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className={`bg-gradient-to-r from-${color}-400 to-${color}-600 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{remaining} days left</span>
                    <span>{total} total</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-green-700">Note:</span> Make sure to plan your leaves in advance. 
              Unused leaves may be carried forward according to company policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemainingLeaveSummary;

