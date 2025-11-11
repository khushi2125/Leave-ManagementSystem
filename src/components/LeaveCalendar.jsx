
import React, { useState } from "react";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LeaveCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sample leave data
  const leaveData = [
    { date: "2025-10-25", type: "Sick Leave", status: "Approved" },
    { date: "2025-10-26", type: "Sick Leave", status: "Approved" },
    { date: "2025-10-27", type: "Sick Leave", status: "Approved" },
    { date: "2025-11-15", type: "Casual Leave", status: "Pending" },
    { date: "2025-11-16", type: "Casual Leave", status: "Pending" },
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getLeaveForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return leaveData.find(leave => leave.date === dateStr);
  };

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const today = new Date();
  const isToday = (day) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-pink-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <FaCalendarAlt className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Personal Leave Calendar</h2>
              <p className="text-pink-100 text-xs">View your leave schedule</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-2 rounded-lg hover:bg-pink-100 transition-colors"
              aria-label="Previous month"
            >
              <FaChevronLeft className="w-4 h-4 text-pink-600" />
            </button>
            <h3 className="text-lg font-bold text-gray-800">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-pink-100 transition-colors"
              aria-label="Next month"
            >
              <FaChevronRight className="w-4 h-4 text-pink-600" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-pink-50 rounded-lg p-3">
            {/* Day names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center font-semibold text-pink-700 text-xs py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                const leave = day ? getLeaveForDate(day) : null;
                const isTodayDate = day && isToday(day);

                return (
                  <div
                    key={index}
                    className={`
                      aspect-square flex flex-col items-center justify-center rounded-md p-1 text-xs transition-all
                      ${!day ? "invisible" : ""}
                      ${isTodayDate ? "bg-pink-600 text-white font-bold ring-2 ring-pink-400" : "bg-white"}
                      ${leave && leave.status === "Approved" && !isTodayDate ? "bg-green-100 text-green-800 font-semibold border border-green-400" : ""}
                      ${leave && leave.status === "Pending" && !isTodayDate ? "bg-yellow-100 text-yellow-800 font-semibold border border-yellow-400" : ""}
                      ${!leave && !isTodayDate ? "text-gray-700 hover:bg-pink-100 cursor-pointer" : ""}
                    `}
                  >
                    <span className="text-sm">{day}</span>
                    {leave && (
                      <span className="text-[10px] mt-0.5 truncate w-full text-center">
                        Leave
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-pink-600 rounded"></div>
              <span className="text-gray-700">Today</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-100 border border-green-400 rounded"></div>
              <span className="text-gray-700">Approved</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-100 border border-yellow-400 rounded"></div>
              <span className="text-gray-700">Pending</span>
            </div>
          </div>

          {/* Upcoming Leaves */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
              <span className="w-1 h-4 bg-pink-600 mr-2 rounded"></span>
              Upcoming Leaves
            </h4>
            <div className="space-y-2">
              {leaveData.slice(0, 2).map((leave, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-pink-50 border border-pink-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-pink-600 w-4 h-4" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{leave.type}</p>
                      <p className="text-xs text-gray-600">{leave.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      leave.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {leave.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveCalendar;
