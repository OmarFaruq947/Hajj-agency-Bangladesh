import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-wrap mt-10 justify-center">
        <div className="m-3">
          <a
            href="/"
            className="md:w-32 bg-white tracking-wide text-accent font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">Facebook</span>
          </a>
        </div>
        <div className="m-3">
          <a
            href="/"
            className="md:w-32 bg-white tracking-wide text-accent font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">Twitter</span>
          </a>
        </div>
        <div className="m-3">
          <a
            href="/"
            className="md:w-32 bg-white tracking-wide text-accent font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">Whatsapp</span>
          </a>
        </div>
        <div className="m-3">
          <a
            href="/"
            className="md:w-32 bg-white tracking-wide text-accent font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
