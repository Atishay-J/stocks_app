import React, { useEffect, useState } from "react";
import {
  MenuSharp,
  Brightness4,
  Notifications,
  AccountCircleSharp,
  ExpandMoreSharp,
  CallMergeOutlined,
} from "@material-ui/icons";
import Sidebar from "react-sidebar";
import SideBarContent from "./SideBarContent";
import "./navbar.css";
function Navbar() {
  const [sidebarOpen, onSetSidebarOpen] = useState("");
  const [isDark, setDark] = useState(true);

  function toggleDarkLight() {
    let values = document.querySelector(":root");

    if (isDark) {
      console.log("true");
      values.style.setProperty("--IconColor1", "#7b7b7b");
      values.style.setProperty("--fontCol1", "#e0e0e0");
      values.style.setProperty("--fontColLight", "#e3e3e3");
      values.style.setProperty("--bgCol1", "#181818");
      values.style.setProperty("--bgCol2", "#171717");
      values.style.setProperty("--boxShd1", "#2d2c2c");
      values.style.setProperty("--boxShd2", "#000000");
      values.style.setProperty("--boxShd3", "#0b0b0b");
      values.style.setProperty("--boxShd4", "#090808");
      values.style.setProperty("--boxShdBlk", "#d4d4d457");
      values.style.setProperty("--boxShdBlk2", "#39393991");
      values.style.setProperty("--invert", "85%");

      setDark(false);
    } else {
      console.log("false");
      values.style.setProperty("--IconColor1", "");
      values.style.setProperty("--fontCol1", "");
      values.style.setProperty("--fontColLight", "");
      values.style.setProperty("--bgCol1", "");
      values.style.setProperty("--bgCol2", "");
      values.style.setProperty("--boxShd1", "");
      values.style.setProperty("--boxShd2", "");
      values.style.setProperty("--boxShd3", "");
      values.style.setProperty("--boxShd4", "");
      values.style.setProperty("--boxShdBlk", "");
      values.style.setProperty("--boxShdBlk2", "");
      values.style.setProperty("--invert", "0");

      setDark(true);
    }
  }

  return (
    <div id="nav_cont">
      <div className="side">
        <MenuSharp
          id="burgerIcon"
          className="navIcons"
          onClick={() => onSetSidebarOpen(true)}
        />
      </div>
      <div id="menuIconsRightCont">
        <Brightness4
          id="darkModeIcon"
          className="navIcons"
          onClick={toggleDarkLight}
        />

        {/* <Notifications id="notificationIcon" className="navIcons" /> */}
        <div id="loggedIn_cont">
          <AccountCircleSharp id="accountIcon" className="navIcons" />
          <h4 id="loggedInName">Scarlett</h4>
          <ExpandMoreSharp id="expandIcon" className="navIcons" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
