import React from 'react';
import cassetteBg from '../assets/cassete.jpeg'; // Add this image to your assets folder
import vinyl from '../assets/Vinyl.png'; 

const Mixtape = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cassetteBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3rem 1rem',
        margin: '2rem auto',
        borderRadius: '12px',
        maxWidth: '600px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for soft fade */}
      <div
        style={{
          background: 'rgba(255, 245, 250, 0.85)',
          padding: '2rem',
          borderRadius: '12px',
        }}
      >
           <img src={vinyl} alt="vinyl" className="spinning-vinyl" />
        <h2
          style={{
            fontFamily: 'cursive',
            color: '#c94f7c',
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          💖 Our Retro Mixtape 🎶
        </h2>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/5MXk8zXtvhIjC6F9EQP8Gj?utm_source=generator" 
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Our Mixtape"
        ></iframe>
      </div>
    </div>
  );
};

export default Mixtape;
