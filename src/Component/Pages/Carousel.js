import React from "react";
import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/img/picture1.jpg";

const Carousel = () => {
  // const arrow =
  //   "btn-circle btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary";
  return (
    <div>
      <div className="hero bg-[url('/src/assets/img/bg.jpeg')]">
        <div className="hero-content flex-col lg:flex-row-reverse  max-w-7xl mx-auto px-12">
          <img
            src={banner}
            alt="..."
            className="lg:max-w-xl md:max-w-lg sm:max-w-md rounded-lg shadow-2xl"
          />

          <div>
            <h1 className=" font-bold text-neutral">
              {
                <span style={{ fontSize: "3em" }}>
                  <span>We are giving_</span>
                  <br />
                  <TypeAnimation
                    className="text-secondary"
                    sequence={[
                      "Affordable Package",
                      1000,
                      "Economy Package",
                      1000,
                      "Short time visa",
                      1000,
                      "15+ advantages",
                      1000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              }
            </h1>
            <p className="py-6 text-2xl text-base-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            {/* <PrimaryButton>Get Started</PrimaryButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
