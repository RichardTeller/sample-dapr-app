import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiDemo from './components/ApiDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ApiDemo />
        
      </header>
    </div>
  );
}

export default App;
