import React, { useState, useEffect } from "react";
import DataCard from "./DataCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import assets from "./ImgAssets";

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

function GoldSilver() {
  const [curCurrency, setCurCurrency] = useState(defaultOption);
  const [isLoading, setIsLoading] = useState(true);
  const [goldData, setGoldData] = useState({});
  const [silverData, setSilverData] = useState({});
  //==================================================
  //          SETTING FETCH FUNCTION
  //==================================================

  async function getGold() {
    let response = await fetch(
      `https://www.goldapi.io/api/XAU/${curCurrency}`,
      {
        method: "GET",
        headers: {
          "x-access-token": process.env.REACT_APP_X_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    let goldData = response.json();
    return goldData;
  }
  async function getSilver() {
    let response = await fetch(
      `https://www.goldapi.io/api/XAG/${curCurrency}`,
      {
        method: "GET",
        headers: {
          "x-access-token": process.env.REACT_APP_X_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    let silverData = response.json();
    return silverData;
  }

  //=====================================================
  //            USE EFFECT HOOK
  //=====================================================

  useEffect(() => {
    //****** GOLD ******//

    getGold().then((data) => {
      console.log("DAaaa ", data);
      setGoldData(data);
      // goldData = data;
    });

    //****** SILVER ******//

    getSilver().then((data) => {
      console.log("DAaaa ", data);
      setSilverData(data);
      // silverData = data;
    });

    setIsLoading(false);
  }, [curCurrency]);
  //============================================
  //            CHANGE CURRENCY
  //===========================================
  function changeCurrency(e) {
    console.log("value ", e.value);

    setCurCurrency(e.value);
  }
  //====================================================
  //******************** RETURN ********************** */
  //=====================================================
  return (
    <>
      <Dropdown
        className="dropdown"
        options={options}
        onChange={changeCurrency}
        value={curCurrency}
        placeholder="Select an option"
      />
      {isLoading ? (
        <h1>LOading...</h1>
      ) : silverData["error"] || goldData["error"] ? (
        <div className="errorCont">
          <h1 className="errorTitle">
            Sorry!!, We got Some error, please try again after sometime.
          </h1>
          <h3 className="errorEmoji">⚠️</h3>
        </div>
      ) : (
        <div className="goldSilverCont">
          <DataCard
            title="Gold"
            currency={goldData.currency}
            price={goldData.price}
            image={assets.goldImg}
          />
          <DataCard
            title="Silver"
            currency={silverData.currency}
            price={silverData.price}
            image={assets.silverImg}
          />
        </div>
      )}
    </>
  );
}
export default GoldSilver;
