import Profile from "../Component/ProfileInfo/Profile";
import "./home.css";
import React from "react";

import TouristIndex from "../Component/TouristTable/Tourist";
import TouristCreate from "../Component/TouristTable/TouristCreate";

export default function Create() {
  return (
    <div className="home">
      <TouristCreate />
      <div className="homeWidgets"></div>
    </div>
  );
}
