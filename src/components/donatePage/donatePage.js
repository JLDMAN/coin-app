import "./donatePage.css";
import React, {useState} from 'react';
import App from '../../App';
// import collectedCoinsLogo from '../../../src/assets/collectedCoinsLogo.png';
import btcLogo from '../../../src/assets/btcLogo.png';
import ergoLogo from '../../../src/assets/ergoLogo.png';

function Donate() {
  const [home, setHome] = useState(false);
  const [hideDonate, setHideDonate] = useState(true);

  const toggleHome = ()=> {
    setHome(!home);
    setHideDonate(!hideDonate);
  };

  return (
  <div>
    {hideDonate && (
      <div className="center">
        <div>
          {/* <img className="imageSizeS" src={collectedCoinsLogo} alt="crypto logo"></img> */}
          <p className="textContent"> Please note that all donations will go towards feeding a hungry African child, mine.</p>

          <img className="imageSizeDonate" src={btcLogo} alt="btc logo"></img>
          <p className="textContent"> BTC adress:</p>
          <p className="textContentLarge">bc1q7078l78gxf7v9z7vdx63h25cgyfzrgsrzqtvxa</p>

          <img className="imageSizeDonate" src={ergoLogo} alt="ergo logo"></img>
          <p className="textContent"> ERG adress:</p>
          <p className="textContentLarge">9fEXwMn3ZuKnh5fDN79CMrSD9wCHYjQRDbXDg6uo1qZt5HeARou</p>
          <br></br>
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

export default Donate;