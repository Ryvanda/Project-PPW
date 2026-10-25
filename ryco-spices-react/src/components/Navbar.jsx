import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header" id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2">
          {/* Brand Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
            <img 
              src="/images/logo.webp" 
              alt="Ryco Spices Official Logo" 
              width="150" 
              height="48" 
              className="d-inline-block align-text-top"
            />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded={isOpen ? 'true' : 'false'} 
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
            id="mobile-menu-toggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/" 
                  end
                  onClick={closeNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/about"
                  onClick={closeNavbar}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/products"
                  onClick={closeNavbar}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/news"
                  onClick={closeNavbar}
                >
                  News &amp; Insights
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/contact"
                  onClick={closeNavbar}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <Link 
                  to="/contact" 
                  className="btn btn-primary px-3 py-2 w-100 w-lg-auto" 
                  id="nav-cta-btn"
                  onClick={closeNavbar}
                >
                  <i className="bi bi-file-earmark-text me-1"></i> Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
