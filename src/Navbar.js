import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLogIn, handleLogin, handleLogout }) => {
  return (
    <nav className="bg-white p-4 flex justify-center items-center shadow-md">
      <div className="flex items-center">
        <img src="./assets/logo.png" alt="Logo" className="h-10 mr-2" />
      </div>
      <div className="flex items-center space-x-6 ml-6">
        <Link to="/" className={`text-gray-800 font-medium ${
            !isLogIn && "pointer-events-none opacity-50" 
          }`}>
          Beranda
        </Link>
        <Link to="/about" className={`text-gray-800 font-medium ${
            !isLogIn && "pointer-events-none opacity-50"
          }`}>
          Tentang Kami
        </Link>
        <Link to="/help" className={`text-gray-800 font-medium ${
            !isLogIn && "pointer-events-none opacity-50"
          }`}>
          Bantuan
        </Link>
        <Link to="/media" className={`text-gray-800 font-medium ${
            !isLogIn && "pointer-events-none opacity-50"
          }`}>
          Media
        </Link>
        <Link to="/contact" className={`text-gray-800 font-medium ${
            !isLogIn && "pointer-events-none opacity-50"
          }`}>
          Kontak
        </Link>
        {isLogIn ? (
          <button onClick={handleLogout} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Logout
          </button>) : (
          <button onClick={handleLogin} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
