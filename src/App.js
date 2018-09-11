import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>  
          <Navbar />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
