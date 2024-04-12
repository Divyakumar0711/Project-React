import "./App.css";

function App() {
  // for creact react app
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  // for vite
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
