import React from "react";
import { Link } from "react-router-dom";

const TinyNavbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx--auto px-4">
          <div className="flex justify-between py-1">
            {/* contact info */}
            <div className="hidden md:flex space-x-2 divide-x-2 divide-black divide-opacity-30 text-sm">
              <a
                href
                className="flex space-x-1 items-center border-gray-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+880 1844-509199</span>
              </a>
              <a
                href
                className="flex space-x-1 md:pl-4 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span> hajjbangladesh@dragon.com</span>
              </a>
            </div>

            <div className="hidden md:flex space-x-2 absolute right-40 divide-x-2 divide-black divide-opacity-30 text-sm">
              <Link
                to="/location"
                className=" flex space-x-1 px-2 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Store location</span>
              </Link>

              <Link
                to="/news"
                className="flex space-x-1 px-4 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Hot News</span>
              </Link>
            </div>

            {/*    secondary navbar  */}
            <div className=" md:text-sm text-xs md:flex absolute right-2 space-x-2 px-1 md:border-l-2 border-gray-400 ">
              <Link
                to="/login"
                className="flex space-x-1 px-2 items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </Link>
              <Link
                to="/registration"
                className=" px-2 bg-yellow-400 text-green-700 hover:text-green-900 rounded transition duration-300 text-white"
              >
                <span>Register</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TinyNavbar;
