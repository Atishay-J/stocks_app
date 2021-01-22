import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import TimelineIcon from "@material-ui/icons/Timeline";
import PieChartIcon from "@material-ui/icons/PieChart";
import DashboardIcon from "@material-ui/icons/Dashboard";

function SideBarContent(props) {
  function hide() {
    console.log("hideee");
    document.getElementById("sideBarCont").style.display = "none";
  }

  return (
    <div id="sideBarCont">
      {/* <button onClick={hide}>Hide</button> */}
      <div className="listMainCont">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <DashboardIcon /> <span className="settingName">Dashboard</span>
          </li>
          <li className="sideBarListItem">
            <PieChartIcon /> <span className="settingName">Overview</span>
          </li>
          <li className="sideBarListItem">
            <TimelineIcon /> <span className="settingName">Analytics</span>
          </li>
          <li className="sideBarListItem">
            <InsertChartIcon /> <span className="settingName">Watchlist</span>
          </li>
          <li className="sideBarListItem">
            <AccountCircleIcon /> <span className="settingName">Profile</span>
          </li>
        </ul>
      </div>
      <div className="subList">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <SettingsIcon />
            <span className="settingName">Settings</span>
          </li>
          <li className="sideBarListItem">
            <NotificationsIcon />
            <span className="settingName">Notifications</span>
          </li>
        </ul>
      </div>
      <div className="signatureDiv">
        <h4 className="titleFirst">
          Made with <span>❤</span> by &nbsp;
          <a className="name" href="https://atishayjain.netlify.app/">
            Atishay Jain
          </a>
        </h4>
      </div>
    </div>
  );
}
export default SideBarContent;
