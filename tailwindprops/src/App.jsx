import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-400 text-black p-6 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card useName="Divyakumar Patel" btnTxt="Read more" />
      <Card useName="Hello world" btnTxt="Click me" />
    </>
  );
}

export default App;
