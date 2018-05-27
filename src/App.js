import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Button from './button/Button';
import Timetable from './Timetable/Timetable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={numRows: 0};
  }

  handlerAddRow(e) {
    this.setState({numRows: e})
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Button updateTable={this.handlerAddRow.bind(this)}/>
        <Timetable numRows={this.state.numRows}/>
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
