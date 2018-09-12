import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Photos extends Component {
  render() {
    const { title, link, images } = this.props;

    //***** could have two different arrays for left and right and map over them separately to create the `from-left` and `from-right` articles

    return (
      <div id={link} className="main style3 primary">
        <div className="content">
          <h2>{title}</h2>
          {images && (
            <div className="gallery">
              <article className="from-left">
                <a href={`images/fulls/${images[0]}`} className="image fit">
                  <img src={`images/thumbs/${images[0]}`} alt="" />
                </a>
              </article>
              <article className="from-right">
                <a href={`images/fulls/${images[1]}`} className="image fit">
                  <img src={`images/thumbs/${images[1]}`} alt="" />
                </a>
              </article>
              <article className="from-left">
                <a href={`images/fulls/${images[2]}`} className="image fit">
                  <img src={`images/thumbs/${images[2]}`} alt="" />
                </a>
              </article>
              <article className="from-right">
                <a href={`images/fulls/${images[3]}`} className="image fit">
                  <img src={`images/thumbs/${images[3]}`} alt="" />
                </a>
              </article>
              <article className="from-left">
                <a href={`images/fulls/${images[4]}`} className="image fit">
                  <img src={`images/thumbs/${images[4]}`} alt="" />
                </a>
              </article>
              <article className="from-right">
                <a href={`images/fulls/${images[5]}`} className="image fit">
                  <img src={`images/thumbs/${images[5]}`} alt="" />
                </a>
              </article>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Photos.proptypes = {
  title: PropTypes.string,
  images: PropTypes.array,
  link: PropTypes.string
};

export default Photos;
