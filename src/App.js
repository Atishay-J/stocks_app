import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { Route, Switch } from "react-router-dom";
import ProfitLossCalc from "./ProfitLossCalc";
import GoldSilver from "./GoldSilver";
import News from "./News";
import Calculators from "./Calculators";
import Crypto2 from "./Crypto2";
import Error from "./Error";
import SideBarContent from "./SideBarContent";

function App() {
  const [responsive, setResponsive] = useState();

  function addName() {
    var x = window.matchMedia("(min-width: 640px)");
    if (x.matches) {
      // If media query matches
      console.log("got size IFFFF");
      setResponsive(true);
    } else {
      console.log("got size ELSSEE");
      setResponsive(false);
    }
    console.log("got size");
  }

  useEffect(() => {
    addName();

    window.onresize = addName;
  }, []);

  return (
    <>
      <div className="App">
        {/* <SideBar /> */}

        <Navbar name={responsive ? "Stockky" : ""} />
        <div className="allCont">
          {responsive ? <SideBarContent /> : ""}

          <div className="mainApp">
            <Switch>
              {/* <Main /> */}

              <Route exact path="/" component={ProfitLossCalc} />
              <Route path="/goldandsilver" component={GoldSilver} />
              <Route path="/news" component={News} />
              <Route path="/crypto" component={Crypto2} />
              <Route path="/calculators" component={Calculators} />

              <Route component={Error} />
            </Switch>
          </div>
          <SideMenu />
        </div>
      </div>
    </>
  );
}

export default App;
