import React from 'react';
import './flipcard.css';

const FlipCard = ({ frontText, backText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};



export default FlipCard;