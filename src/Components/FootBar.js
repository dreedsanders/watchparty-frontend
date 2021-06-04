import React from "react"

function FootBar() {
    return (
      <div className="footbarcontain">
        <div className="footcolumn">
          <h5>Connect</h5>
          <a href="mailto:dreedsanders@gmail.com"> Send Me an Email!</a>
          <br></br>
          <a href="https://github.com/dreedsanders">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/donovan-sanders-22308928/">
            LinkedIn
          </a>
          <br></br>
          <a href="https://thedinnertabletalk.medium.com/">Medium</a>
        </div>
        <div className="footcolumn">
          <ul>
          <h5> Tools </h5>
          <li>Rails</li>
          <li>React Javascript</li>
          <li>Faker::gem</li>
          <li>The Internet</li>
          </ul>
        </div>
        <div className="footcolumn">
          <ul>
            <h5>More Info</h5>
            <li>Resume</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="footcolumn">
          <p>
            WatchParty was made over the course of the final three week phase in
            the Flatiron Software Development Bootcamp. Special thank you to the
            faker gem for seeding my initial database. While using WatchParty
            you are agreeing to absolutely zero terms and conditions. WatchParty
            is trademarked and copywright by someone, yet I do not know who that
            is, so, careful. If you've gotten this far I look forward to
            connecting and meeting. Id be delighted to see what you work on!
        
          <strong> Bio </strong>
            {" "}
            Currently in Autin, by way of Cedar Hill. Emerging Software
            Developer excited about joining a team and continuing to be
            nourished by all there is to learn in programming. Passionate, and
            on a pursuit.
    
          </p>
        </div>
        <div className="footcolumn">
        </div>
      </div>
    );
}
export default FootBar