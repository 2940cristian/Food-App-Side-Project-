import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Register from "./Components/Register/Register"

class App extends Component {
  render() {
    return (
      <Route exact path="/register" component={Register}/>
    );
  }
}

export default App;
