import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header>
      {/* NavBar for large devices */}
      <nav className="bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] border-b border-gray-700 text-gray-300 fixed z-50 top-0 left-0 w-full hidden lg:flex justify-center space-x-4 py-4 px-6 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="h-12 w-12 md:h-16 md:w-16 transform transition-transform duration-300 hover:scale-110"
            src="NavBar.png"
            alt="Navbar"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex items-center justify-center text-center gap-6 md:gap-10">
          <Link
            to="/"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive('/') ? 'text-yellow-400' : ''}`}
          >
            Home
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive('/') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
          </Link>
          <Link
            to="/about-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive('/about-us') ? 'text-yellow-400' : ''}`}
          >
            About Us
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive('/about-us') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
          </Link>
          <Link
            to="/features"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive('/features') ? 'text-yellow-400' : ''}`}
          >
            Features
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive('/features') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
          </Link>
          {/* <Link
            to="/reports"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive('/reports') ? 'text-yellow-400' : ''}`}
          >
            Reports
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive('/reports') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
          </Link> */}
          <Link
            to="/contact-us"
            className={`relative group cursor-pointer transition-colors duration-300 hover:text-yellow-400 ${isActive('/contact-us') ? 'text-yellow-400' : ''}`}
          >
            Contact Us
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400 transform ${isActive('/contact-us') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
          </Link>
        </div>

        {/* Action Buttons and Avatar */}
        <div className="flex items-center gap-6 md:gap-8 text-black">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm font-bold rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-md">
                  Dashboard
                </button>
              </Link>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"
                size="40"
                round={true}
                className="transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
              />
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm font-bold rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-md">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm font-bold rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-md">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
