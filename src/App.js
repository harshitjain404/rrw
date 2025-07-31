import React, { useEffect, useState } from 'react';
import Welcome from './components/welcome';
import FlipCard from './components/flipcard';
import TypewriterMessage from './components/typewritermessage';
import './App.css';
import Mixtape from './components/mixtape';
import StarryBackground from './components/starrybackground';
import MemoryBoard from './components/memories';
import LoveNotesCarousel from './components/lovenotesCarousel';
import MoodRing from './components/moodring';
import FinalProposal from './components/finalProposal';

function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Floating hearts setup
    const heartArray = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setHearts(heartArray);
  }, []);

  useEffect(() => {
    // Sparkle on click
    const sparkle = (e) => {
      const span = document.createElement('span');
      span.className = 'sparkle';
      span.innerText = '✨';
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 700);
    };
    document.addEventListener('click', sparkle);
    return () => document.removeEventListener('click', sparkle);
  }, []);

  return (
    <div className="App">
      {/* Floating Clouds */}
      <div className="cloud one" />
      <div className="cloud two" />
      <div className="cloud three" />

      {/* Floating Hearts */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content animated-section">
        <StarryBackground /> {/* Optional background layer */}
        <Welcome />

        <div className="cards-wrapper">
          <FlipCard
            frontText="Reason #1 I like you"
            backText="You laugh at my bad jokes 😄"
          />
          <FlipCard
            frontText="Reason #2 I admire you"
            backText="You care deeply about people 💕"
          />
          <FlipCard
            frontText="A future moment"
            backText="Watching sunsets together 🌇"
          />
        </div>

        <TypewriterMessage />
      </div>

      <span className="floating-teddy">🧸</span>
      <Mixtape />

      <MemoryBoard/>

<LoveNotesCarousel />

<MoodRing />

<FinalProposal/>
    </div>
  );
}

export default App;
