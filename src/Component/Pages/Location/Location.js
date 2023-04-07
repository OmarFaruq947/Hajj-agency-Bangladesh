import React from "react";
import locationIcon from "../../../assets/img/location.svg";

const Location = ({ location }) => {
  const { distract, location: officeLocation, phone } = location;
  return (
    <>
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg ">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
          <svg
            xmlns={locationIcon}
            className="h-6 w-6 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h2 className="font-semibold">{distract}</h2>
          <p className="mt-2 text-sm text-accent-500">
            {officeLocation} <span>phone: {phone}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Location;
