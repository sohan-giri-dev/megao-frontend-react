import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center px-8 py-4">
      {/* Left Section: Logo and Navigation Links */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-2xl font-bold">MegaGo</div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Trip
          </a>
          <a href="#" className="hover:underline">
            Sharing
          </a>
          <a href="#" className="hover:underline">
            Shuttle
          </a>
          <a href="#" className="hover:underline">
            Reserve
          </a>
          <div className="relative group">
            <a href="#" className="hover:underline">
              About
            </a>
            {/* Dropdown Placeholder (if needed) */}
            <div className="absolute left-0 hidden w-40 mt-2 bg-white text-black rounded-md shadow-lg group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Company
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Utilities */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="flex items-center space-x-1">
          <span className="text-xl">🌐</span>
          <span>EN</span>
        </div>

        {/* Links */}
        <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          Log in
        </a>

        {/* Sign Up Button */}
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
