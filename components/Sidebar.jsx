'use client';

import { useState } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const handleResourcesToggle = () => {
    setShowResources(!showResources);
  };

  return (
    <aside className="md:hidden">
      {showSidebar ? (
        <button type="button" className="flex text-2xl text-white items-center cursor-pointer fixed right-10 top-10 z-50" onClick={handleSidebarToggle}>
          X
        </button>
      ) : (
        <button type="button" className="flex items-center cursor-pointer fixed z-30 right-10 top-10" onClick={handleSidebarToggle}>
          <img src="/menu.svg" alt="menu" className="w-8 object-contain" id="menu" />
        </button>
      )}
      <div className={`top-0 right-0 w-full bg-black p-10 pl-12 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}>
        <h1 className="font-extrabold text-[40px] leading-[30px] text-white text-center">GCC <span className="text-[#D61818]">x</span> CSD</h1>
        <ul className="flex flex-col space-y-14 text-white text-lg font-semibold text-center">
          <li />
          <li><a href="/">Home</a></li>
          <li><a href="/">GCSC</a></li>
          <li>
            <button type="button" onClick={handleResourcesToggle}>
              CS x Resources
            </button>
            {showResources && (
              <ul className="flex flex-col space-y-4 text-white text-lg font-semibold text-center">
                <li><a href="/" className="block px-4 py-2 text-sm">CS x Library</a></li>
                <li><a href="/" className="block px-4 py-2 text-sm">CS x PYQPS</a></li>
                <li><a href="/" className="block px-4 py-2 text-sm">CS x Practicals</a></li>
              </ul>
            )}
          </li>
          <li><a href="/">CS x Alumni</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
