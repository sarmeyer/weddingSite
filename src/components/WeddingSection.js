import React, { Component } from "react";
import { Link } from "react-scroll";

class WeddingSection extends Component {
  render() {
    return (
      <div id="wedding" className="main style2 dark right fullscreen">
        <div className="content box style2 opacity94">
          <h2>The Wedding</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.5085759386116!2d-105.28105134934957!3d40.01942327931228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec27daad9a33%3A0xd6108c99d20f92f4!2sRembrandt+Yard!5e0!3m2!1sen!2sus!4v1535862592665"
            width="400"
            height="300"
            frameborder="0"
            style={{ border: "0", marginBottom: "1em" }}
            allowfullscreen
          />
          <div style={{ fontSize: "1.5em" }}>Ceremony & Reception</div>
          <div>Saturday, June 29, 2019</div>
          <div>6 PM</div>
          <div>The Rembrandt Yard</div>
          <div>Boulder, Colorado</div>
        </div>
        <Link
          activeClass="active"
          className="button style2 down anchored"
          to="welcome"
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

export default WeddingSection;
