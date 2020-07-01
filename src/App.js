import React, { useState } from 'react';


function App() {
  let handleMouseMove = (event) => {
    setToado({
      x: event.clientX,
      y: event.clientY
    })

  }
  const [Toado, setToado] = useState({ x: 0, y: 0 });

  return (
    <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({Toado.x}, {Toado.y})</p>
    </div>

  );
}

export default App;
