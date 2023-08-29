import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyCounter } from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyCounter value={5} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
