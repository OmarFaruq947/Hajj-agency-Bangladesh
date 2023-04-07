import React from "react";
import Carousel from "../Pages/Carousel";
import Info from "../Pages/Info";

import Footer from "../Pages/Footer";
import MarqueeNews from "../Pages/MarqueeNews";
import Offers from "../Pages/Offers";
import Testimonials from "../Pages/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <MarqueeNews />
      <br />
      <Info />
      <Offers />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Home;
