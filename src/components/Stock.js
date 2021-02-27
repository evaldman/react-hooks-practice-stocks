import React from "react";

function Stock({id, name, price, ticker, onHandleClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => onHandleClick(id)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ": " + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
