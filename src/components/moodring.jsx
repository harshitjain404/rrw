import React, { useEffect, useState } from 'react';
import './moodring.css';

const moods = [
  { color: '#f06292', label: 'My heart skips 💓', aura: '#f48fb1' },
  { color: '#ba68c8', label: 'Cuddly and Cozy 🧸', aura: '#ce93d8' },
  { color: '#4fc3f7', label: 'Warm fuzzy love ☁️', aura: '#81d4fa' },
  { color: '#aed581', label: 'Peaceful with you 🌿', aura: '#dce775' },
  { color: '#ffd54f', label: 'Sunshine in my soul ☀️', aura: '#fff176' },
];

export default function MoodRing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % moods.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { color, label, aura } = moods[index];

  return (
    <div className="mood-ring-wrapper">
      <div className="pillow">
        <div
          className="mood-ring-circle"
          style={{
            background: `radial-gradient(circle, ${color} 40%, ${aura} 100%)`,
            boxShadow: `0 0 25px ${aura}`,
          }}
        >
          💍
        </div>
      </div>
      <p className="mood-ring-label">{label}</p>
      <div className="sparkle"></div>
    </div>
  );
}
