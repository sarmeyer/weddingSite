import React, { Component } from "react";

class Hotel extends Component {
  render() {
    return (
      <div id="three" className="main style2 right dark fullscreen">
        <div className="content box style2">
          <h2>Hotel Info</h2>
          <div className="details">
            <div>
              For our group rate, please reserve your room before April 25th.
            </div>
            <a href="https://www.boulderado.com/">Hotel Boulderado</a>
            <div>2115 13th St, Boulder, CO 80302</div>
          </div>
        </div>
        <a href="#photos" className="button style2 down anchored">
          Next
        </a>
      </div>
    );
  }
}

export default Hotel;
