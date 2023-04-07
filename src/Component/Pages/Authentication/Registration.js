import React from "react";

const Registration = () => {
  return (
    <>
      <div className="h-screen py-10 flex justify-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full ">
            <h1 className="text-center text-2xl mb-6 text-accent-600 font-bold font-sans">
              <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-accent sm:text-2xl sm:leading-none md:text-2xl">
                Registration
                <span className="text-secondary"> Form</span>
              </h2>
            </h1>
            <div>
              <label
                className="text-accent font-semibold block my-3 text-md"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label
                className="text-accent font-semibold block my-3 text-md"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
              />
            </div>
            <div>
              <label
                className="text-accent font-semibold block my-3 text-md"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div>
              <label
                className="text-accent font-semibold block my-3 text-md"
                htmlFor="confirm"
              >
                Confirm password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="confirm"
                id="confirm"
                placeholder="confirm password"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
