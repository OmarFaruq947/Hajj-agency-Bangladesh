import React from "react";
import Marquee from "react-fast-marquee";

import picture from "../../assets/img/bookPicture.png";
import banner from "../../assets/img/pic2.jpg";

const Booking = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            />
            <img
              alt="loading..."
              src={banner}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="/"
                className="px-2 py-1 bg-primary text-accent inline-flex items-center justify-center mb-2"
              >
                ⚠
              </a>

              <h2 className="text-4xl font-semibold text-white leading-tight">
                <Marquee speed={50} gradientColor="0 0 0">
                  <p className="text-2xl py-5">
                    Hajj Registration deadline: Poor response leads to ‘final’
                    extension
                  </p>
                </Marquee>
              </h2>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-accent max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">
              A unique characteristic of the Holy Hajj & Umrah travel is that we
              always try to afford you the perfect location as per your
              reservation. You will get out that the hostelling staff will be
              very welcoming and courteous. You can even ask them everything
              want to ask regarding hotel. The cleanliness of each hotel will be
              guaranteed by Holy Hajj & Umrah travel. These hotel can be so
              nearer that even you can appear the grand mosque Khana-e-Kaaba
              using your hotel room’s window.
            </p>
            <h2 className="pb-6 text-3xl font-bold">
              We provide 5 Star, 4 Star or any other hotel according to your
              requirements.
            </h2>
            <p className="pb-6">
              Hotels arranged by us, will provide you fast and quick food and
              hostelling services. An incredible thing is that in some of our
              hotels, you will be served fruits basket in your reserved hotel
              room every day in the morning. You can book packages for your 3
              Star hotels packages, 4 Star packages and 5 Star hotels packages.
              Besides we can take better care of your families including senior
              citizens and those persons who are facing some kind of physical
              inabilities as we can arrange wheelchairs or any other medical
              equipment needed by them during their holy Hajj trip.
            </p>
          </div>
        </main>
      </div>

      <section>
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="rounded-2xl w-full md:w-11/12 xl:w-10/12 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                      </h1>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuIOFFzUWpc23qS4nO2YxlO2wbbZLv97tZfs0-dfg8u8jXyA/viewform?usp=share_link">
                      <button
                        aria-label="Join the community"
                        className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                      >
                        Booking now
                      </button>
                    </a>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img src={picture} alt="cartoon avatars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
