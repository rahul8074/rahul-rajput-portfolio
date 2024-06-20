import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/rahul-rajput-1a8353194/" className="text-2xl"><FaLinkedin /></a>
          <a href="https://github.com/rahul8074" className="text-2xl"><FaGithub /></a>
          <a href="mailto:rahulrajput8074@gmail.com" className="text-2xl"><FaRegEnvelope /></a>
          <a href="tel:+917974039748" className="text-2xl"><FaPhoneAlt /></a>
        </div>
        <p className="mt-4">&copy; 2024 Rahul Rajput. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
