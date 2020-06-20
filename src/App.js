import React, { useState } from 'react';
import './App.css';
import Child1 from './child/Child1';
const MyContext = React.createContext();

function App() {
  const [Persion, setPersion] = useState({
    name: 'Dan',
    age: 100,
    cool: true
  });
  return (
    <div className="App">
      <MyContext.Provider value={Persion}>
        <Child1 />

      </MyContext.Provider>


    </div>
  );
}

export default App;
