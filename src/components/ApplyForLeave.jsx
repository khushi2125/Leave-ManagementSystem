// import React, { useState } from "react";
// import { FaPaperPlane, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

// const ApplyForLeave = () => {
//   const [formData, setFormData] = useState({
//     leaveType: "Sick Leave",
//     startDate: "",
//     endDate: "",
//     reason: "",
//   });
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setTimeout(() => {
//       alert("Leave request submitted successfully!");
//       setSubmitting(false);
//       setFormData({ leaveType: "Sick Leave", startDate: "", endDate: "", reason: "" });
//     }, 1500);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-sky-200 overflow-hidden">
//         {/* Header with gradient */}
//         <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 p-6">
//           <div className="flex items-center space-x-3">
//             <div className="bg-white p-3 rounded-lg shadow-md">
//               <FaPaperPlane className="w-6 h-6 text-blue-600" />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-white">Apply for Leave</h2>
//               <p className="text-blue-50 mt-1 text-sm">Submit your leave request</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Leave Type */}
//             <div>
//               <label className="flex items-center mb-2 font-semibold text-gray-700">
//                 <FaFileAlt className="w-4 h-4 mr-2 text-blue-600" />
//                 Leave Type
//               </label>
//               <select
//                 name="leaveType"
//                 value={formData.leaveType}
//                 onChange={handleChange}
//                 className="w-full border border-sky-300 rounded-lg p-3 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-gray-800"
//                 required
//               >
//                 <option>Sick Leave</option>
//                 <option>Casual Leave</option>
//                 <option>Paid Leave</option>
//               </select>
//             </div>

//             {/* Date Range */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="flex items-center mb-2 font-semibold text-gray-700">
//                   <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-600" />
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   className="w-full border border-sky-300 rounded-lg p-3 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-gray-800"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="flex items-center mb-2 font-semibold text-gray-700">
//                   <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-600" />
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   className="w-full border border-sky-300 rounded-lg p-3 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-gray-800"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Reason */}
//             <div>
//               <label className="block mb-2 font-semibold text-gray-700">
//                 Reason for Leave
//               </label>
//               <textarea
//                 name="reason"
//                 value={formData.reason}
//                 onChange={handleChange}
//                 rows="5"
//                 className="w-full border border-sky-300 rounded-lg p-3 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-gray-800 resize-none"
//                 placeholder="Please provide a detailed reason for your leave request..."
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={submitting}
//               className={`w-full py-4 rounded-lg text-white font-semibold transition-all duration-300 shadow-md ${
//                 submitting
//                   ? "bg-sky-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 hover:shadow-lg transform hover:-translate-y-0.5"
//               }`}
//             >
//               {submitting ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                   </svg>
//                   Submitting...
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center">
//                   <FaPaperPlane className="mr-2" />
//                   Submit Leave Request
//                 </span>
//               )}
//             </button>
//           </form>

//           {/* Info Section */}
//           <div className="mt-6 bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
//             <p className="text-sm text-gray-700">
//               <span className="font-semibold text-blue-700">Note:</span> Leave requests must be submitted at least 3 days in advance. 
//               You will receive a notification once your request is reviewed by your manager.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyForLeave;

import React, { useState } from "react";
import axios from "axios";

export default function ApplyForLeave() {
  const [form, setForm] = useState({
    leave_type: "",   // "sick", "casual", "earned" etc
    start_date: "",
    end_date: "",
    reason: "",
    // Optionally, add fields like "name", "email" if you have them
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");
    try {
      // Backend expects leave_type, start_date, end_date, reason
      await axios.post("http://localhost:8000/api/leaves/", form);
      setStatus("Leave request submitted and saved in database!");
      setForm({ leave_type: "", start_date: "", end_date: "", reason: "" });
    } catch (err) {
      setStatus("Failed to submit! " + (err.response?.data?.detail || "Please check all fields."));
    }
    setSubmitting(false);
  };

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Apply for Leave</h2>
      <label>Leave Type</label>
      <select name="leave_type" value={form.leave_type} onChange={handleChange} required className="mb-2 w-full border rounded p-2">
        <option value="">Select</option>
        <option value="sick">Sick Leave</option>
        <option value="casual">Casual Leave</option>
        <option value="earned">Earned Leave</option>
      </select>
      <label>Start Date</label>
      <input type="date" name="start_date" value={form.start_date} onChange={handleChange} required className="mb-2 w-full border rounded p-2" />
      <label>End Date</label>
      <input type="date" name="end_date" value={form.end_date} onChange={handleChange} required className="mb-2 w-full border rounded p-2" />
      <label>Reason</label>
      <textarea name="reason" value={form.reason} onChange={handleChange} required rows={3} className="mb-2 w-full border rounded p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Leave"}
      </button>
      {status && <div className="mt-4 text-center text-blue-800">{status}</div>}
    </form>
  );
}
