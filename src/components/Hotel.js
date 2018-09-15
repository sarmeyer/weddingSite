import React, { Component } from "react";
import { Link } from "react-scroll";

class Hotel extends Component {
  render() {
    return (
      <div id="hotel" className="main style2 right dark fullscreen">
        <div className="content box style2" id="details">
          <h2>Hotel Info</h2>
          <div className="details">
            <div>
              For our group rate, please reserve your room before April 25th.
            </div>
            <a href="https://www.boulderado.com/">Hotel Boulderado</a>
            <div>2115 13th St, Boulder, CO 80302</div>
          </div>
        </div>
        <Link
          activeClass="active"
          className="button style2 down anchored"
          to="travel"
          spy={true}
          smooth={true}
          duration={500}
        >
          Next
        </Link>
      </div>
    );
  }
}

export default Hotel;
