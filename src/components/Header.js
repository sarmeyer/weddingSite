import React, { Component } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <span>#BoulderShenanEgans</span>
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="wedding"
                to="wedding"
                spy={true}
                smooth={true}
                duration={500}
              >
                The Wedding
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="welcome"
                to="welcome"
                spy={true}
                smooth={true}
                duration={500}
              >
                The Welcome Party
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="hotel"
                to="hotel"
                spy={true}
                smooth={true}
                duration={500}
              >
                Hotel Info
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="travel"
                to="travel"
                spy={true}
                smooth={true}
                duration={500}
              >
                Travel Info
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="people"
                to="people"
                spy={true}
                smooth={true}
                duration={500}
              >
                The People
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="photos"
                to="photos"
                spy={true}
                smooth={true}
                duration={500}
              >
                Our Adventures
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
