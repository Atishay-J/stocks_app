import React, { useState } from "react";
import CalculatorCard from "./CalculatorCard";
import CalcScreen from "./CalcScreen";
import assets from "./ImgAssets";
function Calculators() {
  const [calcScreen, setCalcScreen] = useState(false);

  function showCalc() {
    console.log("ssss");
    setCalcScreen(true);
  }

  return calcScreen ? (
    <CalcScreen />
  ) : (
    <div className="calculatorsCont">
      <h1 className="calculatorHead">Calculate EMI's</h1>
      <div className="calcCards">
        <CalculatorCard
          title="Two Wheeler"
          img={assets.twoWheeler}
          onclick={showCalc}
        />
        <CalculatorCard
          title="Four Wheeler"
          img={assets.fourWheeler}
          onclick={showCalc}
        />
        <CalculatorCard
          title="Home Loan"
          img={assets.house}
          onclick={showCalc}
        />
        <CalculatorCard
          title="Personal Loan"
          img={assets.Personal}
          onclick={showCalc}
        />
      </div>
    </div>
  );
}
export default Calculators;
