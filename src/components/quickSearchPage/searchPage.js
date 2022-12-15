import React, {useState} from 'react';
import "./searchPage.css";
import Selected from '../selectedCrypto/selectedCrypto';
import App from '../../App';
// material UI select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Search() {
  // selectable coin list
  const options = [
    { label: "All", value: "", key: "Id1"},
    { label: "Bitcoin", value: "bitcoin", key: "Id2"},
    { label: "Ergo", value: "ergo", key: "Id3"},
    { label: "Cardano", value: "cardano", key: "Id4"},
    { label: "Illuvium", value: "illuvium", key: "Id5"},
    { label: "Ethereum", value: "ethereum", key: "Id6"},
    { label: "Ravencoin", value: "ravencoin", key: "Id7"},
    { label: "Litecoin", value: "litecoin", key: "Id8"},
    { label: "Polkadot", value: "polkadot", key: "Id9"},
    { label: "Solana", value: "solana", key: "Id10"},
    { label: "Monero", value: "monero", key: "Id11"},
    { label: "Cronos", value: "crypto-com-chain", key: "Id12"} 
  ];
  // show the returned coin data
  const [showResult, setShowResult] = useState(false);
  // get the selected coin to pass to search api
  const [coin, setCoin] = useState("bitcoin");

  const [home, setHome] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);
  
  const toggleHome = ()=> {
    setHome(!home);
    setHideSearch(!hideSearch);
    setShowResult(!showResult);
  };

  return (
    <div>
      {hideSearch && (
          <div className="center">
            <div  className="bodySearch">
              <div>
                <Selected coin={coin} />
              </div>
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
                            const result= true;
                            setShowResult(result);
                            }}>
                          {options.map((option) => (
                            <MenuItem value={option.value} className="textBodySelection" key={option.key}>{option.label}</MenuItem>
                            // <li key={option.value()}>{option.label}</li>
                          ))}
                        </Select>
                </FormControl>
              </div>
            </div>
            <div className="footer">
                  <button className="submitButtonNavigate" onClick={toggleHome}> Home </button>
            </div>
            <p style={{color:'white'}}> All data obtained from <a href="https://www.coingecko.com/en/api">Coingecko API</a></p>
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

export default Search;