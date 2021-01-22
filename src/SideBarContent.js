import React, { useEffect, useState } from "react";
import "./sidebar.css";

function SideBarContent(props) {
  const [show, setShow] = useState(false);
  // document.getElementById("sideBarCont").style.display = "flex";

  function showing() {
    if (show) {
      document.getElementById("sideBarCont").style.display = "flex";
      console.log("Setting flex");
    } else {
      document.getElementById("sideBarCont").style.display = "none";
      console.log("Setting none");
    }
  }
  setShow(props.sideState);
  if (show) {
    document.getElementById("sideBarCont").style.display = "flex";
    console.log("Setting flex");
  } else {
    document.getElementById("sideBarCont").style.display = "none";
    console.log("Setting none");
  }
  console.log(show);
  console.log(props.sideState);
  // useEffect(() => {
  //   setShow(props.sideState);
  //   showing();
  // }, [show]);

  function hide() {
    console.log("hideee");
    document.getElementById("sideBarCont").style.display = "none";
  }

  return (
    <div id="sideBarCont">
      <button onClick={hide}>Hide</button>
      <div className="listMainCont">
        <ul className="sideBarList">
          <li className="sideBarListItem">Dashboard</li>
          <li className="sideBarListItem">Overview</li>
          <li className="sideBarListItem">Analytics</li>
          <li className="sideBarListItem">Watchlist</li>
          <li className="sideBarListItem">Profile</li>
        </ul>
      </div>
      <div className="subList">
        <ul className="sideBarList">
          <li className="sideBarListItem">Settings</li>
          <li className="sideBarListItem">Notifications</li>
        </ul>
      </div>
      <div className="signatureDiv">
        <h4 className="titleFirst">
          Made with ❤ by <a href="#">Atishay Jain</a>
        </h4>
      </div>
    </div>
  );
}
export default SideBarContent;
