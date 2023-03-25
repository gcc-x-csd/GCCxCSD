'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hidden lg:flex mt-10 font-semibold text-white text-[22px]">
      <ul className="flex mx-auto gap-x-28 cursor-pointer">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/">GCSC</NavItem>
        <DropdownItem label="CS x Resources" isOpen={isOpen} onClick={handleDropdown}>
          <NavItem href="/" className="text-sm">CS x Library</NavItem>
          <NavItem href="/" className="text-sm">CS x PYQPS</NavItem>
          <NavItem href="/" className="text-sm">CS x Practicals</NavItem>
        </DropdownItem>
        <NavItem href="/">CS x Alumni</NavItem>
        <NavItem href="/">CS x About</NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ href, children, className }) => (
  <li className={className}>
    <a href={href}>{children}</a>
  </li>
);

const DropdownItem = ({ label, isOpen, onClick, children }) => (
  <li>
    <button type="button" onClick={onClick}>
      {label}
    </button>
    {isOpen && (
      <ul className="flex flex-col space-y-4 text-white text-lg font-semibold text-center">
        {children}
      </ul>
    )}
  </li>
);

export default Navbar;
