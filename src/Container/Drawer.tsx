import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";

import Topbar from "../Component/Topbar/Topbar";
import "../Container/drawer.css";
import Home from "../Pages/index";

export const Drawer = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};
