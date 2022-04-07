import Profile from "../Component/ProfileInfo/Profile";
import "./home.css";
import React from "react";

import TouristIndex from "../Component/TouristTable/Tourist";

export default function Tourist() {
  return (
    <div className="home">
      <TouristIndex />
      <div className="homeWidgets"></div>
    </div>
  );
}
