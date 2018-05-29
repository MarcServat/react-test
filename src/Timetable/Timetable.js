import React, { Component } from 'react';
import { Classes } from "@blueprintjs/core"
import './Timetable.css';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
    this.getTime = this.getTime.bind(this);
    this.rows = [];    
    this.data = [];
    this.state = {
      numTenth: 0,
    }
  }

  getTime() {
    const d = new Date(Date.now());  
    const tenth = d.getMilliseconds().toString()[0];
    const time = `${d.toDateString()} ${d.toLocaleTimeString()}.${d.getMilliseconds()}`
    this.tenth = tenth
    return {time, tenth}
  }


  createTable() {
    const {time, tenth} = this.getTime()
    this.data.push({time, tenth})
    let cell = []
    Object.values(this.data[this.data.length-1]).forEach((value, idx) => {
      let cellID = `cell${this.data.length}-${idx}`
      cell.push(<td key={cellID} id={cellID}>{value}</td>)    
    });
    this.rows.push(<tr key={this.rows.length} id={this.rows.length}>{cell}</tr>)      
    return this.rows
  }

  componentDidUpdate(prevState) {
    this.props.updateCounter(this.tenth)
  }

  render() {
    let rows = this.createTable()
    return (
      <table className={Classes.HTML_TABLE_BORDERED}>
      <thead>
        <tr>
          <th>Time</th>
          <th>Tenth of a second</th>
        </tr>
      </thead>
      <tbody>
        { rows }      
      </tbody>
    </table>
  )}
}

export default Timetable;
