

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-semibold text-gray-800">LeaveSys</h1>
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-600 hover:text-blue-600 transition">Home</button>
//         <button className="text-gray-600 hover:text-blue-600 transition">Profile</button>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Sun, Moon } from 'lucide-react'; // Use lucide icons or similar

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle('dark', !dark);
  };

  return (
    <nav className="backdrop-blur-lg bg-white/50 dark:bg-[#232847]/50 shadow-glass flex items-center justify-between p-4 rounded-b-2xl">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Company Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-blue-700 dark:text-blue-200">Leave Portal</span>
      </div>
      <div className="flex gap-6 items-center">
        {/* Add <Link> navigation as before */}
        <button
          onClick={toggleDark}
          className="rounded-full p-2 hover:bg-blue-100 dark:hover:bg-blue-950 transition"
          aria-label="Toggle Dark Mode"
        >
          {dark ?
            <Sun size={20} className="text-yellow-400" /> :
            <Moon size={20} className="text-blue-700" />}
        </button>
      </div>
    </nav>
  );
}
