import React, { Component } from 'react';
import './Tenth.css';

class Tenth extends Component {

  render() {
    return (
      <span className="tenthCounter">
        <div className="title">{this.props.name}</div>
        <div className="counter">{this.props.value}</div>
      </span>
    )}
}

export default Tenth;
