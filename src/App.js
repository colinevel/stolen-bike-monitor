import React from 'react';
import './App.css';
import BikesList from "./components/BikesList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Berlin Stolen Bikes Dashboard</h1>
      </header>
      <BikesList />
    </div>
  );
}

export default App;
