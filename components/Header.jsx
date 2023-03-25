'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleDropdown = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      <header className="box-border flex items-center my-8 mx-16">
        <div className="absolute w-[25%] h-[25%] inset-0 gradient-01" />
        <div className="mr-auto">
          <h1 className="font-extrabold text-[40px] leading-[30px] text-white text-center">GCC <span className="text-[#D61818]">x</span> CSD</h1>
        </div>
        <div className="relative inline-block">
          <button type="button" className="flex items-center space-x-2 text-gray-600" onClick={handleDropdown}>
            <img className="h-8 w-8 rounded-full" alt="profile-pic" src="./GClogo.png" />
          </button>
          {showProfileMenu && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <span className="block px-4 py-2 text-sm text-gray-700">Guest</span>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700">Sign up</a>
              <a href="/" className="block px-4 py-2 text-sm text-gray-700">Log in</a>
            </div>
          </div>
          )}
        </div>
        <Sidebar />
      </header>
      <Navbar />
    </>
  );
};

export default Header;
