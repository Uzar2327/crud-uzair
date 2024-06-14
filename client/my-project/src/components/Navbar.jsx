
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
