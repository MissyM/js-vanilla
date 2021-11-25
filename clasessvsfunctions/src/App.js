import './App.css';
import React from 'react';
import Counter from './ClassApp'
import CounterWithFunction from './FunctionApp'

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterWithFunction/>
    </div>
  );
}

export default App;
