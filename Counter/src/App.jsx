import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    {
      counter == 20 ? counter : setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    {
      counter == 0 ? counter : setCounter(counter - 1);
    }
  };
  return (
    <>
      <h2>Maximum value is 20 and minimum value is 0</h2>
      <h1>Couter value: {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
