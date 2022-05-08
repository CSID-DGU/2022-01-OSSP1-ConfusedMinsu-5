import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

    // message 초기값을 ""으로 설정.
    const [message, setMessage] = useState("");

    // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
    useEffect( () => {

        // fetch(url,options) : HTTP 요청 함수
        fetch('/demo/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}

export default App;