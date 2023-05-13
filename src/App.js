import './App.css';
import React,{useState} from 'react';
function App() {
  const [counter, setCounte ] =useState(0); //regresa dos valores
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounte(counter + 1)}>+</button>
     
    </div>
  );
}

export default App;
