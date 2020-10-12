import React, { useState } from 'react';

import Box from "./Box"
import './App.css';

function App() {
  const [box1, setBox1] = useState({
    x: 100,
    y: 100,
    active: false,
    offset: {}
  });

  const [box2, setBox2] = useState({
    x: 500,
    y: 500,
    active: false,
    offset: {}
  });


  return (
    <div className="App">
      <svg width="100%" height="100%" >
        <line x1={box1.x + 50} y1={box1.y + 50} x2={box2.x + 50} y2={box2.y + 50} style={{
          stroke: "white", strokeWidth: "5px"
        }} />
        <Box position={box1} setPosition={setBox1} />
        <Box position={box2} setPosition={setBox2} />
      </svg>
    </div>
  );
}

export default App;
