// import React from "react";
// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
// import ApplyLeave from './pages/ApplyLeave';
// import LeaveHistory from './pages/LeaveHistory';
// import AdminPanel from './pages/AdminPanel';
// // import LoginPage from './pages/LoginPage';
// import { Routes, Route } from 'react-router-dom';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <Navbar />
//       <main className="p-4">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           {/* <Route path="/login" element={<LoginPage />} /> */}
//           <Route path="/apply-leave" element={<ApplyLeave />} />
//           <Route path="/leave-history" element={<LeaveHistory />} />
//           <Route path="/admin" element={<AdminPanel />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }
import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return <Dashboard />;
};

export default App;

// function App() {
//   return <div className="text-5xl text-red-600 font-bold">TAILWIND TEST
// </div>
// ;

  
// }

// export default App;





