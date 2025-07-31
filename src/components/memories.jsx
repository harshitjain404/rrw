import React from 'react';
import './memories.css';

const memories = [
  {
    caption: 'More memories coming soon',
    emoji: '📷',
  },
  {
    caption: 'To be clicked together 🥰',
    emoji: '💕',
  },
  {
    caption: 'Moments yet to happen 💌',
    emoji: '⏳',
  },
];

const MemoryBoard = () => {
  return (
    <div className="memory-board">
      {memories.map((memory, index) => (
        <div key={index} className={`polaroid rotate-${index % 3}`}>
          <div className="photo-area">{memory.emoji}</div>
          <div className="caption">{memory.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default MemoryBoard;
