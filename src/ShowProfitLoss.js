import React from "react";

import { Doughnut } from "react-chartjs-2";
function ShowProfitLoss(props) {
  //================================================================
  //              GETTING INTIAL VALUES
  //================================================================
  let numOfStocks = props.stocksNum;
  let stockPrice = props.stocksPrice;
  let answer;
  let specifier;
  let profitOrLoss = {
    text: "",
    color: "",
  };
  //================================================================
  //               CALCULATE FUNCTION
  //===============================================================

  let calculate = (props.stockData.close - stockPrice).toFixed(4);
  if (calculate > 0) {
    answer = "Hurray...You made profit";
    specifier = "made";
    profitOrLoss.text = "Total Profit";
    profitOrLoss.color = "rgba(238, 191, 12, 0.9)";
  } else {
    answer = "sorry for your loss";
    specifier = "lost";
    profitOrLoss.text = "Total Loss";
    profitOrLoss.color = "rgba(223, 0, 52, 0.9)";
  }
  let totalPL = (calculate * numOfStocks).toFixed(4);

  //==================================================================
  //                DATA FOR GRAPH
  //==================================================================
  const data = {
    labels: ["Current Stock Price", "Your Buying Price", profitOrLoss.text],
    datasets: [
      {
        label: "# of Votes",
        data: [props.stockData.close, stockPrice, totalPL],
        backgroundColor: [
          "rgba(0,63,92,1)",
          "rgba(64,232,111,1)",
          profitOrLoss.color,
        ],
      },
    ],
  };

  //==================================================================
  //==================================================================

  return (
    <div className="showProfitLossCont">
      <div className="graphCont">
        <Doughnut
          data={data}
          height={200}
          width={200}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            defaultFontSize: "14px",
          }}
        />
      </div>
      <div className="profitLossCard">
        <h2 className="cardTitle">{props.curstock}</h2>
        <h2 className="cardSub">
          Current Stock Price Is {props.stockData.close}
        </h2>
        <h3 className="cardSubsm">{answer}</h3>
        <h4 className="cardSubsm">
          The total amount you {specifier} is {totalPL}
        </h4>
      </div>
    </div>
  );
}
export default ShowProfitLoss;
