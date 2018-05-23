import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Button from './button/Button';
import './App.css';
import Timetable from './Timetable/Timetable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Button></Button>
        <Timetable></Timetable>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
