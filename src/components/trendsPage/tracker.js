import "./tracker.css";
import React, { useState } from "react";
import Tracked from "./trackedData";
import App from '../../App';
// material UI select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Tracker(props) {

  // const list = [props.list];
  // console.log(list);

  const options = [
    { label: "All", value: "", key: "KId1"},
    { label: "Bitcoin", value: "bitcoin", key: "KId2"},
    { label: "Ergo", value: "ergo", key: "KId3"},
    { label: "Cardano", value: "cardano", key: "KId4"},
    { label: "Illuvium", value: "illuvium", key: "KId5"},
    { label: "Ethereum", value: "ethereum", key: "KId6"},
    { label: "Ravencoin", value: "ravencoin", key: "KId7"},
    { label: "Litecoin", value: "litecoin", key: "KId8"},
    { label: "Polkadot", value: "polkadot", key: "KId9"},
    { label: "Solana", value: "solana", key: "KId10"},
    { label: "Monero", value: "monero", key: "KId11"},
    { label: "Cronos", value: "crypto-com-chain", key: "KId12"} 
  ];
  // show the returned coin data
  // const [showResult, setShowResult] = useState(false);
  // get the selected coin to pass to search api
  const [coin, setCoin] = useState("bitcoin");
  const [range, setRange] = useState('30');

  const [home, setHome] = useState(false);
  const [hideTracker, setHideTracker] = useState(true);
  
  const toggleHome = ()=> {
    setHome(!home);
    setHideTracker(!hideTracker)
  };

  // const setDay =()=>{
  //   setRange('1');
  // }

  // const setWeek =()=>{
  //   setRange('7');
  // }

  const setMonth =()=>{
    setRange('30');
  }

  const set3Month =()=>{
    setRange('90');
  }

  const set12Month =()=>{
    setRange('360');
  }

  return (
    <div>
        {hideTracker && (
            <div className="center">
              <div>
                <Tracked coin={coin} range={range}/>
              </div>
              <div  className="bodySearch header">
                <div className="dropdownMenue" >
                  <FormControl required sx={{ m: 3, minWidth: '90%'}}>
                        <InputLabel id="demo-simple-select-required-label" className="textBody" >Select Coin</InputLabel>
                          <Select
                            className="textBody"
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={coin}
                            label="Select Coin*"
                            onChange={(e)=>{
                              const selectedCoin=e.target.value;
                              setCoin(selectedCoin);
                              }}>
                            {options.map((option) => (
                              <MenuItem value={option.value} className="textBodySelection" key={option.key}>{option.label}</MenuItem>
                              // <li key={option.value()}>{option.label}</li>
                            ))}
                          </Select>
                  </FormControl>
                </div>
                <div style={{paddingBottom:'3%'}}>
                  <div className="flexButtonContainer">
                    <div className="flexItemTracker">
                      <button className="dateRangeButton" onClick={setMonth}> 1 Month </button>
                    </div>
                    <div className="flexItemTracker">
                      <button className="dateRangeButton" onClick={set3Month}> 3 Months </button>
                    </div>
                    <div className="flexItemTracker">
                        <button className="dateRangeButton" onClick={set12Month}> 12 Months </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                    <button className="submitButtonNavigate" onClick={toggleHome}> Home </button>
              </div>
              <p style={{color:'white', paddingBottom:'5%'}}> All data obtained from <a href="https://www.coingecko.com/en/api">Coingecko API</a></p>
            </div>
        )}
      <div>
        {home && (
          <App />
        )}
      </div>
    </div>
  );
}

export default Tracker;