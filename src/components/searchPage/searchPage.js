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
    { label: "All", value: ""},
    { label: "Bitcoin", value: "bitcoin"},
    { label: "Ergo", value: "ergo"},
    { label: "Cardano", value: "cardano"},
    { label: "Illuvium", value: "illuvium"},
    { label: "Ethereum", value: "ethereum"},
    { label: "Ravencoin", value: "ravencoin"},
    { label: "Litecoin", value: "litecoin"},
    { label: "Polkadot", value: "polkadot"},
    { label: "Solana", value: "solana"},
    { label: "Monero", value: "monero"},
    { label: "Cronos", value: "crypto-com-chain"} 
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
                      <InputLabel id="demo-simple-select-required-label" class="textBody" >Select Coin</InputLabel>
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
                            <MenuItem value={option.value} className="textBodySelection">{option.label}</MenuItem>
                          ))}
                        </Select>
                </FormControl>
              </div>
            </div>
            <div className="footer">
                  <button className="submitButtonNavigate" onClick={toggleHome}> Home </button>
            </div>
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