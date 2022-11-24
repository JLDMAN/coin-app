import React, {useState} from 'react';
import "./Welcome.css";
import collectedCoinsLogo from '../../../src/assets/collectedCoinsLogo.png';
import App from '../../App';

function Welcome() {
  const [home, setHome] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(true);

  const toggleHome = ()=> {
    setHome(!home);
    setHideWelcome(!hideWelcome);
  };

  return (
    <div>
      {hideWelcome && (
        <div className="center">
          <div className='imageContainingDiv'>
              <div>
                <img className="imageSize" src={collectedCoinsLogo} alt="collectedCoinsLogo" />
              </div>
            </div>
            <div>
              <p className="appText">
                  CI is a app designed to give you insight into the world of cryptography as it’s being used with blockchain technology to 
                  create asset transfer solutions.

                  The most commonly know solution is Bitcoin, which was intended to serve as a store of wealth amidst troubling global
                  money markets.

                  CI is intended to give you insight into the world of cryptocurrencies without you having to login, sign in, signup or 
                  go through KYC.

                  You can learn about industry key words, coins and the projects that are trying to change the world.

                  Enjoy.
              </p>
              <p className="appText">
                  ~ CI Team
              </p>
            </div>
            <div className="pageFooterSpace"></div>
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

export default Welcome;
