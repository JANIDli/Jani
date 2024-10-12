import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container sticky top-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className=" nav-band flex-shrink-0">
            <a href="#" className="text-white text-5xl font-bold">Janitha</a>
          </div>
          <div className="hidden md:flex justify-center items-center flex-grow space-x-4" >
          <Link to="/" className="text-white hover:text-gray-900 p-6">Home</Link> {/* Link to Home page */}
            <a href="#" className="text-white hover:text-gray-900 p-6 ">About</a>
            <a href="#" className="text-white hover:text-gray-900 p-6">Services</a>
            <a href="#" className="text-white hover:text-gray-900 p-6">Contact</a>
          </div>
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={`${isOpen ? 'hidden' : 'inline-flex'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path className={`${isOpen ? 'inline-flex' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="  px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
