import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>Big Picture</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#one">The Wedding</a>
            </li>
            <li>
              <a href="#two">Timeline</a>
            </li>
            <li>
              <a href="#three">Travel Details</a>
            </li>
            <li>
              <a href="#photos">Our Adventures</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
