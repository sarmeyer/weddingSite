import React, { Component } from "react";
import { Link } from "react-scroll";

class Travel extends Component {
  render() {
    return (
      <div id="travel" className="main style2 dark fullscreen">
        <div
          className="content box style2"
          style={{ textAlign: "center !important" }}
        >
          <h2>Travel Info</h2>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            DIA to Boulder
          </div>
          <div>Bus, directions, link to map</div>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            Things to do and see
          </div>
          <ul>
            <li>Chautauqua Hiking Trails & Dining Hall</li>
            <li>Boulder Tea House</li>
            <li>The Boulder Creek Path</li>
            <li>University of Colorado Campus</li>
            <li>Pearl Street Shops & Restaurants</li>
          </ul>
        </div>
        <Link
          activeClass="active"
          className="button style2 down anchored"
          to="people"
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

export default Travel;
