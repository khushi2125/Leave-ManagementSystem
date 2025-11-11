import React, { useState } from "react";
import LoginPage from "./LoginPage";
import DashboardOverview from "./DashboardOverview";

// Import feature components to be created next
import ApplyForLeave from "./ApplyForLeave";
import LeaveStatus from "./LeaveStatus";
import LeaveCalendar from "./LeaveCalendar";
import RemainingLeaveSummary from "./RemainingLeaveSummary";
import LeaveHistory from "./LeaveHistory";
import LeavePolicyInfo from "./LeavePolicyInfo";

const Dashboard = () => {
  const [user, setUser] = useState(null); // holds username if logged in
  const [selectedFeature, setSelectedFeature] = useState(null);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  const renderFeature = () => {
    switch (selectedFeature) {
      case "applyLeave":
        return <ApplyForLeave />;
      case "leaveStatus":
        return <LeaveStatus />;
      case "leaveCalendar":
        return <LeaveCalendar />;
      case "leaveSummary":
        return <RemainingLeaveSummary />;
      case "leaveHistory":
        return <LeaveHistory />;
      case "leavePolicy":
        return <LeavePolicyInfo />;
      default:
        return (
          <p className="text-purple-700 mt-10 text-center text-lg">
            Select a feature from above cards to get started.
          </p>
        );
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-tr from-purple-100 via-white to-purple-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-purple-900">Welcome, {user}</h1>
          <button
            onClick={() => {
              setUser(null);
              setSelectedFeature(null);
            }}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Logout
          </button>
        </header>

        <DashboardOverview onSelect={setSelectedFeature} />

        <section className="mt-12 bg-white rounded-xl shadow-md p-8">{renderFeature()}</section>
      </div>
    </div>
  );
};

export default Dashboard;
