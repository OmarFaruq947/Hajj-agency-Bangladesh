import React from "react";
import logo from "../../assets/logo/logo.png";
import OffersCard from "./OffersCard";

const Offers = () => {
  const offers = [
    { id: 1, title: "HOTEL BOOKING", logo: { logo }, link: "/book" },
    { id: 2, title: "ROUND TRIP FLIGHT", logo: { logo }, link: "/book" },
    { id: 3, title: "VISA PROCESSING", logo: { logo }, link: "/book" },
    { id: 4, title: "UMRAH PACKAGES", logo: { logo }, link: "/book" },
    { id: 5, title: "ZIYARAT TOURS", logo: { logo }, link: "/book" },
    { id: 6, title: "HAJJ OFFERS", logo: { logo }, link: "/book" },
    { id: 8, title: "UMRAH OFFERS", logo: { logo }, link: "/book" },
  ];
  return (
    <div>
      <section className="text-accent-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-accent">
              WHAT, DO WE OFFER?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {offers.map((offer) => (
              <OffersCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
