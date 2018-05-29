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
      tenth: Array(9).fill(0).reduce((acc, value, index) => {
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

  handlerCounter(e) {
    let copyState = Object.assign([], this.state.tenth)
    copyState[e].count = copyState[e].count + 1
  
    console.log(copyState)    
    this.setState({tenth: copyState})
    console.log(this.state.tenth)
  }

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
