import React from "react";
import "./App.css";
import BikesList from "./components/BikesList";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Berlin Stolen Bikes Dashboard</h1>
      </header>

      <Switch>
        <Route exact path="/" component = {BikesList} />
        <Route path="/index/:pageNumber" component = {BikesList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
