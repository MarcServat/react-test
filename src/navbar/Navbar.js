import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <p className="Item">React Test</p>
        <button className="button"><Link to='/'  className="react-link">Home</Link></button>
        <button className="button"><Link to='/admin'  className="react-link">Admin</Link></button>
      </nav>
    );
  }
}

export default Navbar;
