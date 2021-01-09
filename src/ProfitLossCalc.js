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
let lengthOfStocks;

function getValues() {
  stockName = document.getElementById("stockNameInput").value;
  numOfStocks = document.getElementById("numberOfStocksInput").value;
  buyingPrice = document.getElementById("buyingPriceInput").value;

  console.log(stockName, "\n", numOfStocks, "\n", buyingPrice);
}

//===============================================================================
//                        REACT FUNCTION
// ==============================================================================
function ProfitLossCalc() {
  // const [stockData, setStocksData] = useState([{ symbol: "", name: "" }]);
  // const [isLoading, setIsLoading] = useState(true);
  const [stockList, setStockList] = useState([]);

  function findStock() {
    getValues();
    let query = `${apiUrl}keywords=${stockName}&apikey=${ApiKey}`;
    console.log(query);

    //            ** FETCHING DATA **

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        stocksWithSimilarName = data.bestMatches;
        let arr = stocksWithSimilarName.map((item, index) => {
          return { name: item["2. name"], symbol: item["1. symbol"] };
        });
        setStockList(arr);
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

      {/*   **LIST OUPUT**   */}
      {stockList && (
        <div>
          {stockList.map((item) => (
            <p>
              {item.name} , {item.symbol}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProfitLossCalc;
