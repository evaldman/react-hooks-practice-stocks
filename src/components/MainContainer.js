import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
// import Stock from "./Stock"

function MainContainer({stocks}) {
  const [portfolio, setPortfolio] = useState([])
  const [search, setSearch] = useState({sort: null, filter: null})

  function sortStocks(sortBy){
    const updatedSearch = {...search}
    updatedSearch.sort = sortBy
    setSearch(updatedSearch)

  }
  // console.log(search)
  function filter(filterBy){
    const updatedSearch = {...search}
    updatedSearch.filter = filterBy
    setSearch(updatedSearch)

  }

  
    if (search.sort === "Alphabetically"){
      stocks.sort((a,b) => a.name.localeCompare(b.name))
    }else if (search.sort === "Price"){
      stocks.sort((a,b) => a.price - b.price)

    }

    function filterStocks(){
      return (
        stocks.filter((stock) => !search.filter ? true : stock.type === search.filter))
    }
  
  
  function handleClick(id){
    const newPortfolioStock = stocks.find((stock) => stock.id === id)
         if (!portfolio.find((stock) => stock.id === id)){
          setPortfolio([...portfolio, newPortfolioStock])
         }
     
      
    }

    function handleSellClick(id){
      const updatePortfolio = [...portfolio].filter((stock) => stock.id !== id)
        setPortfolio(updatePortfolio)
    }
    // console.log(portfolio)
  
  return (
    <div>
      <SearchBar onSortStocks={sortStocks} onFilter={filter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterStocks()} onHandleClick = {handleClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio= {portfolio} onHandleClick = {handleSellClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
