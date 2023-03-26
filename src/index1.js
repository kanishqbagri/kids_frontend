import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ScrollStyle from './ScrollStyle';
// import App from './App';
import {Header, Tile, ButtonGenerate}  from './HeadernTile';
import Tile1 from './Card';
import reportWebVitals from './reportWebVitals';
import Button1 from './Button';

function App(){
  return(
    <React.StrictMode>
  
      <Header />
      
      <div class="Tile">
        <Tile />
        <h2>Title</h2>
        <p id="tile-content"></p>
      </div>
      
      <Button1 />

      <Tile1 />
  
      <ButtonGenerate />
  
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// function App(){
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// return(
//   <React.StrictMode>
  
//     <Header />
    
//     <Tile />

//     <Tile1 />

//     <ButtonGenerate />

//   </React.StrictMode>
// );
// }

// ReactDOM.createRoot(document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
