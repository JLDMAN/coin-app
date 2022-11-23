import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // can omit .js from file name even if filetype is .js type
// App, here in turqouise, refers to a function name in the file App.js

const root = ReactDOM.createRoot(document.getElementById('root')); // gets the div from index.html in public folder
root.render(<App />); // imports the App.js file
