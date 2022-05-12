import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
const [message, setMessage] = useState("");
useEffect(()=>{
    fetch("/hello")
        .then(res => res.text())
        .then(message=>{
            setMessage(message);
        });
},[]);
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          1Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
