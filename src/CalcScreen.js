import React, { useEffect, useState } from "react";

function CalcScreen() {
  const [showResult, setShowResult] = useState(false);
  const [emi, setEmi] = useState("");
  let amount, rate, tenure;
  let interestPayble, totalAmt;

  function getValues() {
    amount = document.getElementById("loanAmt").value;
    rate = document.getElementById("roi").value;
    tenure = document.getElementById("tenure").value;
  }

  function calculate(e) {
    e.preventDefault();
    getValues();
    console.log("amount ", amount);
    console.log("rate ", rate);
    console.log("tenure ", tenure);

    // let interest = (amount * (rate * 0.1)) / tenure;
    // let emi = (amount / tenure + interest).toFixed(2);
    let r = rate / (12 * 100);

    let x = amount * r;
    let y = Math.pow(1 + r, tenure);
    let z = y - 1;
    let ans = x * (y / z);
    let emi = ans.toFixed(2);

    console.log("EMI ", emi);
    // console.log("interest", interest);
    // console.log("Output ", output);

    setEmi(emi);
    setShowResult(true);
  }

  return (
    <>
      <div className="calcScreenCont">
        <form className="calcScreenForm" onSubmit={calculate}>
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
            <span className="inputSymbols">Months</span>
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
          <div className="calcResultCont">
            <h1>result {emi}</h1>
          </div>
        )}
      </div>
    </>
  );
}
export default CalcScreen;
