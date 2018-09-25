import React, { Component } from "react";
import { Link } from "react-scroll";

class Hotel extends Component {
  render() {
    return (
      <div id="hotel" className="main style2 right dark fullscreen">
        <div className="content box style2" id="details">
          <h2>Hotel Info</h2>
          <div className="details">
            <section style={{ marginBottom: ".5em" }}>
              <a href="https://www.boulderado.com/">Hotel Boulderado</a>
              <div>(303) 442-4344</div>
              <div>2115 13th St, Boulder, CO 80302</div>
            </section>

            <section>
              <div style={{ marginBottom: ".5em" }}>
                For our group rate, please reserve your room before April 25th.
              </div>
              <a
                href="https://reservations.travelclick.com/13070?groupID=2388220"
                style={{ fontSize: "1.1em" }}
              >
                - Click here to book your stay -
              </a>
            </section>
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
