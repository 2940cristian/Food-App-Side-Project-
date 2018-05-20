import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    );
  }
}

export default App;
