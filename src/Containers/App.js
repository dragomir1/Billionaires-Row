import React from 'react';
import '../configuration/firebase.js';
import '../App.css';
import logo from '../assets/images/logo.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fortune favors the bold...</h1>
        <p> Build your wealth and own the world!</p>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
