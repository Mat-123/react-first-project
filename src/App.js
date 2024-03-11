import logo from "./logo.svg";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import ButtonComponent from "./components/ButtonComponent";
import FunctionButtonComponent from "./components/FunctionButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent ImgSource={"https://placedog.net/300"} altDesc="A beautiful doggo" />
        <FunctionButtonComponent TextButton="Pet Doggo Funzionante" />

        <ButtonComponent TextButton="Pet Doggo" />

        <ButtonComponent />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
