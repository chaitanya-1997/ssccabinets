// import React, { useState } from 'react';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., API call)
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Remember Me:', rememberMe);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Customer-Login</h2>
//         <form className="login-form" onSubmit={handleLogin}>
//           {/* Email Input */}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="form-options">
//             <div className="remember-me">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               <label htmlFor="rememberMe">Remember me</label>
//             </div>
//             <a href="#" className="forgot-password">Forgot password?</a>
//           </div>

//           {/* Login Button */}
//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         {/* Register Prompt */}
//         <p className="register-prompt">
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

//----------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import "./LoginPage.css";
import loginpage from "./images/login1.gif";
import ssclogo from "./images/ssc-logo.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="illustration-container">
          {/* Placeholder for illustration; replace with actual image in assets */}
          <img
            src={loginpage}
            alt="SSC Illustration"
            className="illustration"
          />
        </div>
      </div>
      <div className="login-right">
        <div className="login-container">
          <img src={ssclogo} alt="SSC Logo" className="logo" />
          <h2>Customer Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="register-prompt">
            Don't have an account?
            {/* <a href="/register">Register</a> */}
            <Link to="/signup" className="register-link">
              Register
            </Link>
          </p>
        </div>
        <footer className="login-footer">
          <a href="">Privacy Policy</a> | <a href="">Terms of Service</a> |{" "}
          <a href="">Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
