import React from 'react';
import './App.css';
import BikesList from "./components/BikesList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Police Department of Berlin</h1>
        <h2>Stolen Bikes</h2>
      </header>
      <BikesList />
    </div>
  );
}

export default App;
