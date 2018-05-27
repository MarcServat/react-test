import React, { Component } from 'react';
import {Table, Column, Cell} from '@blueprintjs/table'
import './Timetable.css';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.tenth = 0;
    this.time = '';
    this.table = {time: [], tenth: []};
    this.state = {time: [], tenth: []};
  }

  componentWillUpdate(){
    const d = new Date(Date.now());    
    this.tenth = d.getMilliseconds().toString()[0];
    this.time = `${d.toDateString()} ${d.toLocaleTimeString()}.${d.getMilliseconds()}`      
    this.table['time'].push(this.time)
    this.table['tenth'].push(this.tenth)
  }

  getTime(rowIndex, columnIndex) {
    return  <Cell columnIndex={columnIndex} rowIndex={rowIndex}>
              {this.table['time'][rowIndex]}
            </Cell>
  }

  getTenth(rowIndex, columnIndex) {
    return <Cell columnIndex={columnIndex} rowIndex={rowIndex}>{this.table['tenth'][rowIndex]}</Cell>
  }

  render() {
    return (
      <div>
        <Table  numRows={this.props.numRows}
                enableRowHeader={false}
                defaultColumnWidth={300}>
          <Column name="Time" cellRenderer={this.getTime.bind(this)}/>
          <Column name="Tenth of a second" cellRenderer={this.getTenth.bind(this)}/>
        </Table>
      </div>
    )}
}

export default Timetable;
