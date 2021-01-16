// ** Init API **

import React, { useRef, useState } from "react";
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
let curData = "";
var stocksWithSimilarName = [];

//======================= GET USER INPUT VALUES========================

function getValues() {
  stockName = document.getElementById("stockNameInput").value;
  numOfStocks = document.getElementById("numberOfStocksInput").value;
  buyingPrice = document.getElementById("buyingPriceInput").value;
}

//===============================================================================
//                        REACT FUNCTION
// ==============================================================================
function ProfitLossCalc() {
  const [stockList, setStockList] = useState([]);
  const [selectedStock, setSelectedStock] = useState();
  const [showResult, setShowResult] = useState(false);
  // const [selectedStockData, setSelectedStockData] = useState({
  //   open: "",
  //   close: "",
  //   volume: "",
  //   high: "",
  //   low: "",
  // });
  const [showLoader, setShowLoader] = useState();
  const outputDiv = useRef();

  //=============================================================
  //              FINDING SIMILAR STOCKS LIST (ASYNC FETCH 1)
  //=============================================================

  async function getSimilarStocks() {
    setShowLoader(true);
    getValues();
    let query = `${apiUrl}keywords=${stockName}&apikey=${ApiKey}`;

    let response = await fetch(query);
    let data = await response.json();

    setShowLoader(false);
    return data;
  }

  //==============================================================
  //                ON SUBMIT/CLICK FUNCTION
  //==============================================================

  function findStock(form) {
    form.preventDefault();
    getSimilarStocks().then((result) => {
      setShowLoader(true);

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

      setShowResult(false);
      window.scrollTo({
        top: outputDiv.current.offsetTop,
        behavior: "smooth",
      });
      // let elem = document.getElementById("removeable");
      // elem.remove();
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
      let arr = "";

      for (let k in result["Time Series (Daily)"]) {
        arr = result["Time Series (Daily)"][k];

        break;
      }
      curData = {
        open: arr["1. open"],
        high: arr["2. high"],
        low: arr["3. low"],
        close: arr["4. close"],
        volume: arr["5. volume"],
      };

      setShowResult(true);

      setShowLoader(false);
    });
  }

  //==============================================================
  //            GET DATA OF SELECTED STOCK (ASYNC FETCH 2)
  //==============================================================

  async function fetchSelectedStockData(value) {
    setShowLoader(true);
    let stockDataURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${value}&apikey=${ApiKey}`;

    let response = await fetch(stockDataURL);
    let data = await response.json();

    // setShowLoader(false);
    // loader = false;
    setShowLoader(false);
    return data;
  }

  //================================================================================
  //                              SHOW OUTPUT
  //===============================================================================

  let output;

  if (showLoader) {
    output = (
      <>
        <div className="newsSkeletonCont">
          <Skeleton height={70} />
          <Skeleton height={20} count={5} />
        </div>
        <div className="newsSkeletonCont">
          <Skeleton height={70} />
          <Skeleton height={20} count={5} />
        </div>
        <div className="newsSkeletonCont">
          <Skeleton height={70} />
          <Skeleton height={20} count={5} />
        </div>
      </>
    );
  } else {
    // output = <h1>LOaded...</h1>;
    showResult
      ? (output = (
          <ShowProfitLoss
            curstock={selectedStock}
            stockData={curData}
            stocksNum={numOfStocks}
            stocksPrice={buyingPrice}
          />
        ))
      : (output = stockList && (
          <div className="outputDiv" ref={outputDiv}>
            {/* <h2 className="outputTitle">Found Similar stocks, Select yours</h2> */}
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

      <div className="inputCont" id="removeable">
        <form onSubmit={findStock} className="inputForm">
          <input
            required
            className="inputField"
            id="stockNameInput"
            type="text"
            placeholder="Enter Stock Name"
          />
          <input
            required
            className="inputField"
            id="buyingPriceInput"
            type="number"
            placeholder="Buying Price"
            min="1"
          />
          <input
            required
            className="inputField"
            id="numberOfStocksInput"
            type="number"
            placeholder="Number of stocks"
            min="1"
          />
          <input type="submit" className="submitBtn" value="Search" />
        </form>
      </div>

      {/*   **LIST OUPUT**   */}
      {output}
    </div>
  );
}
export default ProfitLossCalc;
