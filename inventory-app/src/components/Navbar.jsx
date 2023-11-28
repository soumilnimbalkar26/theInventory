import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = ({ LoginVerified, LoginCheck }) => {
  const navigate = useNavigate();

  const confirmLogout = async () => {
    window.confirm("Are you sure you want to logout");
    try {
      const response = await fetch("http://localhost:8000/api/users/logout", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        LoginCheck(false);
        navigate("/");
        return response.json();
        // Handle success if needed
      } else {
        console.log("some error occurred");
        // Handle error if needed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="h-32 flex items-center justify-around bg-gray-800 drop-shadow-2xl z-50">
        <div className="flex items-center ">
          <Link to="/">
            <img className="h-20 w-auto px-2" src={Logo} alt="" />
          </Link>
          <Link className="px-2 text-white text-lg font-bold" to="/">
            INVENTORY
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="px-5 text-white font-bold" to="/">
            Home
          </Link>

          <Link className="px-5 text-white font-bold" to="/about">
            About
          </Link>

          {LoginVerified ? (
            <>
              <Link className="px-5 text-white font-bold" to="/">
                Profile
              </Link>
              <Link
                className="px-5 text-white font-bold"
                to="/"
                onClick={confirmLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="px-5 text-white font-bold" to="login">
                Login
              </Link>
              <Link className="px-5 text-white font-bold" to="signup">
                SignUp
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
