import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Dashboard from "./Dashboard/Dashboard"
import { useState } from "react";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  

  const [IsSignedUp, setIsSignedUp] = useState(false);
  

  return (
    <>
      <Navbar
        LoginVerified={IsLoggedIn}
        // SignupVerified={IsSignedUp}
        LoginCheck={setIsLoggedIn}
        // SignUpCheck={setIsSignedUp}
      />
      <Routes>
        <Route path="/login" element={<Login LoginCheck={setIsLoggedIn} />} />
        <Route
          path="/signup"
          element={<SignUp SignupCheck={setIsSignedUp} />}
        />
        <Route path="/" element={<HomePage LoginVerified={IsLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
