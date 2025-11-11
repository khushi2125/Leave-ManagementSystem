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
  ];

  const statusClass = (status) =>
    status === "Approved" ? "text-green-600 font-semibold" : "text-red-600 font-semibold";

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800 border-b border-purple-300 pb-2">
        Leave History
      </h2>
      <table className="w-full table-auto border-collapse text-left max-w-5xl">
        <thead>
          <tr className="bg-purple-100">
            <th className="border-b border-purple-300 p-3">Leave Type</th>
            <th className="border-b border-purple-300 p-3">Start Date</th>
            <th className="border-b border-purple-300 p-3">End Date</th>
            <th className="border-b border-purple-300 p-3">Status</th>
            <th className="border-b border-purple-300 p-3">Approval Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ type, startDate, endDate, status, approvalDate }, idx) => (
            <tr key={idx} className="hover:bg-purple-50 transition-colors">
              <td className="border-b border-purple-200 p-3">{type}</td>
              <td className="border-b border-purple-200 p-3">{startDate}</td>
              <td className="border-b border-purple-200 p-3">{endDate}</td>
              <td className={`border-b border-purple-200 p-3 ${statusClass(status)}`}>{status}</td>
              <td className="border-b border-purple-200 p-3">{approvalDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;

