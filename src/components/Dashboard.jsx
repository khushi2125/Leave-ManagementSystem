import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import DashboardOverview from "./DashboardOverview";
import Sidebar from "./Sidebar";
import ApplyForLeave from "./ApplyForLeave";
import LeaveStatus from "./LeaveStatus";
import LeaveCalendar from "./LeaveCalendar";
import RemainingLeaveSummary from "./RemainingLeaveSummary";
import LeaveHistory from "./LeaveHistory";
import LeavePolicyInfo from "./LeavePolicyInfo";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle smooth transitions when changing features
  const handleFeatureSelect = (featureKey) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedFeature(featureKey);
      setIsTransitioning(false);
    }, 200);
  };

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  const renderFeature = () => {
    switch (selectedFeature) {
      case "dashboardOverview":
        return <DashboardOverview onSelect={handleFeatureSelect} />;
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
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Get Started</h3>
            <p className="text-gray-600 text-center max-w-md">
              Select a feature from the sidebar or overview cards to begin managing your leaves.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-sky-50 to-white font-sans">
      {/* Sidebar - always visible with enhanced styling */}
      <Sidebar 
        selectedKey={selectedFeature} 
        onSelect={handleFeatureSelect} 
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-sky-200 px-8 py-6 shadow-sm">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-500">
                Welcome, {user}
              </h1>
              <p className="text-sm text-gray-500 mt-1">Manage your leave requests and track your time off</p>
            </div>
            <button
              onClick={() => {
                setUser(null);
                setSelectedFeature(null);
              }}
              className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-sky-600 transition-all duration-300 font-semibold"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Show overview when no feature selected */}
            {!selectedFeature && (
              <div className="animate-fadeIn">
                <DashboardOverview onSelect={handleFeatureSelect} />
              </div>
            )}

            {/* Back button when inside feature (but not dashboardOverview) */}
            {selectedFeature && selectedFeature !== "dashboardOverview" && (
              <button
                onClick={() => handleFeatureSelect(null)}
                className="mb-6 text-blue-700 hover:text-blue-900 font-semibold transition-all duration-300 flex items-center space-x-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Overview</span>
              </button>
            )}

            {/* Feature Section with smooth transitions */}
            {selectedFeature && (
              <div 
                className={`transition-all duration-500 transform ${
                  isTransitioning 
                    ? "opacity-0 translate-y-4" 
                    : "opacity-100 translate-y-0"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-sky-100 overflow-hidden">
                  <div className="p-8">
                    {renderFeature()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
