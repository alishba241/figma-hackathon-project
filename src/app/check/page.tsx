"use client";

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Check = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4 md:px-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-black">cyber</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <FaSearch />
          <FaHeart />
          <FaShoppingCart />
          <FaUser />
        </div>
        <div className="md:hidden">
          <button title='abc' onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default Check;

