import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeNews = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={100}
      gradientColor="058 066 085"
      gradientWidth={100}
    >
      <p className="text-2xl py-5">
        <a href="https://www.thedailystar.net/news/bangladesh/news/hajj-registration-deadline-poor-response-leads-final-extension-3266551#.ZC3-6ZIOjvU.link">
          Hajj Registration deadline: Poor response leads to ‘final’ extension
        </a>
      </p>
    </Marquee>
  );
};

export default MarqueeNews;
