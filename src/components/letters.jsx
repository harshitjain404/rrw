// src/components/Letters.js
import React from 'react';
import './letters.css';

const letters = [
  {
    title: "Letter #1 💖",
    content: "You are the smile to my mornings and the peace to my nights.",
  },
  {
    title: "Letter #2 ✨",
    content: "Every little moment with you is a memory I cherish forever.",
  },
  {
    title: "Letter #3 🌸",
    content: "Loving you is my favorite hobby. You’re my best decision ever!",
  },
];

const Letters = () => {
  return (
    <div className="letters-section">
      <h2>💌 Open Your Letters</h2>
      <div className="letters-grid">
        {letters.map((letter, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                ✉️ {letter.title}
              </div>
              <div className="flip-card-back">
                {letter.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Letters;
