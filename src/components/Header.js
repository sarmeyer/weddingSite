import React, { Component } from "react";
import { scrollToElement } from "scroll-to-element";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>#BoulderShenanEgans</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  console.log("scroll to element");
                  e.preventDefault();
                  scrollToElement(".wedding");
                }}
              >
                The Wedding
              </a>
            </li>
            <li>
              <a href="#two">Timeline</a>
            </li>
            <li>
              <a href="#three">Travel Details</a>
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
