import Profile from "../Component/ProfileInfo/Profile";
import "./home.css";
import React from "react";

export default function Home() {
  return (
    <div className="home">
      <Profile />
      <div className="homeWidgets"></div>
    </div>
  );
}
