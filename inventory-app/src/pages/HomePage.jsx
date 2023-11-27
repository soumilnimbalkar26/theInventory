import React from "react";
import { Link } from "react-router-dom";
import InventoryGrow from "../assets/images/inventory-grow.gif";
import InventoryGrowMachine from "../assets/images/invenotry-grow-machine.gif";
// import { ToastContainer, toast } from "react-toastify";
const HomePage = ({ LoginVerified }) => {
  return (
    <>
      <section className="bg-gray-800 h-screen">
        <div className="flex flex-col gap-10 py-8 px-12 mx-auto max-w-screen-xl text-center">
          <h1 className="text-9xl font-extrabold tracking-tight leading-none text-white animate-pulse">
            THE INVENTORY
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            The best inventory app you'll find
          </p>
          {!LoginVerified ? (
            <>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  to="signup"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-100"
                >
                  SignUp
                </Link>
                <Link
                  to="login"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 "
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                to="login"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 "
              >
                Dashboard
              </Link>
            </div>
          )}

          <div className="flex justify-center gap-2">
            <img
              className=" h-80 w-auto rounded-lg mix-blend-hard-light"
              src={InventoryGrow}
              alt=""
            />
            <img
              className=" h-80 w-auto rounded-lg mix-blend-hard-light"
              src={InventoryGrowMachine}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
