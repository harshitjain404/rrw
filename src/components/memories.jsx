// Memories.js
import React from 'react';
import './memories.css';

const memories = [
  {
    image: 'https://i.imgur.com/0y8Ftya.jpg',
    message: "Our first coffee date ☕",
  },
  {
    image: 'https://i.imgur.com/VYH7j1G.jpg',
    message: "That goofy selfie 🤪",
  },
  {
    image: 'https://i.imgur.com/vA1tJiu.jpg',
    message: "Beach walk at sunset 🌅",
  },
  {
    image: 'https://i.imgur.com/ogMk3NN.jpg',
    message: "Laughing like kids 😂",
  },
];

const Memories = () => {
  return (
    <section className="memories-section">
      <h2 className="memories-heading">💞 Our Memories 💞</h2>
      <div className="memory-grid">
        {memories.map((mem, idx) => (
          <div key={idx} className="memory-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={mem.image} alt="Memory" />
              </div>
              <div className="card-back">
                <p>{mem.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories;
