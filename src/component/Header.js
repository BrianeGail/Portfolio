import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">BGC.</h1>
        <nav className="flex space-x-6">
          <a href="#about" className="text-white hover:text-blue-200">About</a>
          <a href="#project" className="text-white hover:text-blue-200">Project</a>
          <a href="#skills" className="text-white hover:text-blue-200">Skills</a>
          <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
