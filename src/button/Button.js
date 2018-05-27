import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { numRows: 0 };
  }

  incrementRow() {
    this.setState({numRows: this.state.numRows + 1})
    this.props.updateTable(this.state.numRows)
  }

  render() {
    return (
        <button onClick={this.incrementRow.bind(this)}>{this.state.numRows}Get a Tenth!</button>
    );
  }
}

export default Button;
