import React, { useState, useRef, useEffect } from 'react';


function App() {
  let handleMouseMove = (event) => {
    setToado({
      x: event.clientX,
      y: event.clientY
    })

  }
  const inputEl = useRef(null);
 
  const [Toado, setToado] = useState({ x: 0, y: 0 });

  const [Stype, setStype] = useState({
    "width": 100,
    "height": 100,
    "background": "purple",
    "position": "absolute"
  });
  useEffect(() => {
    let Position = inputEl.current.getBoundingClientRect();
    setStype({ ...Stype, top: Toado.y, left: Toado.x })
    console.log(Position);


  },[Toado])
  return (
    <React.Fragment>
      <div style={{ height: '800px', width: "1500px", "position": "relative" }} onMouseMove={handleMouseMove}>
    
        <p style={{position:"absolute",top:0}}>The current mouse position is ({Toado.x}, {Toado.y})</p>
        <div style={Stype} ref={inputEl}></div>
      </div>

    </React.Fragment>
  );
}

export default App;
