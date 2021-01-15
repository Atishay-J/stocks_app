import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

//=========================================
//            DROPDOWN INIT
//=========================================
const options = [
  { label: "INR (₹)", value: "INR" },
  { label: "USD ($)", value: "USD" },
  { label: "EUR (€)", value: "EUR" },
  { label: "JPY (¥)", value: "JPY" },
];
const defaultOption = options[0].value;

//========================================
//              REACT FUNCTION
//========================================
function Crypto2() {
  const [curCurrency, setCurCurrency] = useState(defaultOption);
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState({});
  //   let cryptoData = [];

  //===========================================
  //          LIST OF CRYPTOCURRENCIES
  //===========================================
  const cryptoCurrency = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Litecoin", symbol: "LTC" },
  ];

  //=============================================
  //              API INIT
  //=============================================
  let cryptos = [];
  let url = "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=";

  //====================================================
  //       Converting available currency to array
  //====================================================

  cryptoCurrency.map((e) => {
    cryptos.push(e.name.toLowerCase());
    console.log(cryptos);
  });

  //=======================================================
  //            DECLARING ASYNC API
  //=======================================================

  let query = `${url}${curCurrency}&ids=${cryptos}`;

  async function getData() {
    let response = await fetch(query, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_X_RapidAPI_Key,
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
      },
    });

    let data = await response.json();
    return data;
  }

  //==========================================================
  //                 USEEFFECT HOOK
  //==========================================================

  useEffect(() => {
    getData().then((data) => {
      console.log("DATA FROM ASYNC ", data);
      setCryptoData(data);
      setIsLoading(false);
    });
  }, [curCurrency]);

  //============================================
  //            CHANGE CURRENCY
  //===========================================
  function changeCurrency(e) {
    console.log("value ", e.value);

    setCurCurrency(e.value);
  }
  console.log(curCurrency);
  console.log("DAaaatttaaa", cryptoData);

  //============================================
  //*************** RETURN  ******************/
  //============================================
  return (
    <div>
      <Dropdown
        className="dropdown"
        options={options}
        onChange={changeCurrency}
        value={curCurrency}
        placeholder="Select an option"
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        Object.keys(cryptoData).map((e) => {
          return (
            <DataCard
              key={cryptoData[e]["id"]}
              image={cryptoData[e]["image"]}
              title={cryptoData[e]["name"]}
              currency={curCurrency}
              price={cryptoData[e]["current_price"]}
              symbol={cryptoData[e]["symbol"]}
            />
          );
        })
      )}
    </div>
  );
}
export default Crypto2;
