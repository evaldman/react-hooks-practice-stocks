import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onHandleClick}) {
  const portfolioList = portfolio.map((stock) => {
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
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
