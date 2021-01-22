import React, { useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

function CalcScreen() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    instal: "",
    interest: "",
    total: "",
    princi: "",
  });
  const calcResultCont = useRef();
  let amount, rate, tenure;

  //=====================================================
  //                GETTING VALUES
  //====================================================
  function getValues() {
    amount = document.getElementById("loanAmt").value;
    rate = document.getElementById("roi").value;
    tenure = document.getElementById("tenure").value;
  }
  //=====================================================
  //                CALCULATE ON CLICK
  //====================================================
  function calculate(e) {
    e.preventDefault();
    getValues();

    let r = rate / (12 * 100);

    let x = amount * r;
    let y = Math.pow(1 + r, tenure);
    let z = y - 1;
    let ans = x * (y / z);
    let emi = ans.toFixed(2);

    let totalAmt = (emi * tenure).toFixed(2);

    let totalInterest = (totalAmt - amount).toFixed(2);

    setResult({
      instal: emi,
      interest: totalInterest,
      total: totalAmt,
      princi: amount,
    });
    setShowResult(true);
  }

  //===========================================================
  //                  GRAPH
  //==========================================================
  const data = {
    labels: ["Principal Amount", " Total Interest"],
    datasets: [
      {
        label: "# of Votes",
        data: [result.princi, result.interest],
        backgroundColor: ["rgba(0,63,92,1)", "rgba(64,232,111,1)"],
      },
    ],
  };

  //========================================================
  //********************* RETURN *********************** */
  //========================================================
  return (
    <>
      <div className="calcScreenCont">
        <form className="calcScreenForm" onSubmit={calculate}>
          <h1 className="calcTitle">Calculate EMI</h1>
          <div className="inputHolder">
            <input
              required
              className="calcScreenInput"
              id="loanAmt"
              type="number"
              min="10"
              placeholder="Loan Amount"
            />
            <span className="inputSymbols">$</span>
          </div>
          <div className="inputHolder">
            <input
              required
              className="calcScreenInput"
              id="roi"
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="Rate of Interest"
            />
            <span className="inputSymbols">%</span>
          </div>
          <div className="inputHolder">
            <input
              required
              className="calcScreenInput"
              id="tenure"
              type="number"
              min="1"
              placeholder="Loan Tenure (In months)"
            />
            <span className="inputSymbols">months</span>
          </div>
          <div className="inputHolder">
            <input
              className="calcScreenSubmit"
              type="submit"
              value="Calculate"
            />
          </div>
        </form>
        {showResult && (
          <div className="calcResultCont" ref={calcResultCont}>
            <div className="calcResultTextCont">
              <h1 className="emi">
                EMI: <span className="calcValues"> {result.instal}</span>
              </h1>
              <h2 className="interest">
                Total Interest:
                <span className="calcValues"> {result.interest}</span>
              </h2>
              <h2 className="ttlAmt">
                Total Amount:{" "}
                <span className="calcValues"> {result.total}</span>
              </h2>
            </div>
            <div className="calcResultGraph">
              <Doughnut
                data={data}
                height={150}
                width={150}
                options={{
                  responsive: false,
                  maintainAspectRatio: false,
                  defaultFontSize: "14px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default CalcScreen;
