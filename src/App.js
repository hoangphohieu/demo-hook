import React,{useState} from 'react';
import './App.css';
import Child1 from './child/Child1';
function App() {
  let a = 1;
  const [Num, setNum] = useState(0);
  return (
    <div className="App">
      <Child1 item={a} />
      <button  onClick={()=>setNum(Num+1)}>{Num}</button>
    </div>
  );
}

export default App;
