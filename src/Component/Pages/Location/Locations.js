import React from "react";
import Location from "./Location";

const Locations = () => {
  const locations = [
    { id: 1, distract: "Dhaka", location: "Mirpur-10", phone: "01457835889" },
    { id: 2, distract: "Dhaka", location: "Mirpur-11", phone: "01457835889" },
    { id: 3, distract: "Dhaka", location: "Mirpur-4", phone: "01457835889" },
    { id: 4, distract: "Dhaka", location: "Mirpur-1", phone: "01457835889" },
  ];

  return (
    <>
      <div className="container mx-auto">
        {/* component */}
        <div className="flex flex-col">
          <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-accent sm:text-4xl sm:leading-none md:text-5xl">
            Office
            <span className="text-secondary"> Location</span>
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((location) => (
              <Location key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
