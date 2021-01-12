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
    answer = "Yayy, You made profit";
    specifier = "made";
    profitOrLoss.text = "Total Profit";
  } else {
    answer = "sorry for your loss";
    specifier = "lost";
    profitOrLoss.text = "Total Loss";
    profitOrLoss.color = "rgba(229, 7, 59, 0.4)";
  }
  let totalPL = (calculate * numOfStocks).toFixed(4);
  console.log("THE PROPS ARE ", props);

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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          profitOrLoss.color,
        ],
      },
    ],
  };

  //==================================================================
  //==================================================================

  return (
    <div className="showProfitLossCont">
      <div
        style={{
          margin: "auto",
          background: "#fafaf2",
        }}
      >
        <Doughnut
          data={data}
          height={300}
          width={300}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            defaultFontSize: "14px",
          }}
        />
      </div>
      <div className="profitLossCard">
        <h2 className="cardTitle">{props.curstock}</h2>
        <h3 className="cardSubsm">{answer}</h3>
        <h4 className="cardSubsm">
          The total amount you {specifier} is {totalPL}
        </h4>
        <h2 className="cardSub"> current price is {props.stockData.close}</h2>
      </div>
    </div>
  );
}
export default ShowProfitLoss;
