import { useState } from 'react'
import './App.css'

function App() {

  const[counter, setCounter] = useState(54)
  // let counter = 15;

  const addValue=() =>{
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }

  const removeValue = () => {
    setCounter((newCounter) => newCounter-1);
    setCounter((newCounter) => newCounter-1);
    setCounter((newCounter) => newCounter-1);
    setCounter((newCounter) => newCounter-1);
  }

  return (
    <>
      <h1>React Learning with hitesh {counter}</h1>
      <h2>Counter Value: </h2>
      <button
      onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: </p>
    </>
  )
}

export default App
