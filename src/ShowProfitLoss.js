import React from "react";

function ShowProfitLoss(props) {
  // console.log("OPENINIG PRICE IS ", props.stockData[open]);
  console.log("CUREEEENTTT STOCK ", props.curStock);
  console.log("From P/L cur data is ", props.stockData.open);
  let numOfStocks = props.stocksNum;
  let stockPrice = props.stocksPrice;
  let answer;
  let calculate = (props.stockData.close - stockPrice).toFixed(4);
  if (calculate > 0) {
    answer = "Yayy, You made profit";
  } else {
    answer = "sorry for your loss";
  }

  // console.log(
  //   "From show p/l --- closing price is  ",
  //   props.stockData.arr["4. close"]
  // );

  console.log("THE PROPS ARE ", props);

  return (
    <div className="showProfitLossCont">
      <h2>this is for showwww </h2>
      <h3>{answer}</h3>
      <h4>The total amount you made is {calculate * numOfStocks}</h4>
    </div>
  );
}
export default ShowProfitLoss;
