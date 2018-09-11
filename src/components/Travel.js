import React, { Component } from "react";
import { Link } from "react-scroll";

class Travel extends Component {
  render() {
    return (
      <div id="travel" className="main style2 dark fullscreen">
        <div className="content box style2">
          <h2>Travel Info</h2>
          <div className="details">
            <div>
              Lorem ipsum dolor sit amet, urna tellus vel, vitae lorem
              curabitur, non lorem. Consectetuer mus, montes adipiscing
              diamlorem massa lorem varius erat, tempus dis, metus a. Dolor id
              tincidunt per aenean non, commodo tortor, tristique consectetuer
              maecenas pellentesque morbi, enim sed blandit consectetuer in, in
              fringilla. Libero fusce nullam voluptatibus libero lorem. Blandit
              montes tempor parturient feugiat duis in, mattis risus varius
              nibh, nibh pellentesque tellus vestibulum mollit, sit sollicitudin
              placerat viverra urna integer semper, ut non cras ut nonummy.
              Lacinia sem tellus sem elit mattis a, turpis id semper vestibulum,
              integer vivamus mauris ligula, sit blandit dui, tempor mauris
              consectetuer a tortor luctus. Convallis nam turpis aptent nulla
              metus. Vivamus per sapien, ligula mauris vestibulum, quam dolor
              mauris lorem ornare sed. Pharetra mauris, sollicitudin neque
              mollis fusce id in, fusce eu consequat, id nonummy pellentesque
              ultricies tortor sit, justo eu nam nunc blandit. Pellentesque
              mattis libero lacus. Mauris erat pede odio praesent. Duis semper
              amet amet vitae, praesent ut dis, nam sollicitudin at leo leo
            </div>
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

export default Travel;
