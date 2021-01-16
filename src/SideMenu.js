import React, { useState } from "react";
import "./sideMenu.css";
import assets from "./ImgAssets";
import SideMenuBtn from "./SideMenuBtn";
import { NavLink } from "react-router-dom";
function SideMenu() {
  return (
    <div id="sideMenuCont">
      {/* <div id="sideMenuBtnsCont"> */}
      <NavLink exact activeClassName="navActiveClass" to="/">
        <SideMenuBtn name="Calculate P/L" url={assets.plCalculator} />
      </NavLink>
      <NavLink activeClassName="navActiveClass" to="/goldandsilver">
        <SideMenuBtn name="Gold & Silver" url={assets.goldBar} />
      </NavLink>
      <NavLink activeClassName="navActiveClass" to="/crypto">
        <SideMenuBtn name="Crypto" url={assets.crypto} />
      </NavLink>
      <NavLink activeClassName="navActiveClass" to="/news">
        <SideMenuBtn name="News" url={assets.news} />
      </NavLink>
      <NavLink activeClassName="navActiveClass" to="/calculators">
        <SideMenuBtn name="Calculators" url={assets.calculators} />
      </NavLink>
      {/* </div> */}
    </div>
  );
}
export default SideMenu;
