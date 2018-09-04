import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Footer, Header } from "./components";

class App extends Component {
  render() {
    return (
      <div className="is-preload">
        <Header />
        <div id="home" className="main style1 dark fullscreen">
          <div className="content">
            <header>
              <h2>Sarah & Michael</h2>
            </header>
            <p>June 29, 2019</p>
            <p>Boulder, Colorado</p>
            <a href="#one" className="button style2 down" />
          </div>
        </div>
        <div id="one" className="main style2 dark right fullscreen">
          <div className="content box style2 opacity94">
            <h2>The Wedding</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.5085759386116!2d-105.28105134934957!3d40.01942327931228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec27daad9a33%3A0xd6108c99d20f92f4!2sRembrandt+Yard!5e0!3m2!1sen!2sus!4v1535862592665"
              width="400"
              height="300"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen
            />
            <h3>Ceremony & Reception</h3>
            <p>Saturday, June 29, 2019</p>
            <p>6 PM</p>
            <p>The Rembrandt Yard</p>
            <p>Boulder, Colorado</p>
          </div>
          <a href="#two" className="button style2 down anchored" />
        </div>
        <div id="two" className="main style2 left dark fullscreen">
          <div className="content box style2">
            <h2>The Welcome Party</h2>
            <p>Friday, June 28, 2019</p>
            <p>6-9 PM</p>
            <p>The Bohemian Biergarten</p>
            <p>Boulder, CO</p>
          </div>
          <a href="#photos" className="button style2 down anchored">
            Next
          </a>
        </div>
        <div id="three" className="main style2 right dark fullscreen">
          <div className="content box style2">
            <h2>Hotel Info</h2>
            <p>
              For our group rate, please reserve your room before April 25th.
            </p>
            <a href="https://www.boulderado.com/">Hotel Boulderado</a>
            <p>2115 13th St, Boulder, CO 80302</p>
          </div>
          <a href="#photos" className="button style2 down anchored">
            Next
          </a>
        </div>
        <div id="photos" className="main style3 primary">
          <div className="content">
            <h2>Meet the Party</h2>
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
        <div id="photos" className="main style3 primary">
          <div className="content">
            <h2>Our Adventures</h2>
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
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
