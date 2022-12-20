import "./tracker.css";
import React, { useState, useEffect } from "react";
import { LineChart, Line, YAxis, Tooltip } from 'recharts';

function Tracked(props){
    
        const [priceTrends, setPriceTrends] = useState([]); // bind api values to variable
        const [marketCaps, setMarketCaps] = useState([]); // bind api values to variable
        const [totalVolumes, setTotalVolumes] = useState([]); // bind api values to variable

        useEffect(() => {
            fetch(
                "https://api.coingecko.com/api/v3/coins/" + props.coin + "/market_chart?vs_currency=usd&days=" + props.range
            )
            .then((response) => response.json())
            .then((data) => {
                // view returned data
                // console.log(data);
                // bind function value to returned api values 
                setPriceTrends(data.prices);
                setMarketCaps(data.market_caps); 
                setTotalVolumes(data.total_volumes);
            })
            .catch((err) => {
                console.log(err.message);
            });
        }, [props.coin, props.range]);

        // values for price chart
        const changingPrices = priceTrends.map((priceValue, index) => {
            return (   
                {value: parseFloat(priceValue[1]).toFixed(2)}

            )
        });    
        // values for market cap chart
        const changingMarketCap = marketCaps.map((marketValue, index) => {
            return (   
                    {value: ((parseFloat(marketValue[1])/1000000).toFixed(2))}
            )
        })    
        // values for volume chart
        const changingTradeVolume = totalVolumes.map((tradeValue, index) => {
            return (   
                    {value: ((parseFloat(tradeValue[1])/1000000).toFixed(2))} 
            )
        })

        // check screen size to adjust chart sizing
        const [screenSize, getDimension] = useState({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
          });
          const setDimension = () => {
            getDimension({
              dynamicWidth: window.innerWidth,
              dynamicHeight: window.innerHeight
            })
          }
          
          useEffect(() => {
            window.addEventListener('resize', setDimension);
            
            return(() => {
                window.removeEventListener('resize', setDimension);
            })
          }, [screenSize])

    return (
        <div className="center" style={{marginTop:'16%'}}>
            <div className="space">
                <p style={{color: 'gray'}}>Price Per Coin (USD)</p>
                <LineChart width={0.4*screenSize.dynamicWidth} height={0.5*screenSize.dynamicHeight} data={changingPrices} margin={{left: 80, top: 50, bottom: 50}}>
                    <Line type="monotone" dataKey="value" stroke="#40B3B3" strokeWidth={2} dot={false}/>
                    <YAxis domain={[Math.min(changingPrices), Math.max(changingPrices)]}/>
                    <Tooltip />
                </LineChart>
            </div>
            <div className="space">
                <p style={{color: 'gray'}}>Market Cap (USD in Millions)</p>
                <LineChart width={0.4*screenSize.dynamicWidth} height={0.5*screenSize.dynamicHeight} data={changingMarketCap} margin={{left: 80, top: 100, bottom: 50}}>
                    <Line type="monotone" dataKey="value" stroke="#40B3B3" strokeWidth={2} dot={false}/>
                    <YAxis domain={[Math.min(changingMarketCap), Math.max(changingMarketCap)]}/>
                </LineChart>
            </div>
            <div className="space bottom">
                <p style={{color: 'gray'}}>Trading Volume (USD in Millions)</p>
                <LineChart width={0.4*screenSize.dynamicWidth} height={0.5*screenSize.dynamicHeight} data={changingTradeVolume} margin={{left: 80, top: 100, bottom: 50}}>
                    <Line type="monotone" dataKey="value" stroke="#40B3B3" strokeWidth={2} dot={false}/>
                    <YAxis />
                    {/* domain={[(Math.min(changingTradeVolume)), (Math.max(changingTradeVolume))]} */}
                </LineChart>
            </div>
            {/* <div>
                <ul>
                    <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
                    <li>Height: <strong>{screenSize.dynamicHeight}</strong></li>
                </ul>    
            </div> */}
        </div>
    );
}

export default Tracked;