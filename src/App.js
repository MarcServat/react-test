import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Button from './button/Button';
import Timetable from './Timetable/Timetable';
import Tenth from './Tenth/Tenth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlerAddRow = this.handlerAddRow.bind(this);
    this.handlerCounter = this.handlerCounter.bind(this);
    this.state = {
      numRows: 0,
      numTenth: 0,
      tenth: [{
        name: "Tenth 0",
        count: 0
      },
      {
        name: "Tenth 1",
        count: 0
      },
      {
        name: "Tenth 2",
        count: 0
      },
      {
        name: "Tenth 3",
        count: 0
      },
      {
        name: "Tenth 4",
        count: 0
      },
      {
        name: "Tenth 5",
        count: 0
      },
      {
        name: "Tenth 6",
        count: 0
      },
      {
        name: "Tenth 7",
        count: 0
      },
      {
        name: "Tenth 8",
        count: 0
      },
      {
        name: "Tenth 9",
        count: 0
      }]
    };
  }

  handlerAddRow(e) {
    this.setState({numRows: e})
  }

  handlerCounter(e) {
    console.log(e)
    this.setState({numTenth: e})
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Button updateTable={this.handlerAddRow}/>
        <Timetable  updateCounter={this.handlerCounter} 
                    numRows={this.state.numRows}/>
        <div className="tenthRow">
        {this.state.tenth.map((val, i) => {
          return <Tenth key={i}
                        name={val.name}
                        value={val.count}/>          
        })}
        </div>
      </div>
    );
  }
}

export default App;
