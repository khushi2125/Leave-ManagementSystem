

// const LeaveStatus = () => {
//   const leaveRequests = [
//     { type: "Sick Leave", dates: "2025-10-25 to 2025-10-27", status: "Pending" },
//     { type: "Casual Leave", dates: "2025-09-15 to 2025-09-16", status: "Approved" },
//   ];

//   const getStatusClass = (status) => {
//     if (status === "Approved") return "text-green-600 font-semibold";
//     if (status === "Pending") return "text-yellow-600 font-semibold";
//     return "text-red-600 font-semibold";
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6 text-purple-800 border-b border-purple-300 pb-2">
//         Leave Status
//       </h2>
//       <table className="w-full table-auto border-collapse text-left max-w-4xl">
//         <thead>
//           <tr className="bg-purple-100">
//             <th className="border-b border-purple-300 p-3">Leave Type</th>
//             <th className="border-b border-purple-300 p-3">Dates</th>
//             <th className="border-b border-purple-300 p-3">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map(({ type, dates, status }, idx) => (
//             <tr key={idx} className="hover:bg-purple-50 transition-colors">
//               <td className="border-b border-purple-200 p-3">{type}</td>
//               <td className="border-b border-purple-200 p-3">{dates}</td>
//               <td className={`border-b border-purple-200 p-3 ${getStatusClass(status)}`}>
//                 {status}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaveStatus;
import React from "react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const LeaveStatus = () => {
  const leaveRequests = [
    { type: "Sick Leave", dates: "2025-10-25 to 2025-10-27", status: "Pending" },
    { type: "Casual Leave", dates: "2025-09-15 to 2025-09-16", status: "Approved" },
    { type: "Paid Leave", dates: "2025-08-20 to 2025-08-22", status: "Rejected" },
  ];

  const statusStyles = {
    Approved: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-300",
      icon: <FaCheckCircle className="w-4 h-4" />
    },
    Pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-300",
      icon: <FaClock className="w-4 h-4" />
    },
    Rejected: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-300",
      icon: <FaTimesCircle className="w-4 h-4" />
    },
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-sky-200 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 p-6">
          <h2 className="text-3xl font-bold text-white">Leave Status</h2>
          <p className="text-blue-50 mt-1 text-sm">Track your leave requests and their current status</p>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">
                {leaveRequests.filter(req => req.status === "Approved").length}
              </p>
              <p className="text-xs text-gray-600 mt-1">Approved</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {leaveRequests.filter(req => req.status === "Pending").length}
              </p>
              <p className="text-xs text-gray-600 mt-1">Pending</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-600">
                {leaveRequests.filter(req => req.status === "Rejected").length}
              </p>
              <p className="text-xs text-gray-600 mt-1">Rejected</p>
            </div>
          </div>

          {/* Leave Requests Cards */}
          <div className="space-y-4">
            {leaveRequests.map(({ type, dates, status }, idx) => {
              const style = statusStyles[status];
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-sky-50 to-white border border-sky-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <h3 className="text-lg font-bold text-gray-800">{type}</h3>
                      </div>
                      <p className="text-sm text-gray-600 ml-5">{dates}</p>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${style.bg} ${style.text} border ${style.border}`}>
                      {style.icon}
                      <span className="font-semibold text-sm">{status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {leaveRequests.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-sky-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">No leave requests found</p>
              <p className="text-gray-400 text-sm mt-1">Submit your first leave request to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveStatus;
