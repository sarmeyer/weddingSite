import React, { Component } from "react";
import { Link } from "react-scroll";

class WelcomeParty extends Component {
  render() {
    return (
      <div id="welcome" className="main style2 left dark fullscreen wedding">
        <div className="content box style2">
          <h2>The Welcome Party</h2>
          <div className="details">
            <div>Friday, June 28, 2019</div>
            <div>6-9 PM</div>
            <div>The Bohemian Biergarten</div>
            <div>Boulder, CO</div>
          </div>
        </div>
        <Link
          activeClass="active"
          className="button style2 down anchored"
          to="hotel"
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

export default WelcomeParty;
