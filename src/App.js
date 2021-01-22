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

function App() {
  return (
    <>
      <div className="App">
        {/* <SideBar /> */}
        <div className="mainApp">
          <Navbar />

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
    </>
  );
}

export default App;
