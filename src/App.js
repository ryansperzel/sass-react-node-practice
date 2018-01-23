import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import 'Welcome' from './compnents/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Welcome {...props} />} />
      </div>
    );
  }
}

export default App;
