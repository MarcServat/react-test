import React, { Component } from 'react';
import * as Blueprint from '@blueprintjs/core';
import { Cell, Column, Table } from '@blueprintjs/table';
import './Timetable.css';

class Timetable extends Component {
  render() {
    return (
      <Table numRows={10}>
        <Column name="Time"/>
        <Column name="Tenth"/>
      </Table>
    )}
}

export default Timetable;
