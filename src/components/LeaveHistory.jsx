import React from "react";

const LeaveHistory = () => {
  const history = [
    {
      type: "Paid Leave",
      startDate: "2025-08-10",
      endDate: "2025-08-15",
      status: "Approved",
      approvalDate: "2025-08-05",
    },
    {
      type: "Sick Leave",
      startDate: "2025-07-02",
      endDate: "2025-07-04",
      status: "Rejected",
      approvalDate: "2025-06-30",
    },
    {
      type: "Casual Leave",
      startDate: "2025-06-15",
      endDate: "2025-06-17",
      status: "Approved",
      approvalDate: "2025-06-10",
    },
  ];

  const statusStyles = {
    Approved: "bg-green-100 text-green-800 border-green-200",
    Rejected: "bg-red-100 text-red-800 border-red-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <h2 className="text-3xl font-bold text-white">Leave History</h2>
          <p className="text-blue-100 mt-1">View your complete leave request history</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 border-b-2 border-blue-200">
                <th className="text-left p-4 font-semibold text-blue-900">Leave Type</th>
                <th className="text-left p-4 font-semibold text-blue-900">Start Date</th>
                <th className="text-left p-4 font-semibold text-blue-900">End Date</th>
                <th className="text-left p-4 font-semibold text-blue-900">Status</th>
                <th className="text-left p-4 font-semibold text-blue-900">Approval Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ type, startDate, endDate, status, approvalDate }, idx) => (
                <tr
                  key={idx}
                  className="border-b border-blue-100 hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="font-medium text-gray-800">{type}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{startDate}</td>
                  <td className="p-4 text-gray-700">{endDate}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${
                        statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-200"
                      }`}
                    >
                      {status === "Approved" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {status === "Rejected" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      {status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{approvalDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {history.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-lg font-medium">No leave history found</p>
          </div>
        )}

        <div className="bg-gray-50 p-4 text-center text-sm text-gray-600 border-t border-blue-100">
          Showing {history.length} leave record(s)
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
