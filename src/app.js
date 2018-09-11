import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Footer,
  Header,
  WelcomeParty,
  WeddingSection,
  Hotel,
  Photos,
  Travel
} from "./components";
import { Link, Element, animateScroll as scroll } from "react-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="is-preload">
        <Header />
        <Element name="home" className="element">
          <div id="home" className="main style1 dark fullscreen">
            <div className="content">
              <div className="mainTitle">Sarah & Michael</div>
              <div className="mainDetails">
                <div>June 29, 2019</div>
                <div style={{ marginBottom: "1em" }}>Boulder, Colorado</div>
              </div>
            </div>
            <Link
              activeClass="active"
              className="mainArrow button style2 down wedding"
              to="wedding"
              spy={true}
              smooth={true}
              duration={500}
            />
          </div>
        </Element>
        <WeddingSection id="wedding" />
        <WelcomeParty id="welcome" />
        <Hotel id="hotel" />
        <Travel id="travel" />
        <Photos title="Meet the Party" id="people" />
        <Photos title="Our Adventures" id="photos" />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
