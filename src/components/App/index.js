import React from 'react';
import logo from 'assets/logo.svg';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React</h1>
      </header>
      <p className="app-intro">
        To get started, edit <code>src/components/index.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
