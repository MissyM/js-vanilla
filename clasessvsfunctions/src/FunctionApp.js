//Functional component are easier to read and maintain.
import React, {useState} from 'react';

export default function CounterWithFunction() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(counter + 1)

  return (
    <>
      <p>counter: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}