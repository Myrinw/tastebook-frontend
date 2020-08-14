import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
//import { Provider } from "react-redux";
//mport {blabla} from "./store";



ReactDOM.render(

  <Router >
    <App />
  </Router>,

  document.getElementById('root')
);


