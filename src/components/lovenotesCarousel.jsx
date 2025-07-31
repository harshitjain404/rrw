import React, { useEffect, useRef, useState } from 'react';
import './LoveNotesCarousel.css';

const notes = [
  'You always make my day brighter 🌞',
  'I love how you say “Maar Khaega” 😄',
  'Cuddles with you = heaven 🧸',
  'Midnight talks > everything 🌙',
  'You’re my favorite person 🫶',
  'Life’s just better with you 💕',
 
];

const LoveNotesCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1;

    const scrollInterval = setInterval(() => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div className="notes-carousel">
      <h2 className="carousel-title">💌 Our Little Love Notes</h2>
      <div
        className="notes-wrapper"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {notes.map((note, i) => (
          <div className="note-card fade-in" key={i}>
            <div className="tape-top">🩵</div>
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveNotesCarousel;
