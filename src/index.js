import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import ScrollStyle from './ScrollStyle';
// import App from './App';
import {Header, Tile, ButtonGenerate}  from './HeadernTile';
import Tile1 from './Card';
import reportWebVitals from './reportWebVitals';
import Button1 from './Button';
import { BrowserRouter } from 'react-router-dom';
import Page1 from './page1';
import QuizApp from './QuizApp';
import RouteManager from './RouteManager';

// ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render(
  <BrowserRouter>
    <RouteManager />
  </BrowserRouter>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();