import "./faqPage.css";
import {useState} from "react";
import FAQ1 from "../faqPage/faq1Page";
import FAQ2 from "../faqPage/faq2Page";
import FAQ3 from "../faqPage/faq3Page";
import FAQ4 from "../faqPage/faq4Page";
import FAQ5 from "../faqPage/faq5Page";
import FAQ6 from "../faqPage/faq6Page";
import FAQ7 from "../faqPage/faq7Page";
import App from '../../App';

function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);

  const showFaq1 = ()=> {
    setFaq1(!faq1);
  }

  const showFaq2 = ()=> {
    setFaq2(!faq2);
  }

  const showFaq3 = ()=> {
    setFaq3(!faq3);
  }

  const showFaq4 = ()=> {
    setFaq4(!faq4);
  }

  const showFaq5 = ()=> {
    setFaq5(!faq5);
  }

  const showFaq6 = ()=> {
    setFaq6(!faq6);
  }

  const showFaq7 = ()=> {
    setFaq7(!faq7);
  }

  const [home, setHome] = useState(false);
  const [hideFAQ, setHideFAQ] = useState(true);

  const toggleHome = ()=> {
    setHome(!home);
    setHideFAQ(!hideFAQ);
  };

  return (
    <div>
      {hideFAQ && (
        <div className="center">
          <div className="">
            <button className="faqButton" onClick={showFaq1}>What are cryptocurrencies used for?</button>
              {faq1 && (
                <FAQ1 />
              )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq2}>What other uses do cryptocurrencies have?</button>
              {faq2 && (
                <FAQ2 />
              )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq3}>What is a cryptocurrencie ledger?</button>
              {faq3 && (
                <FAQ3 />
              )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq4}>Is blockchain linked to only cryptocurrencies??</button>
              {faq4 && (
                <FAQ4 />
              )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq5}>Some quick definitions.</button>
              {faq5 && (
                <FAQ5 />
            )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq6}>Does CI have a favorite cryptocurrencie? </button>
              {faq6 && (
                <FAQ6></FAQ6>
            )}   
          </div>
          <div className="">
            <button className="faqButton" onClick={showFaq7}>What cryptocurrencie shoul you buy? </button>
              {faq7 && (
                <FAQ7></FAQ7>
            )}   
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="footer">
            <button className="submitButtonNavigate textAndButtonPosition" onClick={toggleHome}> Home </button>
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

export default Faq;