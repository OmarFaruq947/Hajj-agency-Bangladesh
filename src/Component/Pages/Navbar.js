import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>

      <li>
        <Link to="/information">Information Places</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/faq">Faq</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar shadow-sm fixe bg-gradient-to-r from-gray-100 to-gray-300 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gradient-to-r from-gray-100 to-gray-300"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/home">
            <img className="h-12  ml-5 " src={logo} alt="loading..." />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
