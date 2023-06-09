import React from "react";
const Login = () => {
  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 py-10">
        {/* Login component */}
        <div className="flex shadow-md">
          {/* Login form */}
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: "24rem", height: "32rem" }}
          >
            <div className="w-72">
              {/* Heading */}
              <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-accent sm:text-2xl sm:leading-none md:text-2xl">
                Welcome to
                <span className="text-secondary">Hajj agency</span>
              </h2>
              <small className="text-accent-400">
                Please provide the required information
              </small>
              {/* Form */}
              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-accent-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-accent-500"
                  />
                </div>
                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember for 30 days
                  </label>
                  <p className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </p>
                </div>
                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Sign in
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      alt="Loading..."
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    Sign in with Google
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="text-center">
                <span className="text-xs text-accent-400 font-semibold">
                  Don't have account?
                </span>
                <a href="/#" className="text-xs font-semibold text-purple-700">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
