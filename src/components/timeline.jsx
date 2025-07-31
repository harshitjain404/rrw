// src/components/Timeline.js
import React from 'react';

const memories = [
  {
    date: "1st Date 💑",
    desc: "That nervous excitement and stolen glances – unforgettable!",
    img: "/assets/memories/date1.jpg",
  },
  {
    date: "Beach Walk 🌊",
    desc: "Walking hand in hand with the waves whispering beside us.",
    img: "/assets/memories/beach.jpg",
  },
  {
    date: "Random Ice Cream 🍦",
    desc: "A surprise scoop that turned into a full-on laugh session!",
    img: "/assets/memories/icecream.jpg",
  },
];

const Timeline = () => {
  return (
    <div className="bg-retroBlue py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-romantic text-white mb-8">📜 Our Story So Far</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {memories.map((mem, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition duration-300"
          >
            <img
              src={mem.img}
              alt={mem.date}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-pink-600">{mem.date}</h3>
            <p className="text-gray-700 mt-2">{mem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
