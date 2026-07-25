import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {

  let [counter, setCounter] = useState(10);

  // useState hook updates the state variable and re-renders the component
  // everywhere that state variable is used

  function addValue() {
    if (counter === 20) {
      alert("Value reached 20")
      return;
    }
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);

    console.log(`Value added, Value becomes ${counter}`);
  }

  function subValue() {
    if (counter === 0) {
      alert("Value reached 0")
      return;
    }
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);

    console.log(`Value subtracted, Value becomes ${counter}`);
  }

  return (
    <>
      <h1>Project 2</h1>
      <h2>Counter Value {counter}</h2>
      <button
        onClick={addValue}>Add Value</button>
      <br />
      <button
        onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
