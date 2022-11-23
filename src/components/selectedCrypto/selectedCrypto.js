import "./selectedCrypto.css";
import React, { useState, useEffect } from "react";

function Selected(props) {
  const [result, setResult] = useState([]); // bind api values to variable

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" +
        props.coin +
        "&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data); // bind function value to returned api values
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.coin]);

  return (
    <div>
      {result.map((results) => {
        return (
          <div className="mainInfoBlock">
            <div className="imageBackground">
              <img className="imageSizeL" src={results.image} alt={props.coin}/>
            </div>
            <div className="flexContainerSelected">
              <div className="textBody flexItemSelected">
                <p>
                  Symbol: <strong>{results.symbol}</strong>
                </p>
              </div>
              <div className="textBody flexItemSelected">
                <p>
                  Total Market Cap (USD): <strong>{results.market_cap}</strong>
                </p>
              </div>
            </div>
            <div className="flexContainerSelected">
              <div className="textBody flexItemSelected">
                <p>
                  Market Cap Rank: <strong>{results.market_cap_rank}</strong>
                </p>
              </div>
              <div className="textBody flexItemSelected">
                <p>
                  Price (USD): <strong>{results.current_price}</strong>
                </p>
              </div>
            </div>
            <div className="flexContainerSelected">
              <div className="textBody flexItemSelected">
                <p>
                  Trading Volume (USD): <strong>{results.market_cap_change_24h}</strong>
                </p>
              </div>
              <div className="textBody flexItemSelected">
                <p>    
                  % Daily change: <strong>{results.price_change_percentage_24h}</strong>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Selected;
