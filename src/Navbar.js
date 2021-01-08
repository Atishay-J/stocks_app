import {
  MenuSharp,
  Brightness4,
  Notifications,
  AccountCircleSharp,
  ExpandMoreSharp,
} from "@material-ui/icons";
import "./navbar.css";
function Navbar() {
  return (
    <div id="nav_cont">
      <MenuSharp id="burgerIcon" className="navIcons" />

      <div id="menuIconsRightCont">
        <Brightness4 id="darkModeIcon" className="navIcons" />

        <Notifications id="notificationIcon" className="navIcons" />
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
