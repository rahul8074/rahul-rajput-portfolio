import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md relative z-10"
    >
      <div className="text-2xl font-bold text-gray-800 dark:text-white">Rahul Rajput</div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-800 dark:text-white hover:underline">Home</Link>
        <Link to="/about" className="text-gray-800 dark:text-white hover:underline">About</Link>
        <Link to="/experience" className="text-gray-800 dark:text-white hover:underline">Experience</Link>
        <Link to="/projects" className="text-gray-800 dark:text-white hover:underline">Projects</Link>
        <Link to="/contact" className="text-gray-800 dark:text-white hover:underline">Contact</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className="hidden md:block">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/" className="text-gray-800 dark:text-white hover:underline" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:underline" onClick={toggleMenu}>About</Link>
          <Link to="/experience" className="text-gray-800 dark:text-white hover:underline" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" className="text-gray-800 dark:text-white hover:underline" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="text-gray-800 dark:text-white hover:underline" onClick={toggleMenu}>Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
