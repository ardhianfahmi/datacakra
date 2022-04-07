import { AccountCircle, LineStyle } from "@material-ui/icons";
import React from "react";
import "./sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Link, Router } from "react-navi";

const Sidebar = () => {
  function signout() {
    localStorage.removeItem("user");
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <a href="/home">
              <li className="sidebarListItem active">
                <AccountCircleIcon className="sidebarIcon" />
                Home
              </li>
            </a>
            <a href="/tourist">
              <li className="sidebarListItem">
                <AssignmentIndIcon className="sidebarIcon" />
                Tourist
              </li>
            </a>
            <a onClick={signout}>
              <li className="sidebarListItem">
                <AssignmentIndIcon className="sidebarIcon" />
                Sign Out
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
