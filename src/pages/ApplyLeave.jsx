import React, { useState } from "react";

const ApplyForLeave = () => {
  const [formData, setFormData] = useState({
    leaveType: "Sick Leave",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert("Leave request submitted");
      setSubmitting(false);
      setFormData({ leaveType: "Sick Leave", startDate: "", endDate: "", reason: "" });
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800 border-b border-purple-300 pb-2">
        Apply for Leave
      </h2>
      <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-medium text-purple-700">Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          >
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Paid Leave</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-purple-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-purple-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium text-purple-700">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="4"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Describe your reason for leave"
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
            submitting ? "bg-purple-400 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Leave Request"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForLeave;
