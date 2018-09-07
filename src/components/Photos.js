import React, { Component } from "react";
import PropTypes from "prop-types";

class Photos extends Component {
  render() {
    const { title } = this.props;
    return (
      <div id="photos" className="main style3 primary">
        <div className="content">
          <h2>{title}</h2>
          <div className="gallery">
            <article className="from-left">
              <a href="images/fulls/01.jpg" className="image fit">
                <img
                  src="images/thumbs/01.jpg"
                  title="The Anonymous Red"
                  alt=""
                />
              </a>
            </article>
            <article className="from-right">
              <a href="images/fulls/02.jpg" className="image fit">
                <img
                  src="images/thumbs/02.jpg"
                  title="Airchitecture II"
                  alt=""
                />
              </a>
            </article>
            <article className="from-left">
              <a href="images/fulls/03.jpg" className="image fit">
                <img src="images/thumbs/03.jpg" title="Air Lounge" alt="" />
              </a>
            </article>
            <article className="from-right">
              <a href="images/fulls/04.jpg" className="image fit">
                <img src="images/thumbs/04.jpg" title="Carry on" alt="" />
              </a>
            </article>
            <article className="from-left">
              <a href="images/fulls/05.jpg" className="image fit">
                <img
                  src="images/thumbs/05.jpg"
                  title="The sparkling shell"
                  alt=""
                />
              </a>
            </article>
            <article className="from-right">
              <a href="images/fulls/06.jpg" className="image fit">
                <img src="images/thumbs/06.jpg" title="Bent IX" alt="" />
              </a>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

Photos.proptypes = {
  title: PropTypes.string,
  images: PropTypes.array
};

export default Photos;
