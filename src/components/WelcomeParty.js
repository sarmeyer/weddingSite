import React, { Component } from "react";

class WelcomeParty extends Component {
  render() {
    return (
      <div id="two" className="main style2 left dark fullscreen wedding">
        <div className="content box style2">
          <h2>The Welcome Party</h2>
          <div className="details">
            <div>Friday, June 28, 2019</div>
            <div>6-9 PM</div>
            <div>The Bohemian Biergarten</div>
            <div>Boulder, CO</div>
          </div>
        </div>
        <a href="#photos" className="button style2 down anchored">
          Next
        </a>
      </div>
    );
  }
}

export default WelcomeParty;
