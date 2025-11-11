import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginPage = ({ onLogin }) => {
  const [view, setView] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');
      const user = storedUsers[formData.email];
      
      if (user && user.password === formData.password) {
        onLogin(user.name || formData.email);
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please enter email and password");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (formData.email) {
      alert("Password reset link sent to " + formData.email);
      setView("login");
    } else {
      alert("Please enter your email");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      if (formData.password === formData.confirmPassword) {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');
        storedUsers[formData.email] = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };
        localStorage.setItem('users', JSON.stringify(storedUsers));
        
        alert("Account created successfully! Please login.");
        setView("login");
        setFormData({ email: formData.email, password: formData.password, name: "", confirmPassword: "" });
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Left Panel - Modern Blueish with Animated Bubbles */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 relative overflow-hidden">
        {/* Animated floating bubbles */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 shadow-xl border border-white border-opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">Leave Management System</h1>
            <p className="text-xl text-blue-100 leading-relaxed">Streamline your leave requests and approvals with our intelligent platform</p>
          </div>
          
          <div className="space-y-5 mt-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center border border-white border-opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Easy leave request submission</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center border border-white border-opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Real-time status tracking</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center border border-white border-opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Comprehensive leave analytics</span>
            </div>
          </div>
        </div>

        {/* CSS for animated bubbles */}
        <style>{`
          .bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: float 20s infinite ease-in-out;
          }
          
          .bubble-1 {
            width: 80px;
            height: 80px;
            top: 10%;
            left: 10%;
            animation-duration: 15s;
            animation-delay: 0s;
          }
          
          .bubble-2 {
            width: 120px;
            height: 120px;
            top: 60%;
            left: 70%;
            animation-duration: 20s;
            animation-delay: 2s;
          }
          
          .bubble-3 {
            width: 60px;
            height: 60px;
            top: 30%;
            left: 80%;
            animation-duration: 18s;
            animation-delay: 4s;
          }
          
          .bubble-4 {
            width: 100px;
            height: 100px;
            top: 80%;
            left: 20%;
            animation-duration: 22s;
            animation-delay: 1s;
          }
          
          .bubble-5 {
            width: 70px;
            height: 70px;
            top: 50%;
            left: 40%;
            animation-duration: 17s;
            animation-delay: 3s;
          }
          
          .bubble-6 {
            width: 90px;
            height: 90px;
            top: 15%;
            left: 50%;
            animation-duration: 19s;
            animation-delay: 5s;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.7;
            }
            25% {
              transform: translate(20px, -30px) scale(1.1);
              opacity: 0.9;
            }
            50% {
              transform: translate(-15px, -60px) scale(0.95);
              opacity: 0.6;
            }
            75% {
              transform: translate(25px, -40px) scale(1.05);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Login View */}
          {view === "login" && (
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                <p className="text-gray-500">Sign in to access your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                      placeholder="you@example.com"
                    />
                    <span className="absolute left-4 top-4 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                      placeholder="••••••••"
                    />
                    <span className="absolute left-4 top-4 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setView("forgot")}
                  className="w-full text-blue-600 hover:text-blue-700 font-semibold text-center"
                >
                  Forgot your password?
                </button>
                <div className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setView("signup")}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Forgot Password View */}
          {view === "forgot" && (
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <button
                onClick={() => setView("login")}
                className="text-gray-600 hover:text-gray-800 mb-6 flex items-center font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
                <p className="text-gray-500">Enter your email to receive reset link</p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
                >
                  Send Reset Link
                </button>
              </form>
            </div>
          )}

          {/* Signup View */}
          {view === "signup" && (
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <button
                onClick={() => setView("login")}
                className="text-gray-600 hover:text-gray-800 mb-6 flex items-center font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                <p className="text-gray-500">Join us today!</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg mt-2"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_BASE = "http://localhost:8000/api";


// const LoginPage = ({ onLogin }) => {
//   const [view, setView] = useState("login");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [status, setStatus] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const link = document.createElement('link');
//     link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//   }, []);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   // LOGIN: JWT Token via Django
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setStatus("");
//     if (formData.email && formData.password) {
//       setLoading(true);
//       try {
//         const response = await axios.post(`${API_BASE}/token/`, {
//           username: formData.email,
//           password: formData.password,
//         });
//         localStorage.setItem("access_token", response.data.access);
//         localStorage.setItem("refresh_token", response.data.refresh);
//         setStatus("Login successful!");
//         if (onLogin) onLogin(formData.email);
//         window.location.href = "/dashboard";
//       } catch (err) {
//         setStatus("Invalid email or password.");
//       }
//       setLoading(false);
//     } else {
//       setStatus("Please enter email and password.");
//     }
//   };

//   // REGISTER: Creates Django User
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setStatus("");
//     if (formData.name && formData.email && formData.password && formData.confirmPassword) {
//       if (formData.password !== formData.confirmPassword) {
//         setStatus("Passwords do not match.");
//         return;
//       }
//       setLoading(true);
//       try {
//         await axios.post(`${API_BASE}/register/`, {
//           email: formData.email,
//           password: formData.password,
//           username: formData.email, // Django expects username field
//         });
//         setStatus("Registration successful! Please login.");
//         setView("login");
//         setFormData({ email: formData.email, password: formData.password, name: "", confirmPassword: "" });
//       } catch(err) {
//   console.log(err.response?.data);
//   setStatus("Registration failed: " + JSON.stringify(err.response?.data));
// }

//       setLoading(false);
//     } else {
//       setStatus("Please fill all fields.");
//     }
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     setStatus("");
//     if (formData.email) {
//       setStatus("Password reset link sent to " + formData.email);
//       setView("login");
//     } else {
//       setStatus("Please enter your email.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
//       {/* Left Panel - Design unchanged, can keep your animated bubbles here */}
//       <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 relative overflow-hidden">
//         {/* ... animated bubbles and hero content ... */}
//       </div>
//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
//         <div className="w-full max-w-md">
//           {status && (
//             <div className={`mb-4 text-center text-sm ${status.startsWith("Registration") || status.startsWith("Login") ? "text-green-700" : "text-red-700"}`}>
//               {status}
//             </div>
//           )}
//           {view === "login" && (
//             <div className="bg-white rounded-3xl shadow-2xl p-10">
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
//                 <p className="text-gray-500">Sign in to access your account</p>
//               </div>
//               <form onSubmit={handleLogin} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//                   <div className="relative">
//                     <input
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       type="email"
//                       autoComplete="email"
//                       className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                       placeholder="you@example.com"
//                     />
//                     <span className="absolute left-4 top-4 text-gray-400">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
//                   <div className="relative">
//                     <input
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       type={showPassword ? "text" : "password"}
//                       autoComplete="current-password"
//                       className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                       placeholder="••••••••"
//                     />
//                     <span className="absolute left-4 top-4 text-gray-400">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                       </svg>
//                     </span>
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
//                   disabled={loading}
//                 >
//                   {loading ? "Signing In..." : "Sign In"}
//                 </button>
//               </form>
//               <div className="mt-8 space-y-4">
//                 <button onClick={() => setView("forgot")} className="w-full text-blue-600 font-semibold text-center">
//                   Forgot your password?
//                 </button>
//                 <div className="text-center text-gray-600">
//                   Don't have an account?{" "}
//                   <button onClick={() => setView("signup")} className="text-blue-600 font-semibold">Sign up</button>
//                 </div>
//               </div>
//             </div>
//           )}
//           {view === "forgot" && (
//             <div className="bg-white rounded-3xl shadow-2xl p-10">
//               <button
//                 onClick={() => setView("login")}
//                 className="text-gray-600 hover:text-gray-800 mb-6 flex items-center font-semibold"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back
//               </button>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
//                 <p className="text-gray-500">Enter your email to receive reset link</p>
//               </div>
//               <form onSubmit={handleForgotPassword} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     type="email"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold"
//                 >
//                   Send Reset Link
//                 </button>
//               </form>
//             </div>
//           )}
//           {view === "signup" && (
//             <div className="bg-white rounded-3xl shadow-2xl p-10">
//               <button
//                 onClick={() => setView("login")}
//                 className="text-gray-600 hover:text-gray-800 mb-6 flex items-center font-semibold"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back
//               </button>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
//                 <p className="text-gray-500">Join us today!</p>
//               </div>
//               <form onSubmit={handleSignup} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//                   <input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     type="text"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     type="email"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
//                   <input
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     type="password"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
//                   <input
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     type="password"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-800 bg-gray-50"
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold mt-2"
//                   disabled={loading}
//                 >
//                   {loading ? "Creating Account..." : "Create Account"}
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
