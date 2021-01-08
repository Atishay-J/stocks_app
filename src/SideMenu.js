import "./sideMenu.css";
import assets from "./ImgAssets";
import SideMenuBtn from "./SideMenuBtn";
function sideMenu() {
  return (
    <div id="sideMenuCont">
      <div id="sideMenuBtnsCont">
        <SideMenuBtn name="Gold & Silver" url={assets.goldBar} />
        <SideMenuBtn name="Crypto" url={assets.crypto} />
        <SideMenuBtn name="News" url={assets.news} />
        <SideMenuBtn name="Calculators" url={assets.calculators} />
        <SideMenuBtn name="Calculate P/L" url={assets.plCalculator} />
      </div>
    </div>
  );
}
export default sideMenu;
