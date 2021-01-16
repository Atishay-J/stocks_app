import React from "react";
import "./DataCard.css";
function DataCard(props) {
  return (
    <div className="cryptoMainCont">
      <div className="cryptoImgCont">
        <img className="cryptoImg" alt="Image" src={props.image} />
      </div>
      <div className="cryptoInfoCont">
        <h1 className="cryptoTitle">
          {props.title} <span className="cryptoSymbol">({props.symbol})</span>
        </h1>
        <div className="cryptoInfoSm">
          <h2 className="cryptoPrice">
            {props.price}
            <span className="curCurrency"> {props.currency}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default DataCard;
