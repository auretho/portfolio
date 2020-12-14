import React from 'react';
import Nav from '../Nav';
import Home from '../Home';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
