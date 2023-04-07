import React from "react";
import { Link } from "react-router-dom";

const OffersCard = ({ offer }) => {
  const { logo, title, link } = offer;
  console.log(offer);
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={logo.logo}
          />
          <div className="flex-grow">
            <Link to={`/${link}`}>
              <h2 className="text-white title-font font-medium">{title}</h2>
              <p className="text-secondary">⇒⇒</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
