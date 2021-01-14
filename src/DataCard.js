import React from "react";
import "./DataCard.css";
function DataCard(props) {
  return (
    <div className="dataCardCont">
      <div className="dataCardImage">
        <h4>Here is image</h4>
      </div>
      <div className="dataCardDataCont">
        <h3 className="dataCardTitle">{props.title}</h3>
        <div className="dataCardInfoCont">
          <h4 className="dataCardInfo">{props.currCode}</h4>
          <h4 className="dataCardInfo">{props.outputCurr}</h4>
          <h4 className="dataCardInfo">{props.exchangeRate}</h4>
          {/* <h4 className="dataCardInfo">Info 3</h4> */}
        </div>
      </div>
    </div>
  );
}
export default DataCard;
