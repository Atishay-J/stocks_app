import React from "react";

function ShowProfitLoss(props) {
  // console.log("OPENINIG PRICE IS ", props.stockData[open]);
  console.log("CUREEEENTTT STOCK ", props.curStock);
  console.log("From P/L cur data is ", props.stockData.open);
  let numOfStocks = props.stocksNum;
  let stockPrice = props.stocksPrice;

  // let calculate = props.stockData.close - stockPrice;
  // console.log(
  //   "From show p/l --- closing price is  ",
  //   props.stockData.arr["4. close"]
  // );

  console.log("THE PROPS ARE ", props);

  return (
    <div className="showProfitLossCont">
      <h2>this is for showwww </h2>
      <h3></h3>
    </div>
  );
}
export default ShowProfitLoss;
