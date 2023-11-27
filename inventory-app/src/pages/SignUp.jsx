import Logo from "../assets/images/Logo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

const SignUp = ({ SignupCheck }) => {
  const [Name, setName] = useState("");
  const [NewEmail, setNewEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [NewNameError, setNewNameError] = useState("");
  const [NewEmailError, setNewEmailError] = useState("");
  const [NewPasswordError, setNewPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const nameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setNewNameError("");
    }
  };

  const emailHandler = (event) => {
    setNewEmail(event.target.value);
    if (event.target.value.trim().length > 0) {
      setNewEmailError("");
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value.trim().length > 0) {
      setNewPasswordError("");
    }
  };

  const confirmPasswordHnadler = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value.trim().length > 0) {
      setNewPasswordError("");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      name: Name,
      email: NewEmail,
      password: Password,
      confirmpassword: ConfirmPassword,
    };

    let nameError = "";
    let newEmailError = "";
    let PasswordError = "";
    let confirmPasswordError = "";

    if (!Name) {
      nameError = "Name required";
    }
    if (!NewEmail) {
      newEmailError = "Email required";
    }
    if (!Password) {
      PasswordError = "Password required";
    }
    if (Password !== ConfirmPassword) {
      confirmPasswordError = "Password did not match";
    }

    if (nameError || newEmailError || PasswordError || confirmPasswordError) {
      setNewNameError(nameError);
      setNewEmailError(newEmailError);
      setNewPasswordError(PasswordError);
      setConfirmPasswordError(confirmPasswordError);
    }

    try {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(userData), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        console.log(userData);
        toast.success("You have successfully created your account.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          SignupCheck(true);
          navigate("/login");
        }, 3500);
        return response.json(userData);
        // Handle success if needed
      } else {
        SignupCheck(false);
        toast.error("Please enter correct credentials", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("user exists");
        // Handle error if needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Inventory
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up to create a new account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={submitHandler}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full name"
                    required=""
                    onChange={nameHandler}
                    value={Name}
                  />
                  <p className="text-red-500">{NewNameError}</p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="newemail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={emailHandler}
                    value={NewEmail}
                  />
                  <p className="text-red-500">{NewEmailError}</p>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="newpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={passwordHandler}
                    value={Password}
                  />
                  <p className="text-red-500">{NewPasswordError}</p>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="confirmpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={confirmPasswordHnadler}
                    value={ConfirmPassword}
                  />
                  <p className="text-red-500">{ConfirmPasswordError}</p>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have a account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
    </>
  );
};

export default SignUp;
