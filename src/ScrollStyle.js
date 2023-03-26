import React from 'react';
import './ScrollStyle.css';
import movie1 from './IMG_0.JPG';
import movie2 from './IMG_1.JPG';
import movie3 from './IMG_2.JPG';
import movie4 from './IMG_3.JPG';
import movie5 from './IMG_4.JPG';

function ScrollStyle() {
  return (
    <div className="movie-container">
      <div className="movie-row">
        <img src={movie1} alt="Movie 1" />
        <img src={movie2} alt="Movie 2" />
        <img src={movie3} alt="Movie 3" />
        <img src={movie4} alt="Movie 4" />
        <img src={movie5} alt="Movie 5" />
      </div>
    </div>
  );
}

export default ScrollStyle;
