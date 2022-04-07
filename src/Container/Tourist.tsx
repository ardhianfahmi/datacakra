import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import SidebarTourist from "../Component/Sidebar/SidebarTourist";

import Topbar from "../Component/Topbar/Topbar";
import TouristIndex from "../Component/TouristTable/Tourist";
import "../Container/drawer.css";
import Tourist from "../Pages/tourist";

export const TourTabs = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SidebarTourist />
        <Tourist />
      </div>
    </div>
  );
};
