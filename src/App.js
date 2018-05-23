import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakesList from "./containers/CakesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cakes!!</h1>
        </header>
        <CakesList />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hello
          Code Your Future
        </p>
        <h1>This is awesome description of cakes</h1>
      </div>
    );
  }
}

export default App;
