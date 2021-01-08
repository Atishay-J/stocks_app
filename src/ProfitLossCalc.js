// import "./calculators.css";

// ** Init API **
import React, { useState } from "react";

let apiUrl = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&";
const ApiKey = process.env.REACT_APP_API_KEY;

// =============================================================================
// stockName Autocomplete (currently disabled, due to API Calls restrictions)
// =============================================================================
// let matchingResults;

// function autocomplete(event) {
//   let searchInput = event.target.value;
//   let query = `${apiUrl}keywords=${searchInput}&apikey=${ApiKey}`;

//   console.log(query);
//   if (searchInput === "") {
//     console.log("No INPUT");
//   } else {
//     fetch(query)
//       .then((response) => response.json())
//       .then((data) => {
//         matchingResults = data;
//         console.log(matchingResults);
//       })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   }
// }
//===============================================================================
let stockName;
let numOfStocks;
let buyingPrice;
var stocksWithSimilarName = [];
let similarNameStockList;
let list;

function getValues() {
  stockName = document.getElementById("stockNameInput").value;
  numOfStocks = document.getElementById("numberOfStocksInput").value;
  buyingPrice = document.getElementById("buyingPriceInput").value;

  console.log(stockName, "\n", numOfStocks, "\n", buyingPrice);
}

let arr = Object.entries(stocksWithSimilarName);
//===============================================================================
function ProfitLossCalc() {
  const [similarNamesList, setSimilarNamesList] = useState([]);

  function findStock() {
    setSimilarNamesList([]);
    getValues();
    let query = `${apiUrl}keywords=${stockName}&apikey=${ApiKey}`;
    console.log(query);

    //            ** FETCHING DATA **

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        stocksWithSimilarName = data.bestMatches;

        // console.log("data is ", data);
        // console.log("stock with simi ", stocksWithSimilarName[0]);
        // console.log("type of ", typeof stocksWithSimilarName);
        // console.log(Object.keys(stocksWithSimilarName[0])[0]);
        // console.log(Object.entries(stocksWithSimilarName[0])[0][1]);
        // console.log(similarNameStockList);
        // setSimilarNamesList(similarNameStockList);
        // setSimilarNamesList(similarNameStockList[i][1]["1. symbol"]);

        // console.log(Object.entries(stocksWithSimilarName)[0][1]["1. symbol"]);

        similarNameStockList = Object.entries(stocksWithSimilarName);

        for (let i = 0; i < similarNameStockList.length; i++) {
          // console.log("here is list");
          // console.log(similarNameStockList[i][1]);
          list = Object.entries(stocksWithSimilarName)[i][1][
            ("1. symbol", "2. name")
          ];

          // setSimilarNamesList.push(similarNameStockList[i][1]["1. symbol"]);
          setSimilarNamesList((oldList) => [
            ...oldList,
            similarNameStockList[i][1]["1. symbol"],
          ]);

          // console.log(similarNamesList[i][1]["1. symbol"]);
          console.log(list);
        }
      });
  }

  return (
    <div id="mainCalcCont">
      <h4 className="calcHeading">Calculate Profit / Loss</h4>
      <div className="inputCont">
        <input
          className="inputField"
          id="stockNameInput"
          type="text"
          placeholder="Enter Stock Name"
          // onChange={autocomplete}
        />

        <input
          className="inputField"
          id="buyingPriceInput"
          type="number"
          placeholder="Buying Price"
        />
        <input
          className="inputField"
          id="numberOfStocksInput"
          type="number"
          placeholder="Number of stocks"
        />
        <button className="submitBtn" onClick={findStock}>
          Search
        </button>
      </div>
      <div>
        <ul id="list">
          {similarNamesList.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default ProfitLossCalc;
