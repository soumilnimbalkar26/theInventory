import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "../components/DashbboardSidebar";
import AddUser from "../dashboardpages/addUser";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <DashboardSidebar />
        <Routes>
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
        <AddUser />
      </div>
    </>
  );
};

export default Dashboard;
