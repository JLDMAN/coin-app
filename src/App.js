import React, {useState} from 'react';
import Welcome from './components/welcomePage/Welcome';
import Search from './components/quickSearchPage/searchPage';
import Faq from './components/faqPage/faqPage';
import Donate from './components/donatePage/donatePage';
import collectedCoinsLogo from '../src/assets/collectedCoinsLogo.png';
import Tracker from './components/trendsPage/tracker';
// bootsrap modules
// import "bootstrap/dist/css/bootstrap.min.css";
// import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  // set page "show" to false until 
  // variable first then function to change variable state
  const [loadWelcomePage, setLoadWelcome] = useState(false);
  const [loadSearchPage, setLoadSearch] = useState(false);
  const [loadFaqPage, setLoadFaq] = useState(false);
  const [loadDonatePage, setLoadDonate] = useState(false);
  const [loadTrackerPage, setLoadTracker] = useState(false);
  const [loadMainPage, setLoadMainPage] = useState(true);

    const toggleWelcome = ()=> {
      setLoadWelcome(!loadWelcomePage)
      setLoadSearch(false)
      setLoadFaq(false)
      setLoadDonate(false)
      setLoadMainPage(false)
      setLoadTracker(false)
    }

    const toggleSearch = ()=> {
      setLoadSearch(!loadSearchPage)
      setLoadWelcome(false)
      setLoadFaq(false)
      setLoadDonate(false)
      setLoadMainPage(false)
      setLoadTracker(false)
    }

    const toggleFaq = ()=> {
      setLoadFaq(!loadFaqPage)
      setLoadSearch(false)
      setLoadWelcome(false)
      setLoadDonate(false)
      setLoadMainPage(false)
      setLoadTracker(false)
    }
    
    const toggleDonate = ()=> {
      setLoadWelcome(false)
      setLoadSearch(false)
      setLoadFaq(false)
      setLoadDonate(!loadDonatePage)
      setLoadMainPage(false)
      setLoadTracker(false)
    }

    const toggleTracker = ()=> {
      setLoadWelcome(false)
      setLoadSearch(false)
      setLoadFaq(false)
      setLoadDonate(false)
      setLoadMainPage(false)
      setLoadTracker(true)
    }

  return (
    <div className="webContainer">
      {loadMainPage && (
        <div className="center">
          <div className="imageContainingDiv">
            <div>
              <img className="imageSize" src={collectedCoinsLogo} alt="collected Coins Logo" />
            </div>
          </div>
          <div>
                  <p className="welcomeMessage">Start your journey.</p>
          </div>
          <div className="flexButtonContainer">
              <div className="flexItem">
                  <button className="submitButton" onClick={toggleWelcome}> Welcome </button>
              </div>
              <div className="flexItem">
                  <button className="submitButton" onClick={toggleSearch}> Quick Search </button>
              </div>
              <div className="flexItem">
                  <button className="submitButton" onClick={toggleTracker}> Trend Search </button>
              </div>
              <div className="flexItem">
                  <button className="submitButton" onClick={toggleFaq}> Faq </button>
              </div>
              <div className="flexItem">
                  <button className="submitButton" onClick={toggleDonate}> Donate </button>
              </div>
          </div>
        </div>
      )}
      <div>
        {loadWelcomePage && (
          <Welcome />
        )}
        {loadSearchPage && (
          <Search />
        )}
        {loadFaqPage && (
          <Faq />
        )}
        {loadDonatePage && (
          <Donate />
        )}
        {loadTrackerPage && (
          <Tracker />
        )}
      </div>
    </div>
  );
};

export default App;
