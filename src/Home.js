import Ticker from "react-ticker";
import React, { Component } from "react";
import Axios from "axios";
import "./Home.css";

function Home() {
  const getLosers = () => {
    Axios.get(
      "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=b95af4b41fdcc83df2c15801bdfdb363"
    ).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <h1>The Sheriff of Nottingham</h1>
      <h5>Stock data on your fingertips!</h5>
      <button onClick={getLosers}>Get Losers</button>
      {/* <div className="ticker-wrapper">
        <div className="bigheading">Breaking</div>
        <div className="text-update">
          <p>
            Example example exampleExample example exampleExample example
            exampleExample example example
          </p>
        </div>
      </div> */}
      <div className="container">
        <div className="square"></div>
        <div className="graphGainer"></div>
        <div className="square2"></div>
        <div className="graphLoser"></div>
      </div>
    </div>
  );
}

export default Home;
