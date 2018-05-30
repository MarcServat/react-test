import React, { Component } from 'react';

class Tenth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bt-tenth">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Tenth;