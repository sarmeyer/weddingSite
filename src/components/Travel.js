import React, { Component } from "react";
import { Link } from "react-scroll";

class Travel extends Component {
  render() {
    return (
      <div id="travel" className="main style2 dark fullscreen">
        <div
          className="content box style2"
          style={{ textAlign: "center !important" }}
        >
          <h2>Travel Info</h2>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            General Colorado Travel Information
          </div>
          <div>
            Colorado is the Mile High City meaning we sit 5,280 feet above sea
            level in town - Boulder has about the same elevation. Coming from
            sea level, the elevation change can sometimes cause headaches and
            altitude sickness. DRINK LOTS OF WATER.
          </div>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            Denver International Airport to Boulder
          </div>
          <div>
            There is a bus from the airport to Boulder which runs every 30
            minutes during the day (every hour after 9:20pm). You'll want to
            look for Route AB/AB1/AB2. The fare is $9 and it takes about an
            hour.
          </div>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            Denver International Airport to Downtown Denver
          </div>
          <div>
            The easiest way into Denver is the LightRail train which leaves
            directly from the airport and ends at Union Station in Downtown
            Denver. The fare is also $9 and it takes about 35 minutes.
          </div>
          <div style={{ fontWeight: "bold", letterSpacing: "initial" }}>
            Things to do and see in Boulder
          </div>
          <ul>
            <li>
              <a href="https://bouldercolorado.gov/parks-rec/chautauqua-park">
                Chautauqua Hiking Trails & Dining Hall
              </a>
            </li>
            <li>
              <a href="https://boulderteahouse.com/">
                Boulder Dushanbe Tea House
              </a>
            </li>
            <li>
              <a href="https://bouldercolorado.gov/parks-rec/boulder-creek-path">
                The Boulder Creek Path
              </a>
            </li>
            <li>
              <a href="https://www.colorado.edu/visit/">
                University of Colorado Campus - Folsom Field
              </a>
            </li>
            <li>
              <a href="https://www.boulderdowntown.com/">
                Pearl Street Shops & Restaurants
              </a>
            </li>
            <li>
              <a href="http://www.thehillboulder.com/history-of-the-hill/">
                The Hill - Historic District
              </a>
            </li>
          </ul>
        </div>
        <Link
          activeClass="active"
          className="button style2 down anchored"
          to="people"
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

export default Travel;
