import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(response => response.json())
    .then(data => setStocks(data))
  }, [])
  return (
    <div>
      <Header />
      <MainContainer stocks={stocks}/>
    </div>
  );
}

export default App;
