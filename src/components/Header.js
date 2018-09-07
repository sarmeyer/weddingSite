import React, { Component } from "react";
import { scrollToElement } from "scroll-to-element";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <span>#BoulderShenanEgans</span>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="one">The Wedding</a>
            </li>
            <li>
              <a href="#two">The Welcome Party</a>
            </li>
            <li>
              <a href="#three">Hotel Info</a>
            </li>
            <li>
              <a href="#travel">Travel</a>
            </li>
            <li>
              <a href="#people">The People</a>
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
