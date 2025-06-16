import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Logo from "./ssc-logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItem = ({ to, children }) => (
    <li className="nav-item">
      <NavLink
        to={to}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        {children}
      </NavLink>
    </li>
  );

  return (
    <header className="header">
      <div className="containerh">
        {/* Logo */}
        <div className="logo-containerh">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={Logo} alt="Logo" className="swish-logo" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/experience">Experience</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contactus">Contact</NavItem>
            <NavItem to="/signup">Register</NavItem>

            {/* Dropdown for Login */}
            <li className="nav-item dropdown" ref={dropdownRef}>
              <span
                style={{ fontSize: "18px", fontWeight: "500" }}
                onClick={toggleDropdown}
                className="nav-list nav-link dropdown-toggle"
              >
                Login ▾
              </span>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="https://studiosignaturecabinets.com/customer/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Customer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Vendor
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://studiosignaturecabinets.com/admin/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
