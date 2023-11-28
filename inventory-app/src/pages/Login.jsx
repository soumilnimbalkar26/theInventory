import Logo from "../assets/images/Logo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Validation from "../validation/Validation";

const Login = ({ LoginCheck }) => {
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [errorsEmail, setErrorsEmail] = useState("");
  const [errorsPassword, setErrorsPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim().length > 0) {
      setErrorsEmail("");
    }
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    if (event.target.value.trim().length > 0) {
      setErrorsPassword("");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };

    let emailError = "";
    let passwordError = "";

    if (!enteredEmail) {
      emailError = "Email required";
    }
    if (!enteredPassword) {
      passwordError = "Password required";
    }

    if (emailError || passwordError) {
      setErrorsEmail(emailError);
      setErrorsPassword(passwordError);
    }
    // else {
    //   setEnteredEmail("");
    //   setEnteredPassword("");
    //   setErrorsEmail("");
    //   setErrorsPassword("");
    //   console.log(credentials);
    // LoginCheck(true);
    // }
    try {
      const response = await fetch("http://localhost:8000/api/users/auth", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(credentials), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        toast.success("Login Successful", {
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
          LoginCheck(true);
          navigate("/");
        }, 3500);
        return response.json(credentials);
        // Handle success if needed
      } else {
        LoginCheck(false);
        toast.error("invalid credentials", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("invalid credentials");
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
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={submitHandler}
              >
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
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                  />
                  <p className="text-red-500">{errorsEmail}</p>
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
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={passwordChangeHandler}
                    value={enteredPassword}
                  />
                  <p className="text-red-500">{errorsPassword}</p>
                </div>
                <div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-white hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
