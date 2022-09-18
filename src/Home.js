import Ticker from "react-ticker";
import React, { Component, useState } from "react";
import Axios from "axios";
import "./Home.css";

function Home() {
  const _APIKEY = "54ff816144462eb7ce61a1fd81afb014";

  const [topStocks, setTopStocks] = useState([]);
  const [setLoserStocks, loserStocks] = useState();

  const [name, setName] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const logValue = () => {
    Axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        name +
        "&interval=60min&outputsize=full&apikey=ZGE19H5HOBZKLLHD"
    ).then((response) => {
      console.log(response);
    });
  };

  const getGainers = () => {
    Axios.get(
      "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=" +
        _APIKEY
    ).then((response) => {
      for (var j = 0; j < 10; j++) {
        var name = response.data[j].name;
        var symbol = response.data[j].symbol;
        var percent = response.data[j].changesPercentage;
        var change = response.data[j].change;
        var price = response.data[j].price;
        var onestock = { name, symbol, percent, change, price };
        setTopStocks([...topStocks, onestock]);
      }
      console.log(topStocks);
    });
  };

  const getLosers = () => {
    Axios.get(
      "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=" +
        _APIKEY
    ).then((response) => {
      console.log(response);
      for (var j = 0; j < 10; j++) {
        var name = response.data[j].name;
        var symbol = response.data[j].symbol;
        var percent = response.data[j].changesPercentage;
        var change = response.data[j].change;
        var price = response.data[j].price;
        setLoserStocks([{ name, symbol, percent, change, price }]);
      }
    });
  };

  return (
    <div>
      <h1>The Sheriff of Nottingham</h1>
      <h5>Stock data on your fingertips!</h5>
      <button onClick={getGainers}>Get Gainers</button>
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
      <div>
        <input onChange={handleInput} placeholder="Enter Stock Ticker" />
        <button onClick={logValue}>Search</button>
      </div>
      <div className="container">
        <div>
          <h3>Top Gainers</h3>
          <div className="containGain">
            <div className="square">
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Market Value</th>
                    <th>Change</th>
                    <th>Percent Change (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {topStocks.map((gainers, index) => {
                    return (
                      <tr key={index}>
                        <td>{gainers.symbol}</td>
                        <td>{gainers.name}</td>
                        <td>{gainers.price}</td>
                        <td>{gainers.change}</td>
                        <td>{gainers.percent}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="graphGainer"></div>
          </div>
        </div>
        <div>
          <h3>Top Losers</h3>
          <div className="containLoss">
            <div className="square2"></div>
            <div className="graphLoser"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
