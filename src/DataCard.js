import React from "react";

function DataCard(props) {
  return (
    <div className="dataCardCont">
      <div className="dataCardImage">
        <h4>Here is image</h4>
      </div>
      <div className="dataCardDataCont">
        <h3 className="dataCardTitle">{props.title}</h3>
        <div className="dataCardInfoCont">
          <h4 className="dataCardInfo">Info</h4>
          <h4 className="dataCardInfo">Info 1</h4>
          <h4 className="dataCardInfo">Info 2</h4>
          <h4 className="dataCardInfo">Info 3</h4>
        </div>
      </div>
    </div>
  );
}
export default DataCard;
