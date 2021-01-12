// ** Init API **

import React, { useState } from "react";
import StockCard from "./StockCard";
import ShowProfitLoss from "./ShowProfitLoss";
import Skeleton from "react-loading-skeleton";

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
let curStock;
var stocksWithSimilarName = [];
let loader = true;

//======================= GET USER INPUT VALUES========================

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
  const [stockList, setStockList] = useState([]);
  const [selectedStock, setSelectedStock] = useState();
  const [showResult, setShowResult] = useState(false);
  const [selectedStockData, setSelectedStockData] = useState();
  const [showLoader, setShowLoader] = useState();

  //=============================================================
  //              FINDING SIMILAR STOCKS LIST (ASYNC FETCH 1)
  //=============================================================

  async function getSimilarStocks() {
    setShowLoader(true);
    getValues();
    let query = `${apiUrl}keywords=${stockName}&apikey=${ApiKey}`;
    console.log("API URL IS ", query);

    let response = await fetch(query);
    let data = await response.json();

    console.log("FIRST ASYNC FETCH DATA IS (INFUNCTION)", data);
    setShowLoader(false);
    return data;
  }

  //==============================================================
  //                ON SUBMIT/CLICK FUNCTION
  //==============================================================

  function findStock() {
    // getValues();
    // let query = `${apiUrl}keywords=${stockName}&apikey=${ApiKey}`;
    // console.log(query);
    //=================== FETCHING DATA =======================
    // fetch(query)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     stocksWithSimilarName = data.bestMatches;
    //     let arr = stocksWithSimilarName.map((item, index) => {
    //       return {
    //         name: item["2. name"],
    //         symbol: item["1. symbol"],
    //         region: item["4. region"],
    //       };
    //     });
    //     setStockList(arr);
    //     loader = false;
    //   });
    // setShowResult(false);
    getSimilarStocks().then((result) => {
      setShowLoader(true);
      console.log("FIRST ASYNC FETCH RESULT IS (CALLING) ", result);
      stocksWithSimilarName = result.bestMatches;
      let arr = stocksWithSimilarName.map((item, index) => {
        return {
          name: item["2. name"],
          symbol: item["1. symbol"],
          region: item["4. region"],
        };
      });
      setStockList(arr);
      // loader = false;
      setShowLoader(false);
      console.log("LOADER VALUE FROM FIRST FETCH ", loader);

      setShowResult(false);
    });
  }

  //==============================================================
  //                SELECT STOCK FROM LIST FUNCTION
  //==============================================================

  function selectStock(e) {
    setShowLoader(true);
    curStock = e.target.nextSibling.firstChild.innerHTML;
    setSelectedStock(curStock);

    fetchSelectedStockData(curStock).then((result) => {
      console.log("WE GOT THE FETCH RESULT ", result);
      setShowResult(true);
      // setShowLoader(false);
      // loader = false;

      setShowLoader(false);
    });
  }

  //==============================================================
  //            GET DATA OF SELECTED STOCK (ASYNC FETCH 2)
  //==============================================================

  let curData = "";
  let curStockKey = selectedStock;
  let arr = "";

  async function fetchSelectedStockData(value) {
    setShowLoader(true);
    let stockDataURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${value}&apikey=${ApiKey}`;

    console.log("API URL IS ", stockDataURL);

    let response = await fetch(stockDataURL);
    let data = await response.json();

    console.log("FETCHING IS Going done NOW ", data);
    // setShowLoader(false);
    // loader = false;
    setShowLoader(false);
    return data;
  }

  //   await fetch(stockDataURL)
  //     .then(async (response) => response.json())
  //     .then(async (data) => {
  //       console.log("Fetching started....");
  //       console.log("THE DATA THAT FETCH GOT ", data);
  //       for (let k in data["Time Series (Daily)"]) {
  //         arr = data["Time Series (Daily)"][k];
  //         console.log("THE ARR GOT THE DATA", arr);
  //         break;
  //       }
  //       // curData = {
  //       //   open: arr["1. open"],
  //       //   high: arr["2. high"],
  //       //   low: arr["3. low"],
  //       //   close: arr["4. close"],
  //       //   volume: arr["5. volume"],
  //       // };
  //       setSelectedStockData(arr);
  //     });
  //   console.log("THE CUR DATA IS ", curData);
  //   // stockDataURL = "";
  // }

  //================================================================================
  //                              SHOW OUTPUT
  //===============================================================================

  let output;
  // let rugby = <Skeleton height={100} />;

  // if (showResult) {
  //   output = (
  //     <ShowProfitLoss
  //       curstock={selectedStock}
  //       stockData={selectedStockData}
  //       stocksNum={numOfStocks}
  //       stocksPrice={buyingPrice}
  //     />
  //   );
  // } else {
  //   output = stockList && (
  //     <div>
  //       {stockList.map((item, index) => (
  //         <StockCard
  //           key={index}
  //           click={selectStock}
  //           title={item.name}
  //           symbol={item.symbol}
  //           region={item.region}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  console.log("VALUE OF SHOW LOADER IS ", showLoader);
  if (showLoader) {
    output = <Skeleton />;
  } else {
    // output = <h1>LOaded...</h1>;
    showResult
      ? (output = (
          <ShowProfitLoss
            curstock={selectedStock}
            stockData={selectedStockData}
            stocksNum={numOfStocks}
            stocksPrice={buyingPrice}
          />
        ))
      : (output = stockList && (
          <div>
            {stockList.map((item, index) => (
              <StockCard
                key={index}
                click={selectStock}
                title={item.name}
                symbol={item.symbol}
                region={item.region}
              />
            ))}
          </div>
        ));
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
      {output}
    </div>
  );
}
export default ProfitLossCalc;
