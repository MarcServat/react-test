import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.incrementRow = this.incrementRow.bind(this);
    this.state = { numRows: 0 };
  }

  incrementRow(e) {
    this.setState({numRows: this.state.numRows + 1})
    this.props.updateTable(this.state.numRows)
  }

  render() {
    return (
      <div className="bt-tenth">
        <button type="submit" onClick={this.incrementRow}>Get a Tenth!</button>
      </div>
    );
  }
}

export default Button;
