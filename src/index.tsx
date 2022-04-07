import React, { useState } from "react";
import ReactDOM from "react-dom";
import { mount, route } from "navi";
import { Router } from "react-navi";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
import { Drawer } from "./Container/Drawer";
import { TourTabs } from "./Container/Tourist";
import { TouristCreateMain } from "./Container/TouristCreate";

const routes = mount({
  "/": route({
    title: "Login",
    view: <LoginPage />,
  }),
  "/home": route({
    title: "login",
    view: <Drawer />,
  }),
  "/tourist": route({
    title: "login",
    view: <TourTabs />,
  }),
  "/create": route({
    title: "login",
    view: <TouristCreateMain />,
  }),
  "/register": route({
    title: "Register",
    view: <RegisterPage />,
  }),
});

ReactDOM.render(<Router routes={routes} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
