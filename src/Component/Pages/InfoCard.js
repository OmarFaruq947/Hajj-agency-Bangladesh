import React from "react";

const InfoCard = ({ img, cardTitle, bgClass, cardSubTitle }) => {
  return (
    <div>
      <div className={`p-1 card lg:card-side shadow-xl ${bgClass}`}>
        <figure className="pl-5 pt-5">
          <img className="w-28 h-28" src={img} alt="Album" />
        </figure>

        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardSubTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
