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
    this.tenthList = 9;
    this.state = {
      numRows: 0,
      tenthData: 0,
      tenth: Array(10).fill(0).reduce((acc, value, index) => {
        acc.push({
          key: index,
          name: `Tenth ${index}`,
          count: value
        })
        return acc
      },[])
    };
  }

  handlerAddRow(e) {
      this.setState({numRows: e})
  }

  // Update the tenth counter
  handlerCounter(tenth) {
    let copiedState = Object.assign([], this.state.tenth)
    copiedState[tenth].count = copiedState[tenth].count + 1
    this.setState({tenth: copiedState})
  }

  // Avoid childrens re-render
  shouldComponentUpdate(nextProp, nextState) {
    return (this.state.numRows === nextState.numRows) ? false : true
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
