import React from "react";
import logo1 from "../../assets/img/mq1.png";
import logo2 from "../../assets/img/mq2.png";
import logo3 from "../../assets/img/mq3.png";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  max-w-7xl mx-auto px-12">
        <InfoCard
          cardTitle="Hajj / Umrah"
          cardSubTitle="Most Popular Hajj Packages 2023 -2024 "
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={logo1}
        />
        <InfoCard
          cardTitle="Hotel"
          cardSubTitle="Rebum amet sanctus kasd amet vero, labore dolor "
          bgClass="bg-accent"
          img={logo2}
        />
        <InfoCard
          cardTitle="Tour Guide"
          cardSubTitle="General Guidelines the Hajj & Umrah Performing"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={logo3}
        />
      </div>
    </>
  );
};

export default Info;
