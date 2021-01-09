function StockCard(props) {
  return (
    <div id="stockCardCont">
      <h2 className="stockCardTitle" onClick={props.onClick}>
        {props.title}
      </h2>
      <h3 id="stockCardSymbol">{props.symbol}</h3>
    </div>
  );
}
export default StockCard;
