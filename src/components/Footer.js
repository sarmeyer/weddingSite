import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-pinterest">
              <span className="label">Pinterest</span>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
