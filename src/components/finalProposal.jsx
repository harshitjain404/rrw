import React, { useEffect, useState } from 'react';
import './finalProposal.css';

const FinalProposal = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const messageLines = [
    "From the day we met,",
    "my world got warmer,",
    "my smile got brighter,",
    "and my days felt complete...",
    "",
    "So today, with all the love in my heart...",
    "",
    "💌 Will you be mine?"
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (currentLine < messageLines.length) {
      let charIndex = 0;
      const line = messageLines[currentLine];
      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + line.charAt(charIndex));
        charIndex++;
        if (charIndex === line.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText('');
            setCurrentLine((prev) => prev + 1);
          }, 1000);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    } else {
      setShowQuestion(true);
    }
  }, [currentLine]);

  return (
    <div className="proposal-container">
      <div className="note-paper">
        <div className="typed-line">{typedText}</div>
      </div>

      {showQuestion && !accepted && (
        <div className="buttons-container">
          <button className="yes-button" onClick={() => setAccepted(true)}>
            💖 Yes!
          </button>
          <button className="maybe-button">😳 I'm Thinking...</button>
        </div>
      )}

      {accepted && (
        <div className="promise-card">
          <div className="heart-explosion">💥💖💥</div>
          <h2>My Promise to You</h2>
          <p>I promise to always make you laugh, support you, and love you like no one else ever will.</p>
          <div className="teddy">🧸🌹</div>
        </div>
      )}
    </div>
  );
};

export default FinalProposal;
