import React from "react";

function LowBar() {
  return (
    <div className="footbarcontain">
      <div classname="footcolumn">
        <h5> Bio </h5>
        <p>
          {" "}
          Currently in Autin, by way of Cedar Hill. Emerging Software Developer
          excited about joining a team and continuing to be nourished by all
          there is to learn in programming. Passionate, and on a pursuit.
        </p>
      </div>
      <div classname="footcolumn">
        <h5> Tools </h5>
        <ul>
          <li>Rails</li>
          <li>React Javascript</li>
          <li>Faker::gem</li>
          <li>The Internet</li>
        </ul>
      </div>
      <div classname="footcolumn">
        <ul>
          <li>Resume</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
}
export default LowBar
