import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link to='/' className="text-white font-bold text-lg">Home</Link>
            <div className="flex">
                <Link to='/login' className="text-white mx-4">Login</Link>
                <Link to='/register' className="text-white">Register</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
