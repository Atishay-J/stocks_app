import "./stockCard.css";
function StockCard(props) {
  return (
    <div className="stockCardCont">
      <h2 className="stockCardTitle" onClick={props.click}>
        {props.title}
      </h2>
      <div className="stockCardInfoCont">
        <h3 className="stockCardSymbol">{props.symbol}</h3>
        <h5 className="stockCardRegion">{props.region}</h5>
      </div>
    </div>
  );
}
export default StockCard;
