import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const starContainerRef = useRef();

  useEffect(() => {
    const container = starContainerRef.current;
    const numStars = 80;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div className="starry-background" ref={starContainerRef}></div>;
};

export default StarryBackground;
