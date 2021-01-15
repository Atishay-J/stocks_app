import React from "react";
import "./calcCard.css";
function CalculatorCard(props) {
  return (
    <div className="calculatorCont" onClick={props.onclick}>
      <div className="calcImgCont">
        <img className="calcImg" alt="EMI Image" src={props.img} />
      </div>
      <h2 className="calcTitle">{props.title}</h2>
    </div>
  );
}
export default CalculatorCard;
