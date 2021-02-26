import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onHandleClick}) {
  // console.log(stocks)
  const stockList = stocks.map((stock) => {
    return (
      <Stock 
        key = {stock.id}
        id = {stock.id}
        name = {stock.name}
        price = {stock.price}
        ticker = {stock.ticker}
        type = {stock.type}
        onHandleClick = {onHandleClick}
        />
    )
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
