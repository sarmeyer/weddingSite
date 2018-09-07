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

class App extends Component {
  render() {
    return (
      <div className="is-preload">
        <Header />
        <div id="home" className="main style1 dark fullscreen">
          <div className="content">
            <div className="mainTitle">Sarah & Michael</div>
            <div className="mainDetails">
              <div>June 29, 2019</div>
              <div style={{ marginBottom: "1em" }}>Boulder, Colorado</div>
            </div>
          </div>
          <a href="#one" className="mainArrow button style2 down" />
        </div>
        <WeddingSection />
        <WelcomeParty />
        <Hotel />
        <Travel />
        <Photos title="Meet the Party" />
        <Photos title="Our Adventures" />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
