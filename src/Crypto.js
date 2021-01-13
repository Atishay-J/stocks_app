import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Crypto() {
  const [onSelect, setOnSelect] = useState();
  const [gotError, setGotError] = useState(false);
  let ApiKey = process.env.REACT_APP_API_KEY;
  let ApiUrl =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

  //=================================================================
  let curCrypto;
  let curCurrency;
  // let gotError = false;
  let output;
  let query;

  const options = [
    { label: "INR (₹)", value: "INR" },
    { label: "USD ($)", value: "USD" },
    { label: "EUR (€)", value: "EUR" },
    { label: "JPY (¥)", value: "JPY" },
  ];
  const cryptoCurrency = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Tether", symbol: "USDT" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Bitcoin Cash", symbol: "BCH" },
  ];

  curCurrency = options[0].value;

  const defaultOption = options[0];

  //===================================================================
  //                GETTING VALUE FROM ASYNC FETCH
  //===================================================================

  useEffect(() => {
    async function doFetch() {
      let response = await fetch(query);
      let data = await response.json();
      // .then(data => {console.log(data)})
      console.log("INSIDE AYSNC FETCH");
      // console.log(data);
      return data;
    }
    cryptoCurrency.forEach((e) => {
      console.log("loggggg");
      console.log(e.symbol);
      let curSymbol = e.symbol;
      query = `${ApiUrl}${curSymbol}&to_currency=${curCurrency}&apikey=${ApiKey}`;
      doFetch().then((result) => {
        if (result.Note) {
          console.log("GOT AN BIIGGG ERROR");

          setGotError(true);
        } else {
          console.log("LAST LOGGGGG");
          console.log("FROM LAST DATA ", result);
        }
      });
    });
  }, []);

  //=============================================================================
  //                             CHANGING CURRENCY
  //=============================================================================
  function changeCurrency(e) {
    curCurrency = e.value;
    console.log(curCurrency);
  }

  //==========================================================================
  //                        OUTPUT
  //=========================================================================
  console.log(gotError);
  if (gotError) {
    console.log(gotError);
    output = (
      <div className="errorCont">
        <h2 className="errorMsg">
          Sorry! We have reached the limit of API calls, Please check after
          sometime
        </h2>
        <h3 className="errorMsgSm">Check Console for more info.</h3>
      </div>
    );
  } else {
    output = (
      <div className="selectorsCont">
        <Dropdown
          options={options}
          onChange={changeCurrency}
          value={defaultOption}
          placeholder="Select an option"
        />
        <DataCard title="Crypto" />
      </div>
    );
  }

  //========================================================================
  //========================================================================
  return <div className="cryptoCont">{output}</div>;
}
export default Crypto;
