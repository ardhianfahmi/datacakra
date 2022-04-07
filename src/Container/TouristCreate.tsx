import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import SidebarTourist from "../Component/Sidebar/SidebarTourist";

import Topbar from "../Component/Topbar/Topbar";
import TouristIndex from "../Component/TouristTable/Tourist";
import TouristCreate from "../Component/TouristTable/TouristCreate";
import "../Container/drawer.css";
import Tourist from "../Pages/tourist";

export const TouristCreateMain = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        {/* <SidebarTourist /> */}
        <TouristCreate />
      </div>
    </div>
  );
};
