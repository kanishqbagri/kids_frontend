import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ScrollStyle from './ScrollStyle';
import App from './App';
import {Header, Tile, ButtonGenerate}  from './HeadernTile';
import Tile1 from './Card';
import reportWebVitals from './reportWebVitals';
import { Card } from '@material-ui/core';
// import ButtonGenerate from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Header />
    
    <Tile />

    <Tile1 />

    <ButtonGenerate />

  </React.StrictMode>
);

// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <Tile />
//     </React.Fragment>
//   );
// }

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
