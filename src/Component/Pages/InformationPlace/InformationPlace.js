import React from "react";
import Information from "../Information";

const InformationPlace = () => {
  return (
    <div>
      <div id="__next">
        <div className="antialiased">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <main>
              <div className="divide-y divide-gray-200">
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                  <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-accent sm:text-4xl sm:leading-none md:text-5xl">
                    Information
                    <span className="text-secondary"> Place</span>
                  </h2>
                  <p className="text-lg leading-7 text-accent-500">
                    All the latest Tailwind CSS news, straight from the team.
                  </p>
                </div>
                <ul className="divide-y divide-gray-200">
                  <Information />
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPlace;
