import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Crypto() {
  const [curCurrency, setCurCurrency] = useState("INR");
  const [gotError, setGotError] = useState(false);
  const [cryptoData, setCryptoData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [curQuery, setCurQuery] = useState(null);
  let ApiKey = process.env.REACT_APP_API_KEY;
  let ApiUrl =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

  //=================================================================

  let output;
  let query;
  // let cryptoData = [];

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

  const defaultOption = options[0];

  //===================================================================
  //                GETTING VALUE FROM ASYNC FETCH
  //===================================================================

  // function btc() {
  //   // curQuery = `${ApiUrl}${cryptocu}&to_currency=${curCurrency}&apikey=${ApiKey}`;
  //   console.log(cryptoCurrency[0].symbol);
  // }
  // btc();
  async function call() {
    for (let i = 0; i < cryptoCurrency.length; i++) {
      // console.log(cryptoCurrency[i].symbol);
      setCurQuery(
        `${ApiUrl}${cryptoCurrency[i].symbol}&to_currency=${curCurrency}&apikey=${ApiKey}`
      );
    }
    console.log(curQuery);
    let response = await fetch(curQuery);
    let data = response.json();
    console.log("CALLLEEEDDD", data);
  }
  useEffect(() => {
    call();
    console.log("changer", curQuery);
  }, [curQuery]);

  // function getCryptos() {
  //   cryptoCurrency.map((item) => {
  //     query = `${ApiUrl}${item.symbol}&to_currency=${curCurrency}&apikey=${ApiKey}`;
  //     callme();
  //   });
  // }
  // function callme() {
  //   console.log("called");
  // }

  // async function doFetch() {
  //   // cryptoCurrency.forEach((e) => {
  //   //   console.log("loggggg");
  //   //   console.log(e.symbol);
  //   //   let curSymbol = e.symbol;
  //   //   query = `${ApiUrl}${curSymbol}&to_currency=${curCurrency}&apikey=${ApiKey}`;
  //   // },
  //   // cryptoCurrency.map((item) => console.log("IMTEE", item));
  //   // let response = await fetch(query);
  //   // let data = await response.json();
  //   // console.log("INSIDE AYSNC FETCH");
  //   // return data;
  // }
  // doFetch();
  // useEffect(() => {

  //     doFetch().then((result) => {
  //       if (result.Note) {
  //         console.log("GOT AN BIIGGG ERROR");
  //         setGotError(true);
  //       } else {
  //         // console.log("LAST LOGGGGG");
  //         // console.log("FROM LAST DATA ", result);
  //         cryptoData.push(result["Realtime Currency Exchange Rate"]);
  //         setGotError(false);
  //         setIsLoading(false);
  //         // setCryptoData([...cryptoData, { result }]);
  //         // console.log(cryptoData);
  //       }
  //     });

  //     //=======================================================
  //     //=======================================================
  //   });
  // }, [curCurrency]);

  // useEffect(() => {
  //   console.log("STATE CHANGED");
  // }, [cryptoData]);

  //=============================================================================
  //                             CHANGING CURRENCY
  //=============================================================================

  //==========================================================================
  //                        OUTPUT
  //=========================================================================
  // console.log(gotError);
  // if (gotError) {
  //   console.log(gotError);
  //   output = (
  //     <div className="errorCont">
  //       <h2 className="errorMsg">
  //         Sorry! We have reached the limit of API calls, Please check after
  //         sometime
  //       </h2>
  //       <h3 className="errorMsgSm">Check Console for more info.</h3>
  //     </div>
  //   );
  // } else {
  //   output = (
  //     <div className="listCont">
  //       {cryptoData.map((e) => {
  //         {
  //           /* let title =
  //           e["result"]["Realtime Currency Exchange Rate"][
  //             "2. From_Currency Name"
  //           ];
  //         let currCode =
  //           e["result"]["Realtime Currency Exchange Rate"][
  //             "1. From_Currency Code"
  //           ];
  //         let outputCurr =
  //           e["result"]["Realtime Currency Exchange Rate"][
  //             "4. To_Currency Name"
  //           ];
  //         let exchangeRate =
  //           e["result"]["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
  //         console.log(title); */
  //         }

  //         return (
  //           <DataCard
  //             title={
  //               e["result"]["Realtime Currency Exchange Rate"][
  //                 "2. From_Currency Name"
  //               ]
  //             }
  //             currCode={
  //               e["result"]["Realtime Currency Exchange Rate"][
  //                 "1. From_Currency Code"
  //               ]
  //             }
  //             outputCurr={
  //               e["result"]["Realtime Currency Exchange Rate"][
  //                 "4. To_Currency Name"
  //               ]
  //             }
  //             exchangeRate={
  //               e["result"]["Realtime Currency Exchange Rate"][
  //                 "5. Exchange Rate"
  //               ]
  //             }
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // }
  // if (gotError) {
  //   console.log(gotError);
  //   output = (
  //     <div className="errorCont">
  //       <h2 className="errorMsg">
  //         Sorry! We have reached the limit of API calls, Please check after
  //         sometime
  //       </h2>
  //       <h3 className="errorMsgSm">Check Console for more info.</h3>
  //     </div>
  //   );
  // } else {
  //   output =
  //     isLoading &&
  //     (<h1>Loading...</h1>)(
  //       <div className="listCont">
  //         {cryptoData.map((e) => (
  //           <DataCard
  //             title={e["2. From_Currency Name"]}
  //             currCode={e["1. From_Currency Code"]}
  //             outputCurr={e["4. To_Currency Name"]}
  //             exchangeRate={e["5. Exchange Rate"]}
  //           />
  //         ))}
  //       </div>
  //     );
  // }

  //========================================================================
  //========================================================================
  return (
    <div className="cryptoCont">
      {/* <div className="selectorsCont">
        <Dropdown
          options={options}
          onChange={changeCurrency}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>

      {output} */}
    </div>
  );
}
export default Crypto;
