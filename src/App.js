import './App.css';
import React,{useState, useEffect} from 'react';
function App() {
  const [counter, setCounte ] =useState(0); //regresa dos valores
  useEffect(() => {
    setCounte(count + 1);
    return () => {
      console.log('Cleanup')//resetea todas las variables
    }
  },[])//componentDidMount

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounte(counter + 1)}>+</button>
     
    </div>
  );
}

export default App;
