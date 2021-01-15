import React from "react";
import "./DataCard.css";
function DataCard(props) {
  return (
    <div className="cryptoMainCont">
      <div className="cryptoImgCont">
        <img className="cryptoImg" alt="Crpyto Image" src={props.image} />
      </div>
      <div className="cryptoInfoCont">
        <h1 className="cryptoTitle">{props.title}</h1>
        <div className="cryptoInfoSm">
          <h2 className="cryptoPrice">
            {props.price}
            <span className="curCurrency"> {props.currency}</span>
          </h2>
          <h3 className="cryptoSymbol">{props.symbol}</h3>
        </div>
      </div>
    </div>
  );
}
export default DataCard;
