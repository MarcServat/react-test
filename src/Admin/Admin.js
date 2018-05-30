import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.resetData = this.resetData.bind(this);
    this.state = { numRows: 0 };
  }

  resetData(e) {
    console.log('soy admin')
  }

  render() {
    return (
      <div className="bt-admin">
      <div>WELCOME</div>
        <button type="submit" onClick={this.resetData}>Get a Tenth!</button>
      </div>
    );
  }
}

export default Admin;
