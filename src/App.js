// src/App.js
import React from 'react';
import Welcome from './components/welcome';
import Letters from './components/letters';
// import other sections later...
import Memories from './components/memories';

function App() {
  return (
    <div>
      <Welcome />
      <Letters />
      <Memories />
    </div>
  );
}

export default App;
